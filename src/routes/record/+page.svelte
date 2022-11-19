<script lang="ts">
	import { Heading, P, Button } from 'flowbite-svelte';
	import PlayButton from '../../components/play-button.svelte';
	import { Cog6Tooth } from 'svelte-heros-v2';

	let stream: MediaStream | undefined;
	let video: HTMLVideoElement;
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let wrapper: HTMLDivElement;
	let controls: HTMLDivElement;

	$: {
		if (canvas) {
			ctx = canvas.getContext('2d')!;
		}
	}

	$: {
		if (wrapper) {
			const header = document.getElementById('header') as HTMLElement;
			wrapper.style.height = `calc(100vh - ${header.clientHeight}px)`;
		}
	}
	let recorder: MediaRecorder;
	let recording = false;

	let start_time: number;
	let time = '00:00:00';
	let timer: NodeJS.Timer;

	const mouse_position = { x: 0, y: 0 };
	let mouse_down = false;

	const view = {
		x_1: 0,
		x_2: 1920,
		y_1: 0,
		y_2: 1080
	};

	const scale = {
		x: 1,
		y: 1
	};

	const selection = {
		x_1: 0,
		x_2: 0,
		y_1: 0,
		y_2: 0
	};

	function get_view_height() {
		return Math.abs(view.y_2 - view.y_1);
	}
	function get_view_width() {
		return Math.abs(view.x_2 - view.x_1);
	}

	function resize_canvas(width: number, height: number) {
		canvas.width = width;
		canvas.height = height;

		controls.style.width = canvas.parentElement?.offsetWidth + 'px';
	}

	async function select_source() {
		reset();
		video.srcObject = null;
		video.muted = false;

		// get source
		stream = await navigator.mediaDevices.getDisplayMedia({
			audio: {
				autoGainControl: false,
				echoCancellation: false,
				noiseSuppression: false
			},
			video: true
		});

		// stream video to the video element
		video.srcObject = stream;

		// when video is loaded -> update canvas dimensions
		video.onloadedmetadata = () => {
			view.x_2 = video.videoWidth;
			view.y_2 = video.videoHeight;

			resize_canvas(view.x_2, view.y_2);

			scale.x = video.videoWidth / canvas.width;
			scale.y = video.videoHeight / canvas.height;

			video.muted = true;
		};

		// send frame to the canvas
		video.onplay = draw;

		// register events
		canvas.onmousemove = update_mouse_position;
		canvas.onmousedown = start_selection;
		canvas.onmouseout = end_selection;
		canvas.onmouseup = end_selection;

		// if all tracks are stopped -> disable stream
		for (let track of stream.getTracks()) {
			track.onended = () => {
				if (!stream || stream.getTracks().length - 1 == 0) {
					stream = undefined;
				}
			};
		}
	}

	function draw() {
		if (!canvas) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		if (get_view_height() == 0 || get_view_width() == 0) reset();

		ctx.drawImage(
			video,
			Math.round(view.x_1 * scale.x),
			Math.round(view.y_1 * scale.y),
			Math.round(get_view_width() * scale.x),
			Math.round(get_view_height() * scale.y),
			0,
			0,
			canvas.width,
			canvas.height
		);

		if (mouse_down) {
			ctx.strokeStyle = 'rgb(28, 100, 242)';
			ctx.lineWidth = 5;
			ctx.strokeRect(
				selection.x_1,
				selection.y_1,
				mouse_position.x - selection.x_1,
				mouse_position.y - selection.y_1
			);
		}

		window.requestAnimationFrame(draw);
	}

	function reset() {
		view.x_1 = 0;
		view.y_1 = 0;

		view.x_2 = video.videoWidth;
		view.y_2 = video.videoHeight;

		resize_canvas(view.x_2, view.y_2);
	}
	function update_mouse_position(event: MouseEvent) {
		const canvas_offset = canvas.getBoundingClientRect();
		const offset_x = canvas_offset.left;
		const offset_y = canvas_offset.top;
		const scale_x = canvas.width / canvas.clientWidth;
		const scale_y = canvas.height / canvas.clientHeight;
		mouse_position.x = (event.clientX - offset_x) * scale_x;
		mouse_position.y = (event.clientY - offset_y) * scale_y;

		if (mouse_position.x < 0) mouse_position.x = 0;
		if (mouse_position.y < 0) mouse_position.y = 0;
	}
	function start_selection(event: Event) {
		event.preventDefault();
		event.stopPropagation();
		selection.x_1 = mouse_position.x;
		selection.y_1 = mouse_position.y;
		mouse_down = true;
	}
	function end_selection(event: Event) {
		if (!mouse_down) return;

		event.preventDefault();
		event.stopPropagation();

		// create selection rectangle
		selection.x_2 = mouse_position.x;
		selection.y_2 = mouse_position.y;

		const new_scale = {
			x: get_view_width() / canvas.width,
			y: get_view_height() / canvas.height
		};

		// calculate new view
		view.x_2 = view.x_1 + selection.x_2 * new_scale.x;
		view.y_2 = view.y_1 + selection.y_2 * new_scale.y;
		view.x_1 += selection.x_1 * new_scale.x;
		view.y_1 += selection.y_1 * new_scale.y;

		resize_canvas(get_view_width(), get_view_height());

		mouse_down = false;
	}
	function stop_recording() {
		start_time = 0;
		clearInterval(timer);
		recorder?.stop();
	}

	function update_timer() {
		const date = new Date(Date.now() - start_time + new Date().getTimezoneOffset() * 60 * 1000);
		time = date.toLocaleTimeString();
	}

	function start_recording() {
		start_time = Date.now();
		timer = setInterval(update_timer, 1000);
		const recorded_chunks: Blob[] = [];
		const video_stream = canvas.captureStream(60).getTracks()[0];
		const audio_stream = (video as any as HTMLCanvasElement)
			.captureStream()
			.getTracks()
			.find((track) => track.kind == 'audio');

		const output_tracks: MediaStreamTrack[] = [];
		output_tracks.push(video_stream);
		if (audio_stream) output_tracks.push(audio_stream);
		const output_stream = new MediaStream(output_tracks);

		recorder = new MediaRecorder(output_stream, {
			mimeType: 'video/webm; codecs=vp9,opus'
		});

		recorder.start();
		recorder.ondataavailable = (event) => {
			recorded_chunks.push(event.data);
		};

		recorder.onstop = () => {
			var blob = new Blob(recorded_chunks, { type: 'video/webm' });
			var url = URL.createObjectURL(blob);
			download_video(url);
		};
	}

	function download_video(url: string) {
		const a = document.createElement('a');
		document.body.appendChild(a);
		a.style.display = 'none';
		a.href = url;
		a.download = `clip-${Date.now()}`;
		a.click();
		URL.revokeObjectURL(url);
	}

	function toggle_recording() {
		recording = !recording;
		if (recording) start_recording();
		else stop_recording();
	}
</script>

{#if !stream}
	<div class="text-center m-auto pb-20">
		<P align="center" class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
			>Select a source and start recording!</P
		>
		<Button on:click={select_source}>Select Source</Button>
	</div>
{/if}
<!-- ${stream ? 'flex' : 'hidden'} -->
<div
	class={`h-full w-full  m-auto flex flex-col items-center justify-center  ${stream ? 'flex' : 'hidden'}`}
	bind:this={wrapper}
>
	<div class="overflow-auto  max-w-[85%]  max-h-[85%] drop-shadow-md">
		<canvas bind:this={canvas} class="w-full" />
	</div>
	<div
		class="mt-3 flex justify-between   items-center dark:bg-gray-900/50 rounded  px-3 py-1 max-w-2xl min-w-min drop-shadow-md"
		bind:this={controls}
	>
		<!-- <Button pill size="sm"><Play variation="solid" size="24" /></Button> -->
		<div class="w-[59px]">
			<Cog6Tooth on:click={select_source} />
		</div>
		<PlayButton {recording} on:click={toggle_recording} />
		<span>
			{time}
		</span>
	</div>
</div>

<!-- svelte-ignore a11y-media-has-caption -->
<video bind:this={video} autoplay hidden />

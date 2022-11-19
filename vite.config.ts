import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
const dev = process.env.NODE_ENV === 'development';

const config: UserConfig = {
	plugins: [sveltekit()]
};

export default config;

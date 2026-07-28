<script lang="ts">
	import './layout.css';
	import favicon from '/favicon.png';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import { Footer } from '$lib/components/Footer';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:title" content="Michael Real — Full-stack Developer" />
	<meta
		property="og:description"
		content="Full-stack developer and CS student. I build clean, functional web apps with Svelte, TypeScript, and an eye for detail."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mcjefd.dev" />
	<meta name="twitter:card" content="summary" />
	<meta
		name="description"
		content="Full-stack developer and CS student. I build clean, functional web apps with Svelte, TypeScript, and an eye for detail."
	/>
</svelte:head>
<div class="flex min-h-screen flex-col bg-c-black text-c-white" data-sveltekit-preload-data="hover">
	<a
		href="#main"
		class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-c-light-blue focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-c-black focus:outline-none"
		>Skip to content</a
	>
	<Navbar />
	<main id="main" class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>

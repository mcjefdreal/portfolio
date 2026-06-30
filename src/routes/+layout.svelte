<script lang="ts">
	import './layout.css';
	import favicon from '/favicon.png';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import { Footer } from '$lib/components/Footer';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex min-h-screen flex-col bg-c-black text-c-white" data-sveltekit-preload-data="hover">
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>

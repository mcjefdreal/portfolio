<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>{page.status} — Portfolio</title>
</svelte:head>

<div class="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center">
	<h1 class="text-8xl font-bold tracking-tight text-c-light-blue">{page.status}</h1>
	<p class="mt-4 text-lg text-c-white/70">
		{page.error?.message ?? 'Something went wrong.'}
	</p>
	<a
		href={resolve('/')}
		class="mt-8 inline-flex h-11 items-center rounded-lg border border-white/20 px-8 text-sm font-medium text-c-white/80 transition-all hover:border-c-white/40 hover:text-c-white"
	>
		Go Home
	</a>
</div>

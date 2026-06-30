<script lang="ts">
	import { resolve } from '$app/paths';
	import { HeroBackground } from '$lib/components/HeroBackground';
	import { SocialIcons } from '$lib/components/SocialIcons';
</script>

<svelte:head>
	<title>Michael Real — Full-stack Developer</title>
</svelte:head>

<section
	class="relative flex min-h-[calc(100vh-4rem)] w-full items-center overflow-hidden"
>
	<HeroBackground />

	<div class="relative z-10 mx-auto w-full max-w-5xl px-6">
		<p class="fade-up text-sm text-c-light-blue/80" style="--i: 0">
			Full-stack developer · Manila
		</p>

		<h1 class="fade-up mt-4 text-5xl font-bold tracking-tight text-c-white sm:text-6xl lg:text-7xl text-balance" style="--i: 1">
			Michael Real
		</h1>

		<p class="fade-up mt-4 text-lg text-c-white/70 text-balance" style="--i: 2">
			I build clean, functional web apps with Svelte, TypeScript, and an eye for detail.
		</p>

		<div class="fade-up mt-8 flex gap-4" style="--i: 3">
			<a
				href={resolve('/projects')}
				class="inline-flex h-11 items-center rounded-lg bg-c-light-blue px-8 text-sm font-medium text-c-black transition-all hover:bg-c-light-blue/90"
			>
				View Projects
			</a>
			<a
				href={resolve('/about')}
				class="inline-flex h-11 items-center rounded-lg border border-white/15 px-8 text-sm font-medium text-c-white/80 transition-all hover:border-white/30 hover:text-c-white"
			>
				About Me
			</a>
		</div>

		<div class="fade-up mt-8" aria-label="Social links" style="--i: 4">
			<SocialIcons />
		</div>
	</div>
</section>

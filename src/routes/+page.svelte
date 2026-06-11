<script lang="ts">
	import { HeroBackground } from '$lib/components/HeroBackground';
	import { TypingAnimation } from '$lib/components/magic/typing-animation';
</script>

<svelte:head>
	<title>Home — Portfolio</title>
</svelte:head>

<section class="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden">
	<HeroBackground />

	<div class="relative z-10 mx-auto max-w-3xl px-6 text-center hero-content">
		<h1 class="text-4xl font-bold tracking-tight text-c-white sm:text-5xl lg:text-6xl">
			Hi, I'm <span class="text-c-light-blue">Your Name</span>
		</h1>

		<div class="mt-6 text-lg text-c-white/70 sm:text-xl">
			<TypingAnimation
				words={["Full-stack developer", "UI/UX enthusiast", "Open source contributor"]}
				loop
				pauseDelay={2000}
			/>
		</div>

		<p class="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-c-white/50 sm:text-base">
			I build clean, functional digital experiences with modern web technologies.
		</p>

		<div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
			<a
				href="/projects"
				class="inline-flex h-11 items-center rounded-lg bg-c-light-blue px-8 text-sm font-medium text-c-black transition-all hover:bg-c-light-blue/90"
			>
				View Projects
			</a>
			<a
				href="/about"
				class="inline-flex h-11 items-center rounded-lg border border-white/20 px-8 text-sm font-medium text-c-white/80 transition-all hover:border-c-white/40 hover:text-c-white"
			>
				About Me
			</a>
		</div>
	</div>
</section>

<style>
	.hero-content {
		animation: hero-fade-in 1s ease-out 0.3s both;
	}

	@keyframes hero-fade-in {
		from {
			opacity: 0;
			translate: 0 20px;
		}
		to {
			opacity: 1;
			translate: 0 0;
		}
	}
</style>

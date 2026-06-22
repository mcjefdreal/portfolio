<script lang="ts">
	import { UserRound } from '@lucide/svelte';
	import { SocialIcons } from '$lib/components/SocialIcons';

	const skillsByCategory = {
		Languages: ['Python', 'TypeScript', 'JavaScript', 'C', 'HTML', 'CSS'],
		'Libraries & Frameworks': ['Svelte', 'SvelteKit', 'Tailwind CSS', 'Flutter', 'Node.js'],
		Tools: ['Docker', 'MySQL', 'PostgreSQL', 'Git', 'GitHub']
	} as const;

	function slugify(text: string): string {
		return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
	}

	const experiences = [
		{
			role: 'Information Security Management Intern',
			company: 'Asia United Bank',
			period: '2026 - Present',
			description: 'Helped created scripts and programs to streamline and automate different tasks.'
		}
	];

	function handleImageError(e: Event) {
		const img = e.currentTarget as HTMLImageElement;
		const wrapper = img.parentElement;
		if (wrapper) {
			wrapper.style.display = 'none';
		}
	}
</script>

<svelte:head>
	<title>About — Portfolio</title>
</svelte:head>

<div class="mx-auto w-full max-w-5xl px-6 py-10 sm:py-16">
	<!-- Hero section: two-column bio + photo -->
	<div class="grid gap-10 md:grid-cols-5">
		<!-- Bio text -->
		<div class="md:col-span-3">
			<h1 class="text-3xl font-bold tracking-tight text-c-white sm:text-4xl">
				About <span class="text-c-light-blue">Me</span>
			</h1>

			<p class="mt-6 leading-relaxed text-c-white/70">
				I'm a passionate full-stack web and software developer who enjoys building things. Always
				looking to improve and learn more about the latest technologies and best practices.
			</p>

			<p class="mt-6 leading-relaxed text-c-white/70">
				Currently a fourth-year BS Computer Science student at University of the Philippines -
				Diliman.
			</p>
		</div>

		<!-- Photo placeholder -->
		<div class="flex items-start justify-center md:col-span-2">
			<div
				class="flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10 sm:h-56 sm:w-56"
			>
				<img
					src="/profile.png"
					alt="GitHub Picture of mcjefdreal"
					width="224"
					height="224"
					loading="eager"
					decoding="async"
					class="h-full w-full object-cover"
					onerror={handleImageError}
				/>
			</div>
		</div>
	</div>

	<!-- Connect -->
	<section class="mt-16">
		<h2 class="text-xl font-semibold text-c-white">Connect</h2>
		<div class="mt-4">
			<SocialIcons />
		</div>
	</section>

	<!-- Skills -->
	<section class="mt-16">
		<h2 class="text-xl font-semibold text-c-white">Skills</h2>
		{#each Object.entries(skillsByCategory) as [category, items]}
			{@const slug = slugify(category)}
			<h3 id="skills-{slug}" class="mt-6 text-sm font-semibold uppercase tracking-wider text-c-white/50">
				{category}
			</h3>
			<ul class="mt-3 flex flex-wrap gap-2" aria-labelledby="skills-{slug}">
				{#each items as item (item)}
					<li>
						<span
							class="rounded-full bg-c-light-blue/10 px-4 py-1.5 text-sm font-medium text-c-light-blue"
						>
							{item}
						</span>
					</li>
				{/each}
			</ul>
		{/each}
	</section>

	<!-- Experience -->
	<section class="mt-16">
		<h2 class="text-xl font-semibold text-c-white">Experience</h2>
		<div class="mt-4 space-y-6">
			{#each experiences as exp (`${exp.role}|${exp.company}`)}
				<div class="rounded-lg border border-white/10 bg-white/[0.02] p-5">
					<div class="flex items-start justify-between gap-4">
						<div>
							<h3 class="font-semibold text-c-white">{exp.role}</h3>
							<p class="text-sm text-c-light-blue">{exp.company}</p>
						</div>
						<span class="shrink-0 text-sm text-c-white/40">{exp.period}</span>
					</div>
					<p class="mt-3 text-sm leading-relaxed text-c-white/60">{exp.description}</p>
				</div>
			{/each}
		</div>
	</section>
</div>

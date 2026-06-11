<script lang="ts">
	import { UserRound } from '@lucide/svelte';
	import { SocialIcons } from '$lib/components/SocialIcons';

	const skills = [
		'Svelte',
		'SvelteKit',
		'Python',
		'TypeScript',
		'JavaScript',
		'HTML',
		'CSS',
		'Flutter',
		'C',
		'Tailwind CSS',
		'Docker',
		'MySQL',
		'PostgreSQL',
		'Node.js',
		'Git',
		'GitHub'
	];

	const experiences = [
		{
			role: 'Software Engineer',
			company: 'Company Name',
			period: '2024 — Present',
			description: 'Built and maintained modern web applications using SvelteKit and TypeScript.'
		},
		{
			role: 'Junior Developer',
			company: 'Previous Company',
			period: '2022 — 2024',
			description:
				'Contributed to full-stack features, wrote automated tests, and collaborated on design systems.'
		}
	];
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
				class="flex h-48 w-48 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 sm:h-56 sm:w-56"
			>
				<UserRound class="h-20 w-20 text-c-white/20" />
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
		<div class="mt-4 flex flex-wrap gap-2">
			{#each skills as skill (skill)}
				<span
					class="rounded-full bg-c-light-blue/10 px-4 py-1.5 text-sm font-medium text-c-light-blue"
				>
					{skill}
				</span>
			{/each}
		</div>
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

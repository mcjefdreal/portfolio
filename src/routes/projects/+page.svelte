<script lang="ts">
	import { ProjectCard } from '$lib/components/ProjectCard';
	import type { Project } from '$lib/components/ProjectCard';

	const projects: Project[] = [
		{
			title: "Puso't Pinggan",
			description:
				'Food marketplace Progressive Web App (PWA) built for CS 191 and 192 (Software Engineering 1 and 2).',
			tech: ['Svelte', 'Tailwind CSS', 'PostgreSQL', 'TypeScript', 'JavaScript'],
			links: [{ label: 'GitHub', href: 'https://github.com/mcjefdreal/PusotPinggan' }],
			image: '/projects/pusotpinggan.jpg',
			imageAlt: "Screenshot of Puso't Pinggan Login Screen",
			featured: true
		},
		{
			title: 'DRAP: Draft Ranking Automated Processor',
			description:
				"DRAP is the open-source Draft Ranking Automated Processor for the University of the Philippines Diliman, Department of Computer Science's annual draft of research lab assignments",
			tech: ['Svelte', 'Tailwind CSS', 'PostgreSQL', 'TypeScript', 'JavaScript', 'OAuth'],
			links: [
				{ label: 'GitHub', href: 'https://github.com/BastiDood/drap/' },
				{ label: 'Website', href: 'https://drap.dcs.upd.edu.ph/' }
			],
			image: '/projects/drap.png',
			imageAlt: 'Screenshot of DRAP Home Page'
		},
		{
			title: 'michAIR jURBAN',
			description:
				'Built as the project for CS 132 (Introduction to Data Science). We investigated the correlation between Air Quality Index (AQI) and GDP of various cities in the Philippines.',
			tech: ['Svelte'],
			links: [
				{ label: 'GitHub', href: 'https://github.com/mcjefdreal/michair-jurban/' },
				{ label: 'Website', href: 'https://mcjefdreal.github.io/michair-jurban/' }
			],
			image: '/projects/michairjurban.png',
			imageAlt: 'Screenshot of michAIR jURBAN Home Page'
		}
	];
</script>

<svelte:head>
	<title>Projects — Portfolio</title>
</svelte:head>

<div class="mx-auto w-full max-w-5xl px-6 py-10 sm:py-16">
	<!-- Header -->
	<div class="max-w-2xl">
		<h1 class="text-3xl font-bold tracking-tight text-c-white sm:text-4xl">
			<span class="text-c-light-blue">Projects</span>
		</h1>
	</div>

	<!-- Grid -->
	<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project (project.title)}
			<ProjectCard {project} />
		{/each}
	</div>
</div>

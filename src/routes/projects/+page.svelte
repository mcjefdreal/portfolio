<script lang="ts">
	import { ProjectCard } from '$lib/components/ProjectCard';
	import type { Project } from '$lib/components/ProjectCard';

	const projects: Project[] = [
		{
			title: "Puso't Pinggan",
			description:
				'Food marketplace Progressive Web App (PWA) built for CS 191 and 192 (Software Engineering 1 and 2).',
			tech: ['Svelte', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
			links: [{ label: 'GitHub', href: 'https://github.com/mcjefdreal/PusotPinggan' }],
			image: '/projects/pusotpinggan.jpg',
			imageAlt: "Screenshot of Puso't Pinggan marketplace",
			featured: true
		},
		{
			title: 'Project Beta',
			description:
				'An open-source CLI tool for scaffolding modern web projects with zero configuration. Designed for developer productivity.',
			tech: ['Node.js', 'TypeScript', 'Commander'],
			links: [{ label: 'GitHub', href: '#' }]
		},
		{
			title: 'Project Gamma',
			description:
				'A design system component library with comprehensive documentation, accessibility built-in, and themeable components.',
			tech: ['React', 'Storybook', 'CSS Modules', 'Vitest'],
			links: [
				{ label: 'GitHub', href: '#' },
				{ label: 'Docs', href: '#' }
			]
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

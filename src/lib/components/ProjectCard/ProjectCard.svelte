<script lang="ts">
	import { cn } from '$lib/utils';
	import { ExternalLink } from 'lucide-svelte';
	import type { Project } from './types';

	let {
		project,
		class: className
	}: {
		project: Project;
		class?: string;
	} = $props();
</script>

<div
	class={cn(
		'group flex flex-col rounded-lg border bg-white/[0.02] p-6 transition-all hover:bg-white/[0.04]',
		project.featured ? 'border-c-light-blue/30' : 'border-white/10',
		className
	)}
>
	<!-- Title -->
	<h3 class="text-lg font-bold text-c-white">{project.title}</h3>

	<!-- Description -->
	<p class="mt-2 text-sm leading-relaxed text-c-white/60">{project.description}</p>

	<!-- Tech tags -->
	{#if project.tech.length > 0}
		<div class="mt-4 flex flex-wrap gap-2">
			{#each project.tech as tech}
				<span class="rounded-full bg-c-light-blue/10 px-3 py-1 text-xs font-medium text-c-light-blue">
					{tech}
				</span>
			{/each}
		</div>
	{/if}

	<!-- Links -->
	{#if project.links && project.links.length > 0}
		<div class="mt-auto flex items-center gap-4 pt-6">
			{#each project.links as link}
				<a
					{href}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 text-sm font-medium text-c-white/50 transition-colors hover:text-c-light-blue"
				>
					{link.label}
					<ExternalLink class="h-3.5 w-3.5" />
				</a>
			{/each}
		</div>
	{/if}
</div>

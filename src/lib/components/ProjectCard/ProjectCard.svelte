<script lang="ts">
	import { cn } from '$lib/utils';
	import { ExternalLink } from '@lucide/svelte';
	import type { Project } from './types';

	let {
		project,
		class: className
	}: {
		project: Project;
		class?: string;
	} = $props();

	function handleImageError(e: Event) {
		const img = e.currentTarget as HTMLImageElement;
		const wrapper = img.parentElement;
		if (wrapper) {
			wrapper.style.display = 'none';
		}
	}
</script>

<div
	class={cn(
		'group flex flex-col overflow-hidden rounded-lg border bg-white/[0.02] transition-all hover:bg-white/[0.04]',
		project.featured ? 'border-c-light-blue/30' : 'border-white/10',
		className
	)}
>
	<!-- Thumbnail -->
	{#if project.image}
		<div
			class={cn(
				'overflow-hidden border-b',
				project.featured ? 'border-c-light-blue/30' : 'border-white/10'
			)}
		>
			<img
				src={project.image}
				alt={project.imageAlt ?? project.title}
				width="800"
				height="450"
				loading="lazy"
				decoding="async"
				class="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
				onerror={handleImageError}
			/>
		</div>
	{/if}

	<!-- Body -->
	<div class="flex flex-1 flex-col p-6">
		<h3 class="text-lg font-bold text-c-white">{project.title}</h3>

		<p class="mt-2 text-sm leading-relaxed text-c-white/60">{project.description}</p>

		{#if project.tech.length > 0}
			<div class="mt-4 flex flex-wrap gap-2">
				{#each project.tech as tech}
					<span class="rounded-full bg-c-light-blue/10 px-3 py-1 text-xs font-medium text-c-light-blue">
						{tech}
					</span>
				{/each}
			</div>
		{/if}

		{#if project.links && project.links.length > 0}
			<div class="mt-auto flex items-center gap-4 pt-6">
				{#each project.links as link}
					<a
						href={link.href}
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
</div>

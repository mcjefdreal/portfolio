<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Component } from 'svelte';

	interface SocialLink {
		label: string;
		href: string;
		icon?: Component;
	}

	let {
		year = new Date().getFullYear(),
		name = 'Your Name',
		socialLinks = [] as SocialLink[]
	}: {
		year?: number;
		name?: string;
		socialLinks?: SocialLink[];
	} = $props();
</script>

<footer class="border-t border-white/10">
	<div class="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
		<p class="text-sm text-c-white/50">
			&copy; {year} {name}. All rights reserved.
		</p>

		{#if socialLinks.length > 0}
			<div class="flex items-center gap-4">
				{#each socialLinks as link (link.label)}
					<a
						href={link.href.startsWith('/') ? resolve(link.href) : link.href}
						aria-label={link.label}
						target="_blank"
						rel="noopener noreferrer"
						class="text-c-white/50 transition-colors hover:text-c-light-blue"
					>
						{#if link.icon}
							<link.icon class="h-5 w-5" />
						{/if}
					</a>
				{/each}
			</div>
		{/if}
	</div>
</footer>

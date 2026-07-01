<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/projects', label: 'Projects' }
	] as const;

	function isActive(href: string): boolean {
		if (href === '/') {
			return page.url.pathname === '/';
		}
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}
</script>

<nav class="sticky top-0 z-10 w-full border-b-2 border-c-light-blue/15 bg-c-black/80 backdrop-blur-sm">
	<div class="mx-auto flex h-16 max-w-5xl items-center justify-center px-6">
		<ul class="flex items-center gap-x-1">
			{#each links as { href, label } (href)}
				<li>
					<a
						href={resolve(href)}
						aria-current={isActive(href) ? 'page' : undefined}
						class="flex h-16 items-center border-b-2 border-transparent px-4 text-sm font-medium text-c-white/70 transition-colors hover:text-c-white"
						class:border-b-c-light-blue={isActive(href)}
						class:text-c-white={isActive(href)}>{label}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</nav>

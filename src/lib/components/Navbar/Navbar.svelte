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

<nav class="sticky top-0 z-10 w-full border-b border-white/10 bg-c-black/80 backdrop-blur-sm">
	<ul class="mx-auto flex h-16 max-w-5xl items-center justify-center gap-x-1 px-6">
		{#each links as { href, label } (href)}
			<li>
				<a
					href={resolve(href)}
					aria-current={isActive(href) ? 'page' : undefined}
					class="flex h-full items-center rounded-md px-4 text-sm font-medium text-c-white/70 transition-colors hover:text-c-white"
					class:text-c-light-blue={isActive(href)}
				>{label}</a>
			</li>
		{/each}
	</ul>
</nav>

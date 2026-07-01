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
	<div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
		<a
			href={resolve('/')}
			class="flex shrink-0 items-center text-c-white transition-colors hover:text-c-light-blue"
		>
			<div
				class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10 transition-shadow hover:ring-c-light-blue/50"
			>
				<img
					src="/profile.png"
					alt="Michael Real"
					width="36"
					height="36"
					loading="eager"
					decoding="async"
					class="h-full w-full object-cover"
					onerror={(e) => {
						const wrapper = e.currentTarget.parentElement;
						if (wrapper) wrapper.style.display = 'none';
					}}
				/>
			</div>
		</a>
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

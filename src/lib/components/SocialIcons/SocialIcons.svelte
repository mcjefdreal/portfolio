<script lang="ts">
	import { socials } from '$lib/socials';
</script>

<nav class="flex items-center gap-4" aria-label="Social links">
	{#each socials as link (link.id)}
		{@const isMail = link.href.startsWith('mailto:')}
		{@const Icon = link.icon}
		<a
			href={link.href}
			aria-label={link.label}
			title={link.label}
			target={isMail ? undefined : '_blank'}
			rel={isMail ? undefined : 'noopener noreferrer'}
			class="inline-flex items-center justify-center p-1.5 text-c-white/60 transition-colors hover:text-c-light-blue focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-c-light-blue focus-visible:ring-offset-2 focus-visible:ring-offset-c-black focus-visible:outline-none"
		>
			<Icon class="h-5 w-5" />
		</a>
	{/each}
</nav>

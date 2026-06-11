<script lang="ts">
	import { socials } from '$lib/socials';
</script>

<div class="flex items-center gap-4">
	{#each socials as link (link.id)}
		{@const isMail = link.href.startsWith('mailto:')}
		{@const Icon = link.icon}
		<a
			href={link.href}
			aria-label={link.label}
			title={link.label}
			target={isMail ? undefined : '_blank'}
			rel={isMail ? undefined : 'noopener noreferrer'}
			class="text-c-white/50 transition-colors hover:text-c-light-blue"
		>
			<Icon class="h-5 w-5" />
		</a>
	{/each}
</div>

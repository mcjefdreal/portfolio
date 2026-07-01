<script lang="ts">
	import { SocialIcons } from '$lib/components/SocialIcons';
</script>

<footer class="border-t-2 border-c-light-blue/15 bg-c-light-blue/[0.03]">
	<div class="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-8">
		<p class="text-sm text-c-white/50">© {new Date().getFullYear()} Michael Real</p>
		<div aria-label="Social links">
			<SocialIcons />
		</div>
	</div>
</footer>

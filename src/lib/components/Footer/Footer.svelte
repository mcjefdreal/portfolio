<script lang="ts">
	import { SocialIcons } from '$lib/components/SocialIcons';
</script>

<footer class="border-t border-white/10">
	<div class="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-8">
		<p class="text-sm text-c-white/40">© {new Date().getFullYear()} Michael Real</p>
		<div aria-label="Social links">
			<SocialIcons />
		</div>
	</div>
</footer>

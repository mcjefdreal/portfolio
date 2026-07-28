<script lang="ts">
	import { SocialIcons } from '$lib/components/SocialIcons';
</script>

<footer class="border-t-2 border-c-light-blue/25 bg-c-light-pink/[0.04]">
	<div class="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-8">
		<p class="text-sm text-c-white/55">© {new Date().getFullYear()} Michael Real · Manila</p>
		<nav aria-label="Social links">
			<SocialIcons />
		</nav>
	</div>
</footer>

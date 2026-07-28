<!--
	Static hero background: fine dot-grid overlaid with a soft radial glow.
	No JS animation — pure CSS. Respects prefers-reduced-motion.
-->
<div class="hero-bg" aria-hidden="true">
	<div class="glow"></div>
	<div class="grid"></div>
</div>

<style>
	.hero-bg {
		position: absolute;
		inset: 0;
		background: #061f2f;
		overflow: hidden;
	}

	@media (prefers-reduced-motion: no-preference) {
		.hero-bg {
			animation: fade-in 0.8s ease-out forwards;
		}
	}

	.glow {
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 20% 20%, rgba(109, 152, 186, 0.18), transparent 60%);
	}

	.grid {
		position: absolute;
		inset: 0;
		background-image: radial-gradient(rgba(109, 152, 186, 0.06) 1px, transparent 1px);
		background-size: 24px 24px;
		mask-image: radial-gradient(ellipse at center, black, transparent 75%);
		-webkit-mask-image: radial-gradient(ellipse at center, black, transparent 75%);
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>

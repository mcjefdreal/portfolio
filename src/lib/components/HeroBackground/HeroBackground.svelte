<!--
	Animated hero background with drifting gradient blobs.
	Uses pure CSS @keyframes — no JS animation needed.
	Respects prefers-reduced-motion by falling back to a static gradient.
-->
<div class="hero-bg" aria-hidden="true">
	<div class="blob blob--1"></div>
	<div class="blob blob--2"></div>
	<div class="blob blob--3"></div>
</div>

<style>
	.hero-bg {
		position: absolute;
		inset: 0;
		overflow: hidden;
		background: linear-gradient(135deg, #061f2f 0%, #0a2a3f 50%, #061f2f 100%);
		/* Fade in on mount */
		animation: fade-in 1s ease-out forwards;
	}

	.blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.3;
	}

	.blob--1 {
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, #6d98ba, transparent 70%);
		top: -200px;
		left: -200px;
	}

	.blob--2 {
		width: 500px;
		height: 500px;
		background: radial-gradient(circle, #6d98ba, transparent 70%);
		bottom: -150px;
		right: -150px;
	}

	.blob--3 {
		width: 400px;
		height: 400px;
		background: radial-gradient(circle, #4a7a9e, transparent 70%);
		top: 50%;
		left: 50%;
		translate: -50% -50%;
	}

	@media (prefers-reduced-motion: no-preference) {
		.blob--1 {
			animation: drift-1 20s ease-in-out infinite;
		}

		.blob--2 {
			animation: drift-2 25s ease-in-out infinite;
		}

		.blob--3 {
			animation: drift-3 30s ease-in-out infinite;
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes drift-1 {
		0%,
		100% {
			translate: 0 0;
		}
		33% {
			translate: 80px 60px;
		}
		66% {
			translate: -40px 100px;
		}
	}

	@keyframes drift-2 {
		0%,
		100% {
			translate: 0 0;
		}
		33% {
			translate: -60px -80px;
		}
		66% {
			translate: 40px -40px;
		}
	}

	@keyframes drift-3 {
		0%,
		100% {
			translate: 0 0;
		}
		25% {
			translate: 30px -50px;
		}
		50% {
			translate: -50px 20px;
		}
		75% {
			translate: 20px 40px;
		}
	}
</style>

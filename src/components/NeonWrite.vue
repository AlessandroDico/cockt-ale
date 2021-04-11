<template>
	<p class="neon">{{welcome}} <br>Cockt<span> ale</span></p>
</template>

<script>
	export default {
		name: "NeonWrite",
		props: ["welcome"],
		};
</script>


<style scoped lang="scss">
	@font-face {
		font-family: Museo;
		src: url("https://s.cdpn.io/26175/Museo300-Regular.otf") format("opentype");
	}

	.neon {
		// font-family:  Train One, cursive;
		text-align: center;
		font-family: "Museo";
		font-size: 70px;
		text-transform: uppercase;
		color: #fff;
		-webkit-animation:pulse 1s ease-in-out infinite alternate;
		-webkit-backface-visibility: hidden;

		span {
			// font-family:  Train One, cursive;
			text-align: center;
			font-family: "Museo";
			font-size: 70px;
			text-transform: uppercase;
			color: #fff;
			-webkit-animation:pulseAle 1s ease-in-out infinite alternate;
			-webkit-backface-visibility: hidden;
		}
	}

	@-webkit-keyframes pulse {
		from {
			text-shadow: 0 0 10px #fff,
			0 0 20px #fff,
			0 0 30px #fff,
			0 0 40px #ff00de,
			0 0 70px #ff00de,
			0 0 80px #ff00de,
			0 0 100px #ff00de,
			0 0 150px #ff00de;
		}
		to {
			text-shadow: 0 0 5px #fff,
			0 0 10px #fff,
			0 0 15px #fff,
			0 0 20px #e400c5,
			0 0 35px #e400c5,
			0 0 40px #e400c5,
			0 0 50px #e400c5,
			0 0 75px #e400c5;
		}
	}
	@-webkit-keyframes pulseAle {
		from {
			text-shadow: 0 0 10px #fff,
			0 0 20px #fff,
			0 0 30px #fff,
			0 0 40px #00ff0d,
			0 0 70px #00ff0d,
			0 0 80px #00ff0d,
			0 0 100px #00ff0d,
			0 0 150px #00ff0d;
		}

		to {
			text-shadow: 0 0 5px #fff,
			0 0 10px #fff,
			0 0 15px #fff,
			0 0 20px #01d30c,
			0 0 35px #01d30c,
			0 0 40px #01d30c,
			0 0 50px #01d30c,
			0 0 75px #01d30c;
		}
	}
</style>

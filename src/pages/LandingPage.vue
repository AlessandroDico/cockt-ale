<template>
  <div class="animation-container">
    <div class="second-animation-contanier">
      <div class="landing-page-container">
        <NeonWrite :welcome="'Welcome to'"/>
        <div class="dot-container">
        </div>
        <button class="pass-button btn btn-lg btn-info text-uppercase" @click="enterInApp">choose your favorite drink</button>
      </div>
    </div>
  </div>
</template>

<script>
import NeonWrite from './../components/NeonWrite.vue';
    export default {
        name: "LandingPage",
        components: {
			NeonWrite
        },
        data() {
            return {
				landingPage: true
            }
        },
        methods: {
            enterInApp () {
				this.landingPage = false;
				this.$emit('isLanding', this.landingPage);
            }
        }
    }
</script>


<style lang="scss" >
	@mixin dots($count) {
		$text-shadow: ();

		@for $i from 0 through $count {
			$text-shadow: $text-shadow,
			(-.5+(random()) * 3) + em
			(-.5+(random()) * 3) + em
			7px
			hsla(random() * 360, 100%, 50%,.9);
		}
		text-shadow: $text-shadow;
	}

	.landing-page-container{
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 100px 0 100px 0;
		background-color: #112233a3;

		h1 {
			font-size: 25px;
		}

		button.pass-button.btn-info.btn-lg, .btn-group-lg {
			position: relative;
			z-index: 10;
			padding: 50px 100px;
			background-color: #831690;
			transition: 0.2s ease-in;

			&:hover {
				background-color: #22036d;
			}
		}
	}

	.dot-container{
		overflow: hidden;
	}

	.second-animation-contanier, .animation-container {
		display: block;
		font-size: 52px;
		color: transparent;
		height: 100%;
	}

	.animation-container::before, .animation-container::after,
	.second-animation-contanier::before, .second-animation-contanier::after {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 3em;
		height: 3em;
		content: '.';
		mix-blend-mode: screen;
		animation: 4s -27s move infinite ease-in-out alternate;
	}

	.animation-container::after {
		background: linear-gradient(0deg, rgb(1, 3, 5) 23%, rgba(2, 1, 5, 0.981) 49%, rgba(0,0,0,1) 88%);
	}

	.second-animation-contanier::before {
		@include dots(40);
		animation-duration: 15s;
		animation-delay: -27s;
	}

	.second-animation-contanier::after {
		@include dots(40);
		animation-duration: 15s;
		animation-delay: -32s;
	}

	.animation-container::before {
		@include dots(40);
		animation-duration: 42s;
		animation-delay: -23s;
	}

	.animation-container::after {
		@include dots(40);
		animation-duration: 41s;
		animation-delay: -19s;
	}

	.dot-container::before {
		letter-spacing: .5em;
		text-shadow: 0 0 5px #000;
		white-space: pre;
		color: #fff;
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 1;
		transform: translate(-50%,-50%);
		text-align: center;
		color: #999;
	}

	.dot-container:first-line {
		font-size: 300%;
		color: #fff;
	}

	@keyframes move {
		from {
			transform: rotate(0deg) scale(12) translateX(-20px);
		}
		to {
			transform: rotate(360deg) scale(18) translateX(20px);
		}
	}

</style>
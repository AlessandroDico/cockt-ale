<template>
	<div>
		<form @submit.prevent="getInputValue">
			<div class="search-container">
				<input type="search" placeholder="Search your drink" v-model="searchedText">
				<div class="search"></div>
			</div>
		</form>
	</div>
</template>

<script>
    export default {
        name: "SearchForm",
        data() {
			return {
				searchedText: '',
			}
        },
        methods: {
			getInputValue () {
				console.log(this.searchedText);
				this.$emit('searchCocktail', this.searchedText);
				this.searchedText = '';
				//lo andiamo a leggere nel componente che ci serve con @searchCocktail
			}
        }
    }
</script>


<style lang="scss" scoped>

	.search-container {
		position: absolute;
		//   margin: 50px;
		top: 400px;
		left: 0;
		right: 0;
		bottom: 0;
		//   width: 300px;
		height: 100px;

		.search {
			position: absolute;
			margin: auto;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			width: 80px;
			height: 80px;
			background: #4f6060;
			border-radius: 50%;
			transition: all 1s;
			z-index: 4;
			box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
			border: 1px solid #fff;

			&:hover {
				cursor: pointer;
			}

			&::before {
				content: "";
				position: absolute;
				margin: auto;
				top: 22px;
				right: 0;
				bottom: 0;
				left: 22px;
				width: 12px;
				height: 2px;
				background: white;
				transform: rotate(45deg);
				transition: all .5s;
			}

			&::after {
				content: "";
				position: absolute;
				margin: auto;
				top: -5px;
				right: 0;
				bottom: 0;
				left: -5px;
				width: 25px;
				height: 25px;
				border-radius: 50%;
				border: 2px solid white;
				transition: all .5s;
			}
		}
		input {
			// font-family: 'Inconsolata', monospace;
			position: absolute;
			margin: auto;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			width: 50px;
			height: 50px;
			outline: none;
			border: none;
			background: #5F8282;
			color: white;
			padding: 0 80px 0 20px;
			border-radius: 30px;
			box-shadow: 0 0 5px 0 rgb(255, 255, 255),0 20px 25px 0 rgba(0, 0, 0, 0.2);
			transition: all 1s;
			opacity: 0;
			z-index: 5;
			font-weight: bolder;
			letter-spacing: 0.1em;

			&:hover {
				cursor: pointer;
			}

			&:focus {
				width: 300px;
				opacity: 1;
				cursor: text;
			}

			&:focus ~ .search {
				right: -250px;
				background: #28242e;
				z-index: 6;

				&::before {
					top: 0;
					left: 0;
					width: 25px;
				}

				&::after {
					top: 0;
					left: 0;
					width: 25px;
					height: 2px;
					border: none;
					background: white;
					border-radius: 0%;
					transform: rotate(-45deg);
				}
			}

			&::placeholder {
				color: white;
				opacity: 0.5;
				font-weight: bolder;
			}
		}
	}

</style>

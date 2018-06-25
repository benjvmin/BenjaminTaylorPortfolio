<template lang="pug">

section.projects
		//- Loading Component
		// div(v-if="loading") loading

		LoadingSpinner(v-if="loading")

		//- Error Component
		div(v-if="error") error

		//- Project Card Component
		div.project-card(v-if="complete" v-for="(project, index) in projectData" :id="project.slug")
			div.project-card-image(:style=" { 'loaded': images.isLoaded } " :data-url="project.acf.header_thumbnail.sizes.large" v-lazyLoadImg="true")
			div.project-card-information
				a.project-card-information__title(href="#" @click.prevent="fireBackgroundAnimation($event)")
					h2 {{ project.title.rendered }}
				div.project-card-information__description 
					p {{ project.acf.project_preview_text }}
				div.project-card-information__tags(v-html="project.acf.project_tags")
			.project-card__links
				a.button(href="#") Project
					.button-transition
				a.button(href="#") External
					.button-transition
		div.background-transition

</template>

<script>
import LoadingSpinner from './LoadingSpinner';

export default {
	name: "Projects",
	components: {
		LoadingSpinner
	},
	data() {
		return {
			projectData: [],
			images: {
				isLoaded: false
			},
			loading: false,
			complete: false,
			error: false,
			ready: true
		};
	},
	methods: {
		fetchAndStoreData() {
			this.loading = true;
			// fetch("http://localhost:8888/wp-json/wp/v2/Projects?per_page=20")
			fetch(this.$hostname.returnProjects(20))
				.then(response => response.json())
				.then(data => {
					this.projectData = data;
					window.sessionStorage.setItem("ProjectData", JSON.stringify(data));
					this.loading = false;
					this.complete = true;
				})
				// .then(() => { this.lazyLoadImages(); })
				.catch(error => {
					window.sessionStorage.removeItem("ProjectData");
					this.error = true;
					this.loading = false;
					this.completed = false;
				});
		},

		lazyLoadImages() {
			let imageElms = [...document.querySelectorAll('.project-card-image')];

			imageElms.forEach((el, index) => {
				console.log(el.dataset.dataUrl);
			})
		},


		fireBackgroundAnimation(event) {
			let projectCardComponent = {
				element: event.target.parentNode.parentNode.parentNode,
				id: event.target.parentNode.parentNode.parentNode.id,
				box: event.target.parentNode.parentNode.parentNode.getBoundingClientRect()
			};

			let width = projectCardComponent.box.width;
			let height = projectCardComponent.box.height;
			let top = projectCardComponent.element.offsetTop;
			let left = projectCardComponent.element.offsetLeft;
			let projectsComponent = document.querySelector(".projects");
			let backgroundElement = document.querySelector(".background-transition");
			let that = this;

			function initElement() {
				backgroundElement.style.setProperty("--width", `${width}px`);
				backgroundElement.style.setProperty("--height", `${height}px`);
				backgroundElement.style.setProperty("--top", `${top}px`);
				backgroundElement.style.setProperty("--left", `${left}px`);
				backgroundElement.addEventListener("animationend", navigateRouter);
			}

			function animateElement() {
				backgroundElement.style.setProperty("--animation", "expand");
			}

			function navigateRouter() {
				that.$router.push({ name: "projectSingle", params: { slug: `${projectCardComponent.id}` } });
				backgroundElement.removeEventListener("animationend", navigateRouter);
			}
			initElement();
			animateElement();
		}
	},

	computed: {},

	directives: {
		lazyLoadBackgroundImage: {
			inserted(el) {

			}
		}
	},
	filters: {},

	created() {
		if (!sessionStorage["ProjectData"]) {
			this.fetchAndStoreData();
		} else {
			this.complete = true;
			this.projectData = JSON.parse(sessionStorage.getItem("ProjectData"));
		}

	}

	// mounted() {

		
	// }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.projects {
	--columns: repeat(auto-fit, 1fr);
	margin: 0;
	padding: 0;
	width: 100%;
	margin: auto;
	width: calc(100%);
	max-width: 1420px;
	display: grid;
	grid-template-columns: var(--columns);
	position: relative;
	

	@include respond-to("min-width", medium) {
		--columns: repeat(auto-fit, minmax(350px, 1fr));
		width: calc(100% - 40px);
		padding: 20px;
			grid-gap: 10px;

	}

	& .background-transition {
		--animation: initial;
		--width: initial;
		--height: initial;
		--top: 0px;
		--left: 0px;

		width: var(--width);
		height: var(--height);
		top: var(--top);
		left: var(--left);

		position: absolute;
		z-index: 1;

		animation-name: var(--animation);
		animation-duration: 0.3s;
		animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
		animation-direction: normal;
		animation-fill-mode: forwards;
		opacity: 0;
		background-color: rgba(255, 255, 255, 1);

		@keyframes expand {
			0% {
				transform: scale(0);
			}
			5% {
				opacity: 0.9;
			}

			100% {
				transform: scale(1);
				opacity: 0.9;
			}
		}
	}


	& .project-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: 2px 6px 25px rgba(0, 0, 0, 0.1);
		background-color: white;
		padding: 0 0 30px;
		margin: 0px auto;
		transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
		// transform: translate3d(0, 100px, 0);
		// opacity: 0;
		// will-change: transform;



		// &.slide-in {
		// 	transform: translate3d(0, 0%, 0);

		// 	opacity: 1;
		// }
		

		// @for $i from 1 through 15 {
		// 	&:nth-child(#{$i}) .project-card-image {
		// 		transition-delay: (10ms + 55ms) * $i;
		// 	}
		// }

		


		@include respond-to("min-width", large) {
			border-radius: 4px;
		}

		& .project-card-image {
			// background-image: linear-gradient(to bottom, hsla(0,19%,88%,.7), rgba(102,51,153,.7));
			border-radius: inherit;
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			background-color: #f8f8f8;
			background-size: cover;
			background-position: center;
			box-shadow: inset 0px -3px 6px 1px rgba(0, 0, 0, 0.05);
			flex-basis: 250px;
			display: flex;
			justify-content: center;
			align-items: center;
			opacity: 0;

			transition: opacity 0.4s ease-in-out;

			&.loaded {
				opacity: 1;
			}
		}

		& .project-card-information {
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			padding: 20px 30px 10px;

			& .project-card-information__title {
				text-decoration: none;
				color: #262626;
			}

			& .project-card-information__title > h1 {
				font-weight: 500;
				@include respond-to("min-width", medium) {
					font-weight: 500;
				}
			}
			& .project-card-information__tags {
				display: flex;
				flex-flow: row wrap;
				justify-content: flex-start;

				& span {
					display: block;
					color: #262d32;
					font-size: 13.5px;
					font-weight: 700;
					border-radius: 0.25rem;
					padding: 0.38rem 0.8rem;
					margin: 5px 5px 5px 0px;
					background-color: #efefef;
				}
			}
		}

		& .project-card__links {
			padding: 10px 30px 10px;

			& .button {
				border-radius: 4px;
				margin: 0 10px 0 0;
				border: 1px solid #1a9fee;
				color: #1a9fee;
				padding: 10px 25px;
				font-size: 1rem;
				font-weight: 600;
				position: relative;
				overflow: hidden;
				z-index: 1;
				transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

				&:hover {
					color: white;
				}

				&:hover .button-transition {
					transform: translateY(0px);
				}

				& .button-transition {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: #4ab0ef;
					transform: translateY(100%);
					transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
					z-index: -1;
					border-radius: 2px;
				}
			}
		}
	}

	h1 {
		margin: 0;
		padding: 0;
		// color: white;
	}
}
</style>

<template lang="pug">

.project-wrapper
	//- Error Component
	div(v-if="error") error

	//- Skeleton Component
	transition(name="fade")
		section.skeleton-projects(v-if="loading")
			div.skeleton-card(v-for="i in 10")
				div.skeleton-card-image
				div.skeleton-card-title(:class="{ 'is-loading': isAnimating } ")
				div.skeleton-card-description(:class="{ 'is-loading': isAnimating } ")
				div.skeleton-card-tags
					span.skeleton-card-tags__tag(v-for="i in 5" :class="{ 'is-loading': isAnimating } ")
				div.skeleton-card-buttons
					div.skeleton-card-buttons__button(:class="{ 'is-loading': isAnimating } ")
					div.skeleton-card-buttons__button(:class="{ 'is-loading': isAnimating } ")

	//- Project Card Component
	section.projects(v-if="complete")
			div.project-card(v-for="(project, index) in projectData" :id="project.slug" v-moveInAnimate="true")
				img(:data-url="project.acf.header_thumbnail.sizes.large" :alt="project.slug" v-lazyLoadImg="true")
				div.project-card-information
					a.project-card-information__title(href="#" @click.prevent="fireBackgroundAnimation($event)")
						h3 {{ project.title.rendered }}
					div.project-card-information__description 
						p(v-html="project.acf.project_preview_text")
					div.project-card-information__tags(v-html="project.acf.project_tags")
				.project-card__links
					a.button(:href="project.acf.file" target="_blank") Project
						.button-transition
					a.button(:href="project.acf.link" target="_blank") External
						.button-transition
			div.background-transition
	Hiring

</template>

<script>
import Hiring from "./Hiring";
import LoadingSpinner from "./LoadingSpinner";

export default {
	name: "Projects",
	components: {
		Hiring
	},
	data() {
		return {
			projectData: [],
			loading: false,
			complete: false,
			error: false,
			ready: true,
			isAnimating: true
		};
	},
	methods: {
		fetchAndStoreData() {
			this.loading = true;
			fetch(this.$hostname.returnProjects(20))
				.then(response => response.json())
				.then(data => {
					this.projectData = data;
					window.sessionStorage.setItem("ProjectData", JSON.stringify(data));
					this.loading = false;
					this.complete = true;
				})
				.catch(error => {
					window.sessionStorage.removeItem("ProjectData");
					this.error = true;
					this.loading = false;
					this.completed = false;
				});
		},

		fireBackgroundAnimation(event) {

			const parentEl = event.currentTarget.parentNode.parentNode;

			let projectCardComponent = {
				element: parentEl,
				id: parentEl.id,
				box: parentEl.getBoundingClientRect()
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
				setTimeout(() => {
					that.$router.push({
						name: "projectSingle",
						params: { slug: `${projectCardComponent.id}` }
					});
				}, 150);
				backgroundElement.removeEventListener("animationend", navigateRouter);
			}
			initElement();
			animateElement();
		}
	},

	computed: {},

	directives: {},
	filters: {},

	created() {
		if (!sessionStorage["ProjectData"]) {
			this.fetchAndStoreData();
		} else {
			this.complete = true;
			this.projectData = JSON.parse(sessionStorage.getItem("ProjectData"));
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$skeleton-background-dark: #dfdfdf;
$skeleton-background-light: #efefef;
$skeleton-border-radius: 4px;

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

@keyframes continue-loading {
	from {
		background-color: $skeleton-background-dark;
	}
	to {
		background-color: $skeleton-background-light;
	}
}

@keyframes load-in {
	0% {
		transform: scaleX(0);
		background-color: $skeleton-background-dark;
	}
	100% {
		transform: scaleX(1);
		background-color: $skeleton-background-light;
	}
}

.is-loading {
	transform-origin: left center;
	animation: load-in 1.1s cubic-bezier(0.215, 0.61, 0.355, 1) 1,
		continue-loading 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) infinite alternate;
}

/* Skeleton Sass */
.skeleton-projects {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 10px;
	padding: 10px 0;
	margin: 0 auto;
	max-width: $max-content-width;

	@include respond-to("min-width", 600px) {
		width: 80%;
		grid-gap: 20px;
	}

	@include respond-to("min-width", medium) {
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		width: calc(100% - 40px);
		grid-gap: 10px;
	}

	& .skeleton-card {
		box-shadow: 2px 6px 25px rgba(0, 0, 0, 0.1);
		background-color: white;
		padding: 0 0 30px;
		height: 475px;
		border-radius: $skeleton-border-radius;
		grid-column: span 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		@include respond-to("min-width", medium) {
			height: 650px;
		}

		& .skeleton-card-image {
			flex-basis: 250px;
			width: 100%;
			background-color: $skeleton-background-light;
		}

		& .skeleton-card-title {
			flex-basis: 5%;
			width: 100%;
			max-width: 90%;
			background-color: $skeleton-background-dark;
			border-radius: 2px;

			@include respond-to("min-width", medium) {
				flex-basis: 9%;
			}
		}

		& .skeleton-card-description {
			flex-basis: 10%;
			width: 100%;
			max-width: 90%;
			background-color: $skeleton-background-dark;
			border-radius: $skeleton-border-radius;

			@include respond-to("min-width", medium) {
				flex-basis: 15%;
			}
		}
		& .skeleton-card-tags {
			// flex-basis: 7%;
			width: 100%;
			max-width: 90%;
			display: flex;
			flex-flow: row wrap;
			justify-content: flex-start;
			align-content: space-around;

			& span {
				display: block;
				border-radius: 0.25rem;
				padding: 15px 30px;

				margin: 5px 5px 5px 0px;
				background-color: $skeleton-background-dark;

				@include respond-to("min-width", medium) {
					padding: 20px 50px;
				}
			}
		}

		& .skeleton-card-buttons {
			display: flex;
			flex-flow: row nowrap;
			align-self: center;
			width: 100%;
			max-width: 90%;

			&__button {
				display: block;
				border-radius: 0.25rem;
				padding: 18px 33px;
				margin: 5px 5px 5px 0px;
				background-color: $skeleton-background-dark;
				@include respond-to("min-width", medium) {
					padding: 25px 60px;
				}
			}
		}
	}
}

/* Projects Sass */
.projects {
	--columns: repeat(auto-fit, 1fr);
	margin: 0;
	padding: 0;
	width: 100%;
	margin: auto;
	width: 100%;
	max-width: $max-content-width;
	display: grid;
	grid-template-columns: var(--columns);
	position: relative;
	padding: 10px 0;

	@include respond-to("min-width", 600px) {
		width: 80%;
		grid-gap: 20px;
	}

	@include respond-to("min-width", medium) {
		--columns: repeat(auto-fit, minmax(350px, 1fr));
		width: calc(100% - 40px);
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
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-direction: normal;
		animation-fill-mode: forwards;
		opacity: 0;
		background-color: rgba(255, 255, 255, 1);

		@keyframes expand {
			from {
				transform: scaleY(0);
			}

			to {
				transform: scaleY(1);
				opacity: 0.97;
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
		position: relative;

		@include respond-to("min-width", 600px) {
			border-radius: 4px;
		}


		& img {
			width: 100%;
			height: 250px;
			object-fit: cover;
			opacity: 0;
			transition: opacity 0.2s ease-in-out;
			background: #282828;

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
				-webkit-font-smoothing: antialiased;
				border-radius: 4px;
				margin: 0 10px 0 0;
				border: 1px solid $light-blue;
				color: white;
				background-color: $light-blue;
				padding: 10px 25px;
				font-size: 1rem;
				font-weight: 600;
				position: relative;
				overflow: hidden;
				z-index: 1;
				transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

				&:hover {
					color: $light-blue;
				}

				&:hover .button-transition {
					transform: none;
				}

				& .button-transition {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: white;
					transform: translateY(-100%);
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
	}
}
</style>

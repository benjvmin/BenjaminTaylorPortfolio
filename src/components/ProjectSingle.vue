<template lang="pug">

	section.project-single-wrapper
		//- LoadingSpinner(v-if="loading")
		transition(name="fade")
			div.project-single-skeleton(v-if="loading")
				div.skeleton-loading-bar.is-loading--no-color
				div.skeleton-header.is-loading
				div.skeleton-project-capsule
					div.skeleton-project-information
						div.skeleton-project-information__header.is-loading
						div.skeleton-project-information__subheader.is-loading
						div.skeleton-project-information__paragraph
							span.is-loading(v-for="i in 7")
						div.skeleton-project-information__header.is-loading
						div.skeleton-project-information__subheader.is-loading
						div.skeleton-project-information__paragraph
							span.is-loading(v-for="i in 7")
					div.skeleton-project-images.is-loading

		div.error(v-if="error") error

		div.project-single(v-if="complete")
			img(:class="featuredImage" :src="project.acf.header_image" alt="Featured Project Image" @load="fadeFeaturedImage")

			.project-capsule
				.project-information
					.project-information__capsule
						.project-title
							h1 {{ project.title.rendered }}
							h3 {{ project.acf.project_sub_header }}
						h3 {{ project.acf.project_subtitle_one }}
						p(v-html="project.acf.project_paragraph_one" v-moveInAnimate="true")

					.project-information__capsule
						h3 {{ project.acf.project_subtitle_two }}
						p(v-html="project.acf.project_paragraph_two" v-moveInAnimate="true")
					
					.project-information__tags(v-moveInAnimate="true")
						h4 Tags & Project Links
						div.tags(v-html="project.acf.project_tags")
					
					.project-information__links
						a.button(:href="project.acf.file" target="_blank") Project 
						a.button(:href="project.acf.link" target="_blank") External

				.project-images
					img(:data-url="project.acf.project_image_one.url" :alt="this.$route.params.slug" v-lazyLoadImg="true")
					img(:data-url="project.acf.project_image_two.url" :alt="this.$route.params.slug" v-if="project.acf.project_image_two.url" v-lazyLoadImg="true")
					
			OtherProjects
			Hiring
</template>

<script>
import OtherProjects from "./OtherProjects";
import LoadingSpinner from "./LoadingSpinner";
import Hiring from "./Hiring";

export default {
	name: "Posts",
	components: {
		OtherProjects,
		LoadingSpinner,
		Hiring
	},
	data() {
		return {
			project: undefined,
			loading: true,
			error: false,
			complete: false,
			featuredImage: ""
		};
	},

	methods: {
		fadeFeaturedImage() {
			this.featuredImage = "fade-in-down"
		},

		fetchProject() {
			fetch(`${this.$hostname.name}Projects/?slug=${this.$route.params.slug}`)
				.then(response => {
					response.json().then(json => {
						this.project = json[0];
						this.loading = false;
						this.complete = true;
					});
				})
				.catch(error => {
					this.loading = false;
					this.complete = false;
					this.error = true;
					console.log(error);
				});
		}
	},
	created() {
		this.fetchProject();
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}

.project-single-skeleton {
	background: white;

	& .skeleton-loading-bar {
		width: 100%;
		height: 5px;
		background-color: $light-blue;
		margin: 5px 0px 0px 0px;
	}

	& .skeleton-header {
		width: 100%;
		height: 400px;
		background: $skeleton-background-dark;
	}

	& .skeleton-project-capsule {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		grid-row-gap: 20px;
		width: 90%;
		margin: 60px 0 0 0;
		max-width: 1200px;
		margin: 60px auto 0;

		@include respond-to("min-width", small) {
			width: 80%;
		}

		@include respond-to("min-width", large) {
			grid-template-columns: repeat(12, 1fr);
		}

		& .skeleton-project-images {
			background-color: $skeleton-background-dark;
			border-radius: $skeleton-border-radius;
			height: 500px;
			grid-column: 1 / 2;

			@include respond-to("min-width", medium) {
				grid-column: 8 / 12;
				height: 800px;
				margin: 0;
				
			}
		}

		& .skeleton-project-information {

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			align-items: flex-start;
			grid-column: 1 / 6;

			&__header, &__subheader {
				width: 100%;
				height: 80px;
				background-color: $skeleton-background-dark;
				border-radius: $skeleton-border-radius;
			}

			&__header:nth-child(4) {
				margin: 60px 0 0 0;

			}

			&__subheader {
				height: 40px;
				width: 55%;
				margin: 20px 0;
				align-self: center;

				@include respond-to('min-width', large) {
					align-self: flex-start;

				}
			}

			&__paragraph {
				height: 250px;
				width: 90%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-self: center;
				@include respond-to('min-width', large) {
					align-self: flex-start;

				}
				& span {
					width: 100%;
					display: block;
					background: $skeleton-background-dark;
					border-radius: $skeleton-border-radius;
					height: calc(100% / 13);
				}
			}
		}
	}
}



.project-single {
	background-color: white;

	& img {
		width: 100%;
		height: 400px;
		object-fit: cover;
		margin: 20px auto 10px;
		opacity: 0;

		@include respond-to("min-width", medium) {
			margin: 5px auto 50px;
		}
	}

	& .project-capsule {
		width: 90%;
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: repeat(4, auto);

		@include respond-to("min-width", small) {
			width: 80%;
		}

		@include respond-to("min-width", large) {
			grid-template-columns: repeat(12, 1fr);
			grid-template-rows: initial;
			padding: 0 0 30px 0;
		}

		& .project-images {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			padding: 10px 0;

			@include respond-to("min-width", medium) {
				flex-direction: row;
				padding: 20px 0;
			}

			@include respond-to("min-width", large) {
				grid-column: 8 / 13;
				text-align: center;
				padding: 0;
				flex-direction: column;
			}

			& img {
				margin: 0 0 10px 0;
				width: 300px;
				border-radius: 4px;
				opacity: 0;
				transition: opacity 0.4s ease-in-out;

				&.loaded {
					opacity: 1;
				}
			}

			& .project-images__image {
				height: 500px;
				background-size: cover;
				background-position: top center;
				background-repeat: no-repeat;
				margin: 20px 0;
				opacity: 0;
				transition: all 0.3s ease-in-out;
				border-radius: 4px;

				@include respond-to("min-width", large) {
					background-size: contain;
				}

				&.loaded {
					opacity: 1;
				}
			}
		}

		& .project-information {
			padding: 0;

			@include respond-to("min-width", 600px) {
				padding: 0 10%;
			}

			@include respond-to("min-width", large) {
				grid-column: 1 / 7;
				padding: 0;
			}

			& .project-information__capsule {
				margin: 35px 0;

				& p {
					margin: 5px 0;
					line-height: 1.4;
					@include respond-to("min-width", large) {
						max-width: 500px;
					}
				}

				& .project-title {
					text-align: center;
					margin: 0 0 30px 0;

					@include respond-to("min-width", large) {
						text-align: initial;
					}

					& h3 {
						margin: 5px auto;
						font-weight: 300;
						color: lightslategray;
					}
				}
			}

			.project-information__tags {
				& h4 {
					border-top: 1px solid #eee;
					width: 100%;
					font-weight: 800;
					padding-top: 15px;

					margin: 10px 0;
				}

				& .tags {
					display: flex;
					flex-flow: row wrap;
					justify-content: flex-start;
				}

				& span {
					display: block;
					color: #262d32;
					font-size: 12.5px;
					font-weight: 700;
					border-radius: 0.25rem;
					padding: 9px 26px;
					margin: 5px 5px 5px 0px;
					background-color: #efefef;

					@include respond-to("min-width", medium) {
						padding: 12px 28px;
					}
				}
			}

			.project-information__links {
				padding: 20px 0px 20px;
				text-align: center;
				@include respond-to("min-width", large) {
					text-align: initial;
				}

				& .button {
					border-radius: 2px;
					margin: 0 10px 0 0;
					border: 1px solid $light-blue;
					background-color: $light-blue;
					color: white;
					padding: 10px 27px;
					font-size: 1rem;
					font-weight: 600;
					transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);

					&:hover {
						transform: scale(1.1);
					}
					&:active {
						transform: scale(1);
					}
				}
			}
		}
	}
}
</style>
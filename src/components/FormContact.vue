<template lang="pug">

footer.contact-wrapper
	.form
		form#contact-form(action="https://formspree.io/benjvmintaylor@gmail.com" method="POST")
			.form-title
				.form-title__icon
					svg(width='70px', viewBox='0 0 512 262', xmlns='http://www.w3.org/2000/svg')
						g(fill-rule='nonzero')
							path(d='M146.659.521v33.925H0v15.657h146.659v73.068H25.052v15.657h121.607v28.705H48.016v15.657h98.642v78.287H512V.521H146.659zm349.684 245.301H162.316V23.295l167.01 115.661 123.14-85.169-8.907-12.878-114.227 79.006L179.543 16.178h316.799v229.644h.001zM0 211.897h15.658v15.658H0z')
							path(d='M33.925 211.897h97.598v15.658H33.925zM0 78.808h15.658v15.658H0zM33.925 78.808h97.598v15.658H33.925z')
				h2 Lets Get In Touch.
			section.information
				label(for="name") Name:
				input#name(type='text', name='Name' placeholder="Name" required)
				label(for="email" ) Email:
				input#email(type='email', name='Email' placeholder="cool@cool.com" required)

			section.message
				label(for="message") Message:
				textarea#message(name="message" placeholder="Lets work on something cool!" required)
				div.message__buttons
					button.button-blue(type="Submit") Send
					button.button-blue(type="Reset") Clear
		.subfooter Designed and Developed By <a href="https://www.linkedin.com/in/benjamincharlestaylor/" target="blank">Benjamin Taylor.</a>
	
</template>

<script>
export default {
	name: "FormContact",

	data() {
		return {
			isActive: true
		};
	},
	methods: {
	},

	created() {
		this.$eventBus.$on("activateForm", this.activateForm);
	},
	destroyed() {
		this.$eventBus.$off("activateForm");
	}
};
</script>

<style lang="scss">
@mixin formStyles() {
	width: calc(100% - 1.5rem);
	padding: 0.5rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;
	color: #494949;
	background-color: #fff;
	border: 1px solid #ced4da;
	border-radius: 0.25rem;
	font-weight: 400;
	
}

.contact-wrapper {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 100%;
	height: 100%;
	transition: all 0.4s ease-in-out;
	opacity: 1;
	margin: 0 auto;
	border-radius: 4px;
	background-color: white;
	

	.form {
		padding: 30px 0 0 0;
		height: 100%;

		@include respond-to("min-width", medium) {
			padding: 25px 0 0;
			height: initial;
		}

		form#contact-form {
			--columns: 1fr 7fr 1fr;
			--rows: 50px 2fr 3fr;
			display: grid;
			grid-row-gap: 20px;
			grid-template-columns: var(--columns);
			grid-template-rows: var(--rows);
			padding: 20px 0;
			height: calc(100% - 97px);
			max-width: $max-content-width;
			margin: 0 auto;


			@include respond-to("min-width", medium) {
				--columns: repeat(12, 1fr);
				--rows: auto auto;
				grid-row-gap: 20px;
				padding: 20px 0 0 0;
			}

			& .form-title {
				grid-row: 1 / 2;
				grid-column: 2 / 3;
				display: flex;
				justify-content: center;
				align-items: center;
				@include respond-to("min-width", medium) {
					grid-row: 1 / 2;
					grid-column: 2 / 8;
					justify-content: flex-start;
				}

				& svg {
					g {
						fill: $light-blue;
					}
				}

				& h2 {
					font-weight: 300;
					margin: 0 0 0 20px;
					color: #343434;
				}
			}


			& .information {
				grid-row: 2 / 3;
				grid-column: 2 / 3;
				display: flex;
				flex-direction: column;
				justify-content: center;


				@include respond-to("min-width", medium) {
					grid-column: 2 / 6;
					grid-row: 2 / 3;
				}

				@include respond-to("min-width", large) {
					grid-column: 2 / 5;
				}
			}

			& .message {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				grid-column: 2 / 3;
				grid-row: 3 / 4;

				@include respond-to("min-width", medium) {
					grid-row: 2 / 3;
					grid-column: 7 / 12;
				}

				& .message__buttons {
					display: flex;
					flex-direction: row;
					margin-top: 10px;

					& button {
						margin-right: 5px;
						padding: 9px 24px;
						font-size: 0.9rem;
						font-weight: 700;
						cursor: pointer;
					}
				}
			}

			& label {
				margin: 10px 0;
				font-weight: 700;
				color: #484848;
			}

			& input[type="text"],
			input[type="email"] {
				@include formStyles();
				margin-bottom: 30px;
				transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
			}

			& textarea {
				@include formStyles();
				flex: 1 1 0;
			}
		}

		& .subfooter {
			width: 100%;
			background-color: transparent;
			background-position: center center;
			text-align: center;
			background-color: white;
			color: #282828;
			padding: 20px 0;
			font-size: 0.8rem;
			@include respond-to("min-width", medium) {
				margin: 60px 0 0 0;
				font-size: 0.85rem;
			}

			& a {
				color: $light-blue;
				font-weight: 700;
			}
		}
	}
}
</style>

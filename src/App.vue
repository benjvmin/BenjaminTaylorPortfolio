<template lang="pug">
div#app
	PortfolioInfo
	PortfolioHeader
	// transition(name="fade-in" mode="out-in")
	router-view(name="default", :key="$route.fullPath")
	FormContact


</template>

<script>
import ProjectHeader from "./components/ProjectHeader";
import PortfolioHeader from "./components/PortfolioHeader";
import ProjectSingle from "./components/ProjectSingle";
import Projects from "./components/Projects";
import OtherProjects from "./components/OtherProjects";
import PortfolioInfo from "./components/PortfolioInfo";
import LoadingSpinner from "./components/LoadingSpinner";
import FormContact from "./components/FormContact";
import Hiring from "./components/Hiring";

export default {
	name: "App",
	components: {
		ProjectHeader,
		PortfolioHeader,
		ProjectSingle,
		Projects,
		OtherProjects,
		PortfolioInfo,
		LoadingSpinner,
		FormContact,
		Hiring
	},
	data() {
		return {};
	},

	methods: {

	},

	created() {
		
	},
	
	mounted() {
	}
};
</script>



<style lang="scss">
.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}

.fade-in-enter-to,
.fade-in-leave {
  opacity: 1;
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.slide-up-enter, .slide-up-leave-to {
	transform: translateY(15px);
	opacity: 0;
}

.slide-up-enter-to, .slide-up-leave  {
	transform: translateY(0px);
	opacity: 1;
}

.slide-up-enter-active {
	transition: all 0.5s ease-in-out;
}


#app {
	--font-color: rgba(41, 49, 48, 1);

	margin: 0;
	padding: 0;
	background-color: white;
	background-color: #efefef;
	background-image: url("./assets/playstation-pattern.png");
	position: relative;
}

#{$buttons} {
	padding: 13px 35px;
	color: var(--font-color);
	border: 1.3px solid var(--font-color);
	border-radius: 2.5px;
	display: inline-block;
	text-decoration: none;
	font-size: 1rem;
	font-weight: 600;

	&.button-blue {
		border: 0px;
		background-color: $light-blue;
		color: white;
	}
}
</style>

<template lang="pug">
div#app()
	//- ProjectHeader
	PortfolioInfo
	PortfolioHeader
	// transition(name="slide-up" mode="out-in")
	router-view(name="default")
	
	// Loading
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
    FormContact
  },
  data() {
    return {};
  },

  methods: {
    lockScrolling() {},

    unlockScrolling() {}
  },

	created() {
		
	},
	
	mounted() {
	}
};
</script>



<style lang="scss">

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
    background-color: #44aff1;
    color: white;
  }
}
</style>

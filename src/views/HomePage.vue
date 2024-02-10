<template>
  <div class="main">
    <nav-bar-menu></nav-bar-menu>

    <about-page id="about" />
    <skill-page id="skills" />

    <projects-page id="projects" />
    <contact-page id="contact" />

    <footer-nav></footer-nav>
  </div>
</template>

<script>
import AboutPage from "@/views/AboutPage.vue";
import SkillPage from "@/views/SkillPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import ProjectsPage from "@/views/ProjectsPage.vue";
import NavBarMenu from "@/components/utils/NavBarMenu.vue";
import FooterNav from "@/components/utils/FooterNav.vue";

export default {
  components: {
    AboutPage,
    ContactPage,
    SkillPage,
    ProjectsPage,
    NavBarMenu,
    FooterNav,
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  display: grid;
  place-items: center;
  font-family: "Roboto";

  padding: 0;
  min-height: 80vh;
}
#about {
  min-height: 20vh;
}
</style>
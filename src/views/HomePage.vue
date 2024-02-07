<template>
  <v-container>
    <nav-bar-menu></nav-bar-menu>

    <div>
      <div id="about">
        <about-page />
      </div>
      <div id="contact">
        <contact-page />
      </div>
      <div id="projects">
        <projects-page />
      </div>
      <div id="skills">
        <skill-page />
      </div>
    </div>

    <footer-nav></footer-nav>
  </v-container>
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
.btn {
  margin: 0 auto;
}
main {
  min-height: 70vh;
  background-color: rebeccapurple;
}
</style>

<template>
  <div class="main-home">
    <nav-bar-menu></nav-bar-menu>

    <about-page id="about" />
    <projects-page id="projects" />
    <skill-page id="skills" />
    <contact-page id="contact" />
    <footer-nav class="footer"></footer-nav>
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
    ProjectsPage,
    SkillPage,
    NavBarMenu,
    FooterNav,
  },
};
</script>

<style scoped>
.main-home {
  width: 100%;
  display: grid;
  place-items: center;
  font-family: "Roboto";
  padding: 0;
  min-height: 80vh;
  transition: background-color 0.3s ease;
  /* background-color: #f4f9f6; */
}

#about,
#projects,
#contact,
#skills {
  min-height: 20vh;
}
.footer {
  margin-top: 43px;
}
/* #about,
#projects,
#contact,
#skills:hover {
  background-color: #ffffff;
} */
</style>
<template>
  <v-layout class="my-5">
    <v-col>
      <v-list class="menu-list" dense>
        <v-list-item
          class="menu-list_item"
          v-for="(item, i) in loginLinks"
          :key="i"
          link
          router
          :to="item.route"
          @click="scrollToSection(item.route)"
          :class="{ 'last-item-button': i === loginLinks.length - 1 }"
        >
          <v-list-item-content
            style="
              font-family: sans-serif;
              font-size: 1.5rem;
              font-weight: bolder;
            "
          >
            <v-list-item-title
              class="'text--darken-4': isDarkTheme, 'teal': !isDarkTheme,font-weight-bold mx-3"
              :style="{ color: isDarkTheme ? '' : '#1bae9c' }"
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-layout>
</template>

<script>
export default {
  props: {
    isDarkTheme: Boolean,
  },
  data() {
    return {
      drawer: false,
      loginLinks: [
        {
          title: "About",
          route: "#about",
        },
        {
          title: "Projects",
          route: "#projects",
        },
        {
          title: "Skills",
          route: "#skills",
        },

        {
          title: "Contact",
          route: "#contact",
        },
      ],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      document.querySelector(sectionId).scrollIntoView({
        behavior: "smooth",
      });
    },
    async logout() {
      if (this.token) {
        try {
          this.$root.$emit("loggedOut");
          this.$router.push(`/`);
        } catch (error) {
          error;
        }
      }
    },
  },
  mounted() {},
};
</script>

<style  scoped>
.my-5 {
  margin-top: 30px;
}
</style>
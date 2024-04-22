<template>
  <v-layout class="my-5">
    <v-col>
      <v-list class="menu-list" dense          
       v-scrollanimation="'enter'">
        <v-list-item
          class="menu-list_item"
          v-for="(item, i) in loginLinks"
          :key="i"
          link
          router
          :to="item.route"
          style="
          color:white;
              font-family: sans-serif;
              font-size: 2rem;
              font-weight: bold;
            "
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
              :style="{ color: isDarkTheme ? '' : 'white' }"
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
        
      } );
      this.drawer===false
    },
    async logout() {
      if (this.token) {
        try {
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
  margin-top: 40px;
}
.before-enter {
  opacity: 0;
  transform: translateY(10px);
  transition: all .5s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
  transition: all .5s ease-in;

}
</style>
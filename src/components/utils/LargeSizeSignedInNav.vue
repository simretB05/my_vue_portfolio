<template>
  <v-container>
    <v-layout class="custom-c">
      <v-card class="custom-c">
        <v-list class="menu-list" dense>
          <v-list-item v-scrollanimation="'enter'"
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
      </v-card>
    </v-layout>
  </v-container>
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
      // Scroll to the specified section using smooth scrolling
      document.querySelector(sectionId).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.theme--light.v-list-item:not(.v-list-item--active):not(
    .v-list-item--disabled
  ) {
  font-weight: 900;
  display: flex;
  align-items: center;
  width: 60%;
}
.v-list-item {
  display: flex;
  justify-items: center;
  width: 70%;
}
.custom-c {
  display: grid;
  justify-content: flex-end;
  width: 100%;
}

.v-list-item--dense .v-list-item__icon,
.v-list--dense .v-list-item .v-list-item__icon {
  margin: 10px;
  display: flex;
}
.menu-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 0vh;
  background-color: transparent;
  padding: 0;
}

.v-icon.v-icon {
  margin-top: 12px;
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
/* Bounce effect on click */
</style>

<template>
  <v-container>
    <nav fixed-top class="nav">
      <v-layout row class="lg_nav">
        <v-flex>
          <v-app-bar app flat :color="getNavBarColor">
            <v-app-bar-nav-icon
              color="#789de1"
              class="d-lg-none darken-6"
              @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-btn
              @click="routeHome"
              class="btn-custom"
              style="
                background-color: transparent;
                border: none;
                box-shadow: none;
                color: #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 24px;
              "
            >
              <v-img
                v-if="$vuetify.theme.dark"
                lazy-src="/images/logo.png"
                max-height="150"
                max-width="250"
                src="/images/logo.png"
              ></v-img>
              <v-img
                v-else
                lazy-src="/images/logo.png"
                max-height="150"
                max-width="250"
                src="/images/logo.png"
              ></v-img>
            </v-btn>
            <v-spacer></v-spacer>
            <div class="nav-div">
              <large-size-signed-in-nav
                :isDarkTheme="$vuetify.theme.dark"
                class="d-none d-lg-block"
              ></large-size-signed-in-nav>
            </div>
            <v-btn icon v-if="!$vuetify.theme.dark" @click="toggleTheme">
              <v-icon class="mr-1" color="teal light-3"
                >mdi-white-balance-sunny</v-icon
              >
            </v-btn>
            <v-btn icon v-if="$vuetify.theme.dark" @click="toggleTheme">
              <v-icon color="teal light-4">mdi-weather-night</v-icon>
            </v-btn>
          </v-app-bar>
        </v-flex>
      </v-layout>
      <v-navigation-drawer
        color="#789de1"
        v-model="drawer"
        fixed
        left
        temporary
        height="100%"
      >
        <v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="drawer = false">
            <v-icon color="#ffffff">mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <signed-in-nav></signed-in-nav>
      </v-navigation-drawer>
    </nav>
  </v-container>
</template>

<script>
import SignedInNav from "@/components/utils/SignedInNav.vue";
import LargeSizeSignedInNav from "@/components/utils/LargeSizeSignedInNav.vue";

export default {
  components: {
    LargeSizeSignedInNav,
    SignedInNav,
  },
  data() {
    return {
      drawer: false,
      id: undefined,
      loginLinks: [
        {
          icon: "mdi-weather-night",
          action: "toggleDarkMode",
        },
        {
          icon: "mdi-white-balance-sunny",
          action: "toggleLightMode",
        },
      ],
    };
  },
  // computed: {
  //   getNavBarColor() {
  //     return this.$vuetify.theme.dark ? "#333" : "primary";
  //   },
  // },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    routeHome() {
      this.$router.push(`/`);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.lg_nav {
  display: flex;
  width: 90%;
}

.nav-div {
  width: 100%;
  display: flex;
}
.btn-custom {
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: "#ffffff";
}

/* Add styles for dark mode */
.theme--dark .nav {
  background-color: #333; /* Set your background color for dark mode */
}

.theme--dark .btn-custom {
  color: #ccc; /* Adjust text color for dark mode */
}

.v-responsive__content {
  width: 50%;
  justify-content: center;
}

.theme--light.v-list-item:not(.v-list-item--active):not(
    .v-list-item--disabled
  ) {
  font-weight: 900;
  display: flex;
  align-items: center;
}

.v-list-item {
  display: flex;
  justify-items: center;
}

.custom-v {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-items: flex-end;
}

.v-list-item--dense .v-list-item__icon,
.v-list--dense .v-list-item .v-list-item__icon {
  margin: 0;
  display: flex;
}

.menu-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 10%;
  background-color: transparent;
  padding: 0;
}

.last-item-button {
  background-color: #061e36;
  color: #fff;
  padding: 0px 8px;
  border-radius: 4px;
  width: 2%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.v-icon.v-icon {
  margin-top: 12px;
}

.last-item-button:active {
  transform: scale(0.95);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>

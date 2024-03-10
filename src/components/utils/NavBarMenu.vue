<template>
  <v-container>
    <nav fixed-top class="nav">
      <v-layout row class="lg_nav">
        <v-flex>
          <v-app-bar app flat>
            <v-app-bar-nav-icon
              color="#43bbac"
              class="d-lg-none darken-6"
              @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-btn
              @click="routeHome"
              class="btn-custom"
              v-scrollanimation="'enter'"
            >
              <v-img
                v-if="$vuetify.theme.dark"
                lazy-src="/images//sim_logo.png"
                max-height="150"
                max-width="250"
                src="/images/sim_logo.png"
              ></v-img>
              <v-img
                v-else
                lazy-src="/images/sim_logo.png"
                max-height="150"
                max-width="250"
                src="/images/sim_logo.png"
              ></v-img>
            </v-btn>
            <v-spacer></v-spacer>
            <div class="nav-div">
              <large-size-signed-in-nav
                :isDarkTheme="$vuetify.theme.dark"
                class="d-none d-lg-block"
              ></large-size-signed-in-nav>
            </div>
            <v-btn icon v-if="!$vuetify.theme.dark" @click="toggleTheme" 
              v-scrollanimation="'enter'">
              <v-icon class="mr-1" color="teal light-3"
                >mdi-white-balance-sunny</v-icon               

              >
            </v-btn>
            <v-btn icon v-if="$vuetify.theme.dark" @click="toggleTheme"             
              v-scrollanimation="'enter'"
>
              <v-icon color="teal light-4">mdi-weather-night</v-icon>
            </v-btn>
          </v-app-bar>
        </v-flex>
      </v-layout>
      <v-navigation-drawer
        color="black"
        v-model="drawer"
        fixed
        left
        temporary
        height="100%"
      >
        <v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="drawer = false">
            <v-icon 
            color="#43bbac">mdi-close</v-icon>
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
  color: #eff4f5;
}
.btn-custom {
  border: none;
  box-shadow: none;
  color: "#ffffff";
}

.theme--dark .nav {
  background-color: #333;
}

.theme--dark .btn-custom {
  color: #ccc;
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

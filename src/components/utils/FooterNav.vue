<template>
  <v-container>
    <v-footer class="footer" app>
      <v-row justify="center">
        <v-col class="text-center">
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
            "
          >
            <v-img
              v-if="$vuetify.theme.dark"
              lazy-src="/images/footer_night_logo.png"
              max-height="150"
              max-width="250"
              src="/images/footer_night_logo.png"
            ></v-img>
            <v-img
              v-else
              lazy-src="/images/footer_day_logo.png"
              max-height="150"
              max-width="250"
              src="/images/footer_day_logo.png"
            ></v-img>
          </v-btn>
          <Lottie :options="animationOptions" width="300px" height="300px" />

          <div class="mt-info animated-content">
            <p class="mt-2">Full Stack Web Developer - Alberta, Canada</p>
            <!-- Phone number with phone icon -->
            <v-btn
              icon
              class="mt-phone animated-content"
              v-if="$vuetify.theme.dark"
            >
              <v-icon size="21" color="white">mdi-phone-in-talk</v-icon>
              <p>+1(204)333-7744</p>
            </v-btn>
            <v-btn icon class="mt-phone animated-content" v-else>
              <v-icon size="21" color="black">mdi-phone-in-talk</v-icon>
              <p style="color: black">+1(204)333-7744</p>
            </v-btn>
          </div>
          <div class="mt-flex animated-content" v-if="$vuetify.theme.dark">
            <!-- LinkedIn icon and link -->
            <v-btn icon @click="goToLinkedIn">
              <v-icon color="white">mdi-linkedin</v-icon>
            </v-btn>
            <!-- GitHub icon and link -->

            <v-btn icon @click="goToGitHub">
              <v-icon color="white">mdi-github</v-icon>
            </v-btn>
          </div>
          <div class="mt-flex animated-content" v-else>
            <!-- LinkedIn icon and link -->
            <v-btn icon @click="goToLinkedIn">
              <v-icon color="black">mdi-linkedin</v-icon>
            </v-btn>
            <!-- GitHub icon and link -->
            <v-btn icon @click="goToGitHub">
              <v-icon color="black">mdi-github</v-icon>
            </v-btn>
          </div>
          <div class="mt-flex-right animated-content">
            <p>© 2024 Simret Paulos - All rights reserved. Powered by Vue.js</p>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script>
import Lottie from "lottie-vuejs";
export default {
  components: {
    Lottie,
  },
  methods: {
    goToLinkedIn() {
      // Redirect to  LinkedIn profile
      window.open(
        "https://www.linkedin.com/in/simret-paulos-45b42b10b/",
        "_blank"
      );
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.listItemToggle = true;
    },
    goToGitHub() {
      // Redirect to  GitHub profile
      window.open("https://github.com/simretB05", "_blank");
    },
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  min-height: 10vh;
  background-color: blue;
}
.btn-custom {
  margin-top: 13px;
}
.mt-info {
  display: flex;
  width: 300px;
  justify-content: start;
  flex-direction: column;
  margin-left: 29px;
  font-size: 0.9rem;
}
.mt-phone {
  display: flex;
  width: 300px;
  justify-content: start;
  flex-direction: column;
  margin-left: 66px;
}

.mt-flex {
  display: flex;
  justify-content: start;
  margin-left: 33px;
}
.mt-flex-right {
  display: flex;
  justify-content: flex-end;
  font-size: 0.8rem;
}
.animated-content {
  opacity: 0;
  transform: translateX(-100%); /* Start off-screen to the left */
  animation: slideInFromLeft 1s ease-in-out forwards;
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

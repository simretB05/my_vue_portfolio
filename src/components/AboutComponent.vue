<template>
  <v-container class="main">
    <section class="about-section">
      <!-- Title -->
      <div class="profile-container">
        <div class="broken-circle-container">
          <div class="broken-circle">
            <div class="broken-circle larger-circle">
              <div class="image-circle larger-circle">
                <v-img
                  v-if="$vuetify.theme.dark"
                  lazy-src="/images/hero55.jpg"
                  max-height="100%"
                  max-width="100%"
                  src="/images/hero55.jpg"
                ></v-img>
                <v-img
                  v-else
                  lazy-src="/images/hero.jpg"
                  max-height="100%"
                  max-width="100%"
                  src="/images/hero.jpg"
                ></v-img>
              </div>
            </div>
          </div>
        </div>
        <div class="about-description">
          <p class="my-name">HI, I'm <span class="my-name">Simret</span></p>
          <p
            class="my-description"
            :class="{
              'text--darken-1': isDarkTheme,
              'dark--text': isDarkTheme,
              'font-weight-bold': true,
              'mx-3': true,
            }"
          >
            A Full Stack Web Developer with a versatile skill set. Innotech
            College has equipped me with expertise in React and Vue.js for
            frontend, Python (Flask) for backend, and MySQL for database
            management. I'm proficient in JavaScript, CSS, and Sass, enhancing
            my ability to create seamless and visually appealing web
            experiences. Additionally, I have hands-on experience with Figma for
            design collaboration and possess knowledge in AWS cloud architecture
            and Oracle technologies.
          </p>
        </div>
      </div>
    </section>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      isDarkTheme: true,
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.listItemtogle = true;
    },
  },
};
</script>
<style scoped>
.main {
}
.about-section {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-items: flex-start;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.broken-circle-container {
  display: flex;
  justify-content: center;
  align-items: start;
  position: relative;
  border-radius: 50%;
  width: 50%;
}

.broken-circle {
  width: 378px;
  height: 378px;
  border-radius: 50%;
  border: 1px dashed #999;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.larger-circle {
  width: 347px;
  height: 347px;
  display: flex;
  justify-content: center;
  align-items: start;
  border-radius: 50%;
  border: 1px dashed #999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.about-description {
  margin-top: 20px;
  text-align: center;
  width: 50%;
}

.my-name {
  font-weight: bold;
  font-size: 4rem;
}

.image-circle {
  width: 259px;
  height: 259px;
  border-radius: 50%;
  border: 1px dashed #999;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: start;
}

/* Media query for larger screens */
@media (min-width: 768px) {
  .profile-container {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
  .larger-circle {
    width: 260px;
    height: 260px;
  }
  .image-circle {
    width: 310px;
    height: 310px;
  }

  .profile-picture {
    margin-right: 20px;
  }

  .about-description {
    text-align: left;
  }
}
</style>
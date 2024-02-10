<template>
  <v-container class="main">
    <section class="about-section">
      <!-- Title -->
      <div class="profile-container">
        <div class="pic-container">
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
        </div>
        <div class="about-description">
          <p class="my-name">HI, I'm <span class="my-name">Simret</span></p>
          <p class="my-title">
            A Full Stack Web Developer with a versatile skill set.
          </p>
          <div class="discription_cont">
            <p
              class="my-description"
              :class="{
                'text--darken-1': isDarkTheme,
                'dark--text': isDarkTheme,
                'font-weight-bold': true,
              }"
            >
              A Full Stack Web Developer with a versatile skill set. Innotech
              College has equipped me with expertise in React and Vue.js for
              frontend, Python (Flask) for backend, and MySQL for database
              management. I'm proficient in JavaScript, CSS, and Sass, enhancing
              my ability to create seamless and visually appealing web
              experiences. Additionally, I have hands-on experience with Figma
              for design collaboration and possess knowledge in AWS cloud
              architecture and Oracle technologies.
            </p>
          </div>
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
@import "~typeface-work-sans/index.css";

.main {
  display: grid;
  place-items: center;
  margin-top: 70px;
  width: 100%;
  transition: background-color 0.3s;
}

.main:hover {
  background-color: #ffffff;
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
  align-items: start;
  justify-items: center;
  width: 100%;
}
.pic-container {
  width: 40%;
  display: flex;
  justify-content: center;
}

.broken-circle-container {
  display: flex;
  justify-content: center;
  align-items: start;
  position: relative;
  border-radius: 50%;
  width: 50%;
}

.discription_cont {
  width: 90%;
  display: grid;
  place-items: center;
  justify-content: center;
  margin-left: 10px;
}
.my-title {
  padding: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1bae9c;
}
.broken-circle {
  width: 378px;
  height: 378px;
  border-radius: 50%;
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
  border: 1px dashed #1bae9c;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.about-description {
  margin: 0 34px;
  text-align: center;
  width: 160%;
  letter-spacing: 0.0112rem;
  line-height: 26px;
  font-size: 0.91rem;
  font-weight: 100;
  color: hsl(260, 2%, 28%);
}

.my-name {
  font-weight: bold;
  color: #1bae9c;
  font-size: 2.4rem;
  font-weight: 500;
  padding: 0 12px;
  /* letter-spacing: 0.0913rem; */
  font-family: "Roboto";
}

.image-circle {
  width: 259px;
  height: 259px;
  border-radius: 50%;
  border: 1px dashed #1bae9c;
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

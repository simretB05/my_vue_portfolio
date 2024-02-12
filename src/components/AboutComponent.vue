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
          <p class="my-name">Hi, I'm Simret</p>
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
              I go beyond just coding and design. With my knowledge in AWS cloud
              architecture and a solid grasp of Oracle technologies, I'm
              well-equipped to lead the charge in turning innovative concepts
              into reality through the power of cloud solutions.
            </p>
            <a href="/path/to/resume.pdf" download class="download-link btn">
              Download my resume
            </a>

            <div class="mt-info">
              <!-- LinkedIn and GitHub icons with links -->
              <v-btn class="btn" icon @click="goToLinkedIn">
                <v-icon size="39" style="color: #1bae9c">mdi-linkedin</v-icon>
              </v-btn>
              <v-btn class="btn" icon @click="goToGitHub">
                <v-icon size="39" style="color: #1bae9c">mdi-github</v-icon>
              </v-btn>
            </div>
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
  font-family: sans-serif;
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
  border: 1px dashed #1bae9c;
  width: 100%;
}
.mt-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 75px;
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
  font-family: sans-serif;
  line-height: 26px;
  font-size: 0.991rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
}
.my-name {
  font-weight: bold;
  color: #1bae9c;
  font-size: 2.4rem;
  font-weight: 500;
  padding: 0 12px;
  letter-spacing: 0.0913rem;
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
.download-link.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background-color: #1bae9c;
  color: #ffffff;
  border: 2px solid #1bae9c;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 34px;
}

.download-link.btn:hover {
  background-color: #ffffff;
  color: #1bae9c;
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
.btn {
  margin-right: 21px;
}
</style>
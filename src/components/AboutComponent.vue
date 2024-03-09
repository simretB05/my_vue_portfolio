<template>
  <div class="main">
    <section class="about-section">
      <div class="profile-container">
        <div class="profile-picture-container" v-scrollanimation="'fade-in'">
          <div class="decorative-circle"></div>
          <div class="profile-picture">
            <img
              v-if="isDarkTheme"
              lazy-src="/images/simret2.png"
              max-height="200px"
              max-width="200px"
              src="/images/simret2.png"
              class="rounded-circle"
            />
            <img
              v-else
              lazy-src="/images/simret2.png"
              max-height="200px"
              max-width="200px"
              src="/images/simret2.png"
              class="rounded-circle"
            />
          </div>
        </div>
        <div class="about-description" v-scrollanimation="'enter-in'">
          <div class="title-container"  >
            <p class="my-name" v-scrollanimation="'enter-up'">Hi, I'm Simret Paulos</p>
            <p class="my-title" v-scrollanimation="'enter-up'">
              A Full Stack Web Developer with a versatile skill set.
            </p>
          </div>
          <div class="text-container">
            <p class="my-description" v-scrollanimation="'enter-up'">
              I go beyond just coding and design. With my knowledge in AWS cloud
              architecture and a solid grasp of Oracle technologies, I'm
              well-equipped to lead the charge in turning innovative concepts
              into reality through the power of cloud solutions.
            </p>
            <div class="mt-info" v-scrollanimation="'enter-up'">
              <!-- LinkedIn and GitHub icons with links -->
              <v-link class="btn" icon @click="goToLinkedIn" target="blank">
                <v-icon size="39" style="color: #1bae9c">mdi-linkedin</v-icon>
              </v-link>
              <v-link class="btn" icon @click="goToGitHub" target="blank">
                <v-icon size="39" style="color: #1bae9c">mdi-github</v-icon>
              </v-link>
            </div>
            <pdf-download-btn-util></pdf-download-btn-util>
          </div>
         
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PdfDownloadBtnUtil from "@/components/utils/PdfDownloadBtnUtil.vue";

export default {
  components: {
    PdfDownloadBtnUtil,
  },
  data() {
    return {
      isDarkTheme: true,
    };
  },
  methods: {
    goToLinkedIn() {
      // Implement your LinkedIn redirection logic here
    },
    goToGitHub() {
      // Implement your GitHub redirection logic here
    },
  },
};
</script>

<style scoped>
.main {
  display: grid;
  place-items: center;
  width: 100%;
}
.profile-container{
  margin-top: 40px;
  margin: 0 auto;

}
.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  margin-top: 60px;
}

.profile-container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin-right: 60px;
  margin-bottom: 80px;

}

.profile-picture-container {
  position: relative;
  top: -200px;
  right: -200px;

}

.decorative-circle {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: #058072;
  opacity: 0.2;
  top: -50%;
  right: -50%;
}

.profile-picture img {
  position: absolute;
  top: 50%;
  right: 50%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
 border: 1px broken #1bae9c;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.my-name {
  font-size: 2rem;
  font-weight: bold;
  color: #1bae9c;
  margin-bottom: 10px;
}

.my-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #1bae9c;
  margin-bottom: 20px;
}
.about-description{
  width: 40%;
  padding-top: 20px;

}
.my-description {
  font-size: 1rem;
  line-height: 1.5;
  text-align: start;
  color:#a2a0a0 ;
  font-weight: 400;
  margin-bottom: 20px;
}

.pdf-download-btn-util {
  margin-bottom: 20px;
}

.social-links {
  display: flex;
}

.btn {
  margin-right: 10px;
}

.before-fade-in {
  opacity: 0;
  transform: translateX(50px); /* Adjust the value according to your preference */
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in {
  opacity: 1;
  transform: translateX(-80px);
}

.before-enter-in {
  opacity: 0;
  transform: translateX(-100px); /* Adjust the value according to your preference */
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.enter-in {
  opacity: 1;
  transform: translateX(0px);
}
.before-enter-up {
  opacity: 0;
  transform: translateY(10px);
  transition: all 1s ease-out;
}

.enter-up {
  opacity: 1;
  transform: translateY(0px);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
    text-align: center;
    margin-top: 0px;
    margin: 0;
  }
.about-description{
  width: 100%;
  padding-top: 20px;
  margin-top: 50px;

}
.profile-picture-container {
  position: relative;
  top: -100px;
  right: -140px;
  margin-bottom: 20px;


}
.decorative-circle {
  position: absolute;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  background-color: #058072;
  opacity: 0.2;

}
.profile-picture img {
  position: absolute;
  width: 270px;
  height: 270px;
  border-radius: 50%;
 border: 1px broken #1bae9c;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.my-description {
  text-align: center;
 
}

.before-fade-in {
  opacity: 0;
  transform: translateY(-50px);
  transition: all 1s ease-out;
}

.fade-in {
  opacity: 1;
  transform: translateY(0px);
}
.before-enter-up {
  opacity: 0;
  transform: translateY(10px);
  transform: translateX(0px);
  transition: all 1s ease-out;
}

.enter-up {
  opacity: 1;
  transform: translateY(0px);
}
.before-enter-in {
  opacity: 0;
  transform: translateY(10px);
  transition: all 1s ease-out;
}

.enter-in {
  opacity: 1;
  transform: translateY(83px);
}
}
</style>

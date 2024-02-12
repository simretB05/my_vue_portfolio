<template>
  <v-container class="main">
    <h1 class="title-container">My Web Development Projects</h1>

    <p class="titleText">
      These projects represent significant milestones in my web development
      journey, serving as valuable practice grounds. Through their execution,
      I've not only acquired technical proficiency but also honed my
      communication skills. The confidence gained from successfully completing
      these endeavors fuels my belief in my ability to tackle more ambitious
      projects in the future.
    </p>
    <div class="card-container">
      <v-row>
        <v-col
          v-for="(project, index) in projects"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card class="card">
            <v-row>
              <v-col cols="12">
                <v-img
                  :src="project.imageSrc"
                  alt="Project Image"
                  class="card__item__img"
                ></v-img>
              </v-col>
              <v-col cols="12">
                <v-card-title class="card__item__details__title">{{
                  project.title
                }}</v-card-title>

                <v-card-text class="card__item__details__text">{{
                  project.description
                }}</v-card-text>
                <a :href="project.link">
                  <v-btn class="card__item__details__btn" color="primary"
                    >View</v-btn
                  >
                </a>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Project 1",
          description:
            "A simple e-commerce website built to practice back-drop modals, carousel, and CURD",
          link: "https://taupe-stroopwafel-935142.netlify.app/",
        },
        {
          title: "Project 2",
          description:
            "A simple e-commerce website built to practice back-drop modals, carousel, and CURD",
          link: "https://taupe-stroopwafel-935142.netlify.app/",
        },
        {
          title: "Project 3",
          description:
            "A simple e-commerce website built to practice back-drop modals, carousel, and CURD",
          link: "https://taupe-stroopwafel-935142.netlify.app/",
        },
        {
          title: "Project 4",
          description:
            "A simple e-commerce website built to practice back-drop modals, carousel, and CURD",
          link: "https://taupe-stroopwafel-935142.netlify.app/",
        },

        {
          title: "Project 5",
          description:
            "Bookmark website. Group project that uses Authentication for login...",
          link: "https://determined-brahmagupta-fbb485.netlify.app/",
        },
        {
          title: "Project 6",
          description:
            "A React Essential oil project. The project uses React Hooks like UseReducer...",
          link: "https://dancing-arithmetic-dee120.netlify.app",
        },
      ],
    };
  },
};
</script>
<style scoped>
.main {
  display: grid;
  place-items: center;
  margin-top: 70px;
  width: 90%;
  transition: background-color 0.3s;
  color: rgb(154, 152, 152);
  padding: 30px 10px;
}

.card-container {
  margin: 32px 0;
}

.title-container {
  text-align: center;
  margin-bottom: 20px;
  color: #1bae9c;
  font-size: 2rem;
}

.titleText {
  color: #777;
  margin-bottom: 20px;
  font-size: 1rem;
  text-align: center;
}

@media only screen and (max-width: 767px) {
  .main {
    margin-top: 34px;
  }
  .title-container {
    font-size: 1.5rem;
  }

  .titleText {
    font-size: 0.9rem;
  }
}

.card {
  margin-bottom: 20px;
  transition: background-color 0.3s, transform 0.3s;
  transform: translateY(0);
}

.card:hover {
  background-color: teal;
  transform: translateY(-10px);
}

.card__item__img {
  width: 100%;
  height: auto;
}

.card__item__details__title {
  font-size: 1.5rem;
  font-weight: bold;
  transition: transform 0.3s;
}

.card:hover .card__item__details__title {
  transform: translateY(-10px);
}

.card__item__details__text {
  max-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: max-height 0.3s, transform 0.3s;
}

.card:hover .card__item__details__text {
  max-height: 200px;
  transform: translateY(-10px);
}

.card__item__details__btn {
  margin-top: 10px;
  transition: transform 0.3s;
}

.card:hover .card__item__details__btn {
  transform: translateY(-10px);
}
</style>

<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="12"
        sm="6"
        md="4"
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
.title {
  font-size: 2rem;
  font-weight: bold;
}

.titleText {
  color: #777;
  margin-bottom: 20px;
}

.card {
  margin-bottom: 20px;
}

.card__item__img {
  width: 100%;
  height: auto;
}

.card__item__details__title {
  font-size: 1.5rem;
  font-weight: bold;
}

.card__item__details__text {
  max-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card__item__details__btn {
  margin-top: 10px;
}
</style>

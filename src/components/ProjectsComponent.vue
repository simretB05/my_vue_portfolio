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
    <div class="static-website"><h2>Static Website</h2></div>

    <div class="card-container">
      <v-row>
        <v-col
          v-for="(static_projects, index) in static_projects"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card class="card">
            <v-row>
              <v-col cols="12" class="card__item__overlay">
                <v-img
                  :src="static_projects.imageSrc"
                  alt="Project Image"
                  class="card__item__img"
                ></v-img>
                <v-col cols="12" class="card-info">
                  <div class="get-out">
                    <v-card-title class="card__item__details__title">{{
                      static_projects.title
                    }}</v-card-title>
                    <v-card-text class="card__item__details__text">{{
                      static_projects.description
                    }}</v-card-text>
                    <a :href="static_projects.link" class="btn" target="blank">
                      <v-btn class="card__item__details__btn" color="primary"
                        >View</v-btn
                      >
                    </a>
                  </div>
                </v-col>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="dynamic-website"><h2>Dynamic Website</h2></div>

    <div class="card-container">
      <v-row>
        <v-col
          v-for="(dynamic_projects, index) in dynamic_projects"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card class="card">
            <v-row>
              <v-col cols="12" class="card__item__overlay">
                <v-img
                  :src="dynamic_projects.imageSrc"
                  alt="Project Image"
                  class="card__item__img"
                ></v-img>
                <v-col cols="12" class="card-info">
                  <div class="get-out">
                    <v-card-title class="card__item__details__title">{{
                      dynamic_projects.title
                    }}</v-card-title>
                    <v-card-text class="card__item__details__text">{{
                      dynamic_projects.description
                    }}</v-card-text>
                    <a :href="dynamic_projects.link" class="btn">
                      <v-btn class="card__item__details__btn" color="primary"
                        >View</v-btn
                      >
                    </a>
                  </div>
                </v-col>
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
      static_projects: [
        {
          title: "Project 1",
          description:
            "This is a music band website, an assignment for a boot camp class. The main goal of the project is to interact with React components using ReactHooks to Create a CRUD system with JSON Server API.",
          link: "https://sunny-bonbon-17baef.netlify.app",
          imageSrc: "/images/bandsite22.jpg",
        },
        {
          title: "Project 2",
          description:
            "Essential oil is a personal project I built to practice handling an E-commerce cart. I used JavaScript for adding and deleting to and from a Cart. The website design inspiration came from similar essential oil websites but with my own UI design touch.",
          link: "https://sprightly-cannoli-87a94c.netlify.app",
          imageSrc: "/images/essentialOil.jpg",
        },
        {
          title: "Project 3",
          description:
            "URL Shortening website. The project applies URL shortening API with Javascript. The main focus of this project was to practice working with Groups on Git and Github. Managing Projects, delegating, Creating issues, and deleting them when done.",
          link: "https://url-shortening-123.netlify.app/",
          imageSrc: "/images/UrlShortning.jpg",
        },
        {
          title: "Project 4",
          description:
            "Bookmark website. Group project that uses Authentication for login and signup using the firebase database. Apart from the main authentication focus, the project helped practice with Groups on Git and Github. Managing Projects, delegating, Creating issues, and deleting them when done",
          link: "https://determined-brahmagupta-fbb485.netlify.app/",
          imageSrc: "/images/bookmars.jpg",
        },
      ],
      dynamic_projects: [
        {
          title: "Project 1",
          description:
            "This is a music band website, an assignment for a boot camp class. The main goal of the project is to interact with React components using ReactHooks to Create a CRUD system with JSON Server API.",
          link: "https://taupe-stroopwafel-935142.netlify.app/",
          imageSrc: "/images/bandsite22.jpg",
        },
        {
          title: "Project 2",
          description:
            "Essential oil is a personal project I built to practice handling an E-commerce cart. I used JavaScript for adding and deleting to and from a Cart. The website design inspiration came from similar essential oil websites but with my own UI design touch.",
          link: "https://taupe-stroopwafel-935142.netlify.app/",
          imageSrc: "/images/essentialOil.jpg",
        },
        {
          title: "Project 3",
          description:
            "URL Shortening website. The project applies URL shortening API with Javascript. The main focus of this project was to practice working with Groups on Git and Github. Managing Projects, delegating, Creating issues, and deleting them when done.",
          link: "https://taupe-stroopwafel-935142.netlify.app/",
          imageSrc: "/images/essentialOil.jpg",
        },
        {
          title: "Project 4",
          description:
            "Bookmark website. Group project that uses Authentication for login and signup using the firebase database. Apart from the main authentication focus, the project helped practice with Groups on Git and Github. Managing Projects, delegating, Creating issues, and deleting them when done",
          link: "https://taupe-stroopwafel-935142.netlify.app/",
          imageSrc: "/images/essentialOil.jpg",
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
}

.card__item__overlay {
  position: relative;
  overflow: hidden;
}

.card__item__overlay .card-info {
  position: absolute;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  background: rgba(228, 233, 230, 0.3);
  padding: 20px;
  box-sizing: border-box;
  transition: right 0.3s;
  backdrop-filter: blur(4px);
  border-radius: 10px;
  color: #9cbbbe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card__item__overlay:hover .card-info {
  right: 0;
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

.card__item__overlay:hover .card__item__details__title {
  transform: translateY(-10px);
}

.card__item__details__text {
  max-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: max-height 0.3s, transform 0.3s;
}

.card__item__overlay:hover .card__item__details__text {
  max-height: 200px;
  transform: translateY(-10px);
}

.card__item__details__btn {
  margin-top: 10px;
  transition: transform 0.3s;
}

.card__item__overlay:hover .card__item__details__btn {
  transform: translateY(-10px);
}

.btn {
  display: flex;
  justify-content: center;
}
.card__item__details__title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #181919;
  font-weight: 900;
  transition: transform 0.3s;
}

.card__item__details__text {
  max-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #353434;
  font-weight: 900;
  transition: max-height 0.3s, transform 0.3s;
}
.get-out {
  background-color: #dcdfdf;
  width: 90%;
}
.dynamic-website,
.static-website {
  color: #1bae9c;
}
</style>

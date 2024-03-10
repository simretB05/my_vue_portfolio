<template>
  <v-container class="main">
    <h1 v-scrollanimation="'fade'"  class="title-container">My Web Development Projects</h1>

    <p v-scrollanimation="'fade'" class="titleText">
      These projects represent significant milestones in my web development
      journey, serving as valuable practice grounds. Through their execution,
      I've not only acquired technical proficiency but also honed my
      communication skills. The confidence gained from successfully completing
      these endeavors fuels my belief in my ability to tackle more ambitious
      projects in the future.
    </p>
    <div v-scrollanimation="'fade'" class="static-website"><h2>Static Website</h2>
      <p  class="static_text">
    My static sights are hosted on Amazon S3, leveraging the power of scalable object storage for reliable delivery of images, stylesheets, and other static assets globally. This enhances website performance, leading to quick loading times and a seamless user experience.
</p></div>
    <div name="card-fade" tag="div" class="card-container" ref="staticContainer">
  <div
    v-for="( static_projects, index) in  static_projects"
    :key="index"
    :data-index="index"
    class="custom-col" 
    v-scrollanimation="'stagger'"
  >
    <div  class="card">
      <div class="card__item__overlay">
        <img
          :src=" static_projects.imageSrc"
          alt="Project Image"
          class="card__item__img"
        />
        <div class="card-info">
          <div class="get-out">
            <h3 class="card__item__details__title">
              {{  static_projects.title }}
            </h3>
            <p class="card__item__details__text">
              {{  static_projects.description }}
            </p>
            <a :href=" static_projects.link" class="btn">
              <button class="card__item__details__btn" target="blank" color="primary">
                View
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <div    v-scrollanimation="'fade'" class="dynamic-website"><h2>Dynamic Website</h2>
      <p class="dynamic_text">
        Amazon EC2 instances host my backend server and web application. The backend uses RDS MariaDB on EC2, ensuring secure and efficient data management. This combination creates a scalable infrastructure supporting the dynamic nature of my web application, ensuring a responsive user experience.
</p></div>

    <div name="card-fade" tag="div" class="card-container" ref="dynamicContainer">
  <div
    v-for="(dynamic_projects, index) in dynamic_projects"
    :key="index"
    :data-index="index"
    class="custom-col" 
    v-scrollanimation="'stagger'"

  >
    <div class="card">
      <div class="card__item__overlay">
        <img
          :src="dynamic_projects.imageSrc"
          alt="Project Image"
          class="card__item__img"
        />
        <div class="card-info">
          <div class="get-out">
            <h3 class="card__item__details__title">
              {{ dynamic_projects.title }}
            </h3>
            <p class="card__item__details__text">
              {{ dynamic_projects.description }}
            </p>
            <a :href="dynamic_projects.link"  target="blank" class="btn">
              <button class="card__item__details__btn" color="primary">
                View
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </v-container>
</template>

<script>
export default {
  data()
  {
    return {
      static_projects: [
        {
          title: "Project 1",
          description:
            "This is a music band website, an assignment for a boot camp class. The main goal of the project is to interact with React components using ReactHooks to Create a CRUD system with JSON Server API.",
          link: "http://swanpizzaria12.s3-website-us-east-1.amazonaws.com",
          imageSrc: "/images/swan.jpg",
        },
        {
          title: "Project 2",
          description:
            "Essential oil is a personal project I built to practice handling an E-commerce cart. I used JavaScript for adding and deleting to and from a Cart. The website design inspiration came from similar essential oil websites but with my own UI design touch.",
          link: "http://essentialoils11.s3-website-us-east-1.amazonaws.com",
          imageSrc: "/images/essentialOil.jpg",
        },
        {
          title: "Project 3",
          description:
            "URL Shortening website. The project applies URL shortening API with Javascript. The main focus of this project was to practice working with Groups on Git and Github. Managing Projects, delegating, Creating issues, and deleting them when done.",
          link: "http://urlshortningweb.s3-website-us-east-1.amazonaws.com",
          imageSrc: "/images/UrlShortning.jpg",
        },
        {
          title: "Project 4",
          description:
            "Bookmark website. Group project that uses Authentication for login and signup using the firebase database. Apart from the main authentication focus, the project helped practice with Groups on Git and Github. Managing Projects, delegating, Creating issues, and deleting them when done",
          link: "http://bookmark12.s3-website-us-east-1.amazonaws.com",
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
          imageSrc: "/images/my_portfolio.png",
        },
        {
          title: "Project 3",
          description:
            "URL Shortening website. The project applies URL shortening API with Javascript. The main focus of this project was to practice working with Groups on Git and Github. Managing Projects, delegating, Creating issues, and deleting them when done.",
          link: "https://taupe-stroopwafel-935142.netlify.app/",
          imageSrc: "/images/dorm_finder.jpg",
        },
        {
          title: "Project 4",
          description:
            "Bookmark website. Group project that uses Authentication for login and signup using the firebase database. Apart from the main authentication focus, the project helped practice with Groups on Git and Github. Managing Projects, delegating, Creating issues, and deleting them when done",
          link: "https://taupe-stroopwafel-935142.netlify.app/",
          imageSrc: "/images/foodi.jpg",
        },
      ],
    };
  },
}

</script>
<style scoped>
.main {
  padding: 10px;
  margin: 45px 0;
}

.title-container {
  text-align: center;
  color:#43bbac ;
  transition-delay: .1s;


}

.titleText {
  text-align: center;
  margin-bottom: 20px;
  padding: 20px;
  transition-delay: .2s;
  color:#a2a0a0 ;
  font-weight: 400;
}

.static-website h2,
.dynamic-website h2 {
  text-align: center; 
  margin-bottom: 20px;
  color: #43bbac;
  margin:17px 0;
  transition-delay: 1s;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.custom-col {
  width: 100%; 
  max-width: 300px; 
  margin-bottom: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  width: 100%; 
}

.card:hover {
  transform: scale(1.05);
}

.card__item__overlay {
  position: relative;
}

.card__item__img {
  width: 100%;
  height: auto;
}

.card-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 10px;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: translateX(100%); 
  backdrop-filter: blur(10px); 
}
.static_text, .dynamic_text{
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  color:#a2a0a0 ;
  font-weight: 400;
  padding: 10px;
  margin-bottom: 20px;
}
.card:hover .card-info {
  background: rgba(228, 230, 231, 0.8); 
  transform: translateX(0); 
}

.card__item__details__title {
  font-size: 1.2rem;
  margin-bottom: 5px;
  text-align: center; 
  color: #0d0d0d; 
}

.card__item__details__text {
  font-size: 1rem;
}

.btn {
  text-decoration: none;
  color: #fff;
}

.card__item__details__btn {
  background-color: #007bff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
/* .before-fade {
  opacity: 0;
  transform: translateX(100px);
  transition: all 1s cubic-bezier(.41, .01, .57, 1.61);

} 

.fade {
  opacity: 1;
  transform: translateX(0px);  /* Corrected from translatex to translateX */
  /* Include necessary transition properties */

.before-fade {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s ease-out;
}

.fade {
  opacity: 1;
  transform: translateY(0px);
  transition: all 1s ease-in;

}

.custom-col {
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out, opacity 1s ease-out; 
  opacity: 0; 
}

.before-stagger {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-out;
}

.stagger {
  opacity: 1;
  transform: translateY(0px);
}

.custom-col:nth-child(odd) {
  transition-delay: 0.2s; 
}
.custom-col:nth-child(even) {
  transition-delay: 0.4s; 
}

.card:hover {
  transform: scale(1.05);
  opacity: 1; 
}




@media (min-width: 600px) {
  .main{
    padding: 40px;
     margin-top:60px
  }
  .custom-col {
    width: 48%; 
    max-width: 300px; 
}

@media (min-width: 768px) {
  .custom-col {
    width: 30%; 
    max-width: 300px; 
  }
}

@media (min-width: 1200px) {
  .main{
    padding: 60px;
  }
  .custom-col {
    width: 23%; 
    max-width: 300px; 
  }

}
}

</style>

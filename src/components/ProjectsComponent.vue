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
      <p class="static_text">
    My static sites are hosted on Amazon S3, leveraging the power of scalable object storage for reliable delivery of images, stylesheets, and other static assets globally. This content is distributed efficiently using Amazon CloudFront, a content delivery network (CDN), which caches content at edge locations around the world for faster access. Additionally, I ensure secure connections to my sites using SSL/TLS certificates managed by AWS Certificate Manager. DNS routing for my domains is managed seamlessly through Amazon Route 53, providing reliable and scalable domain name resolution.
</p>
</div>
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
            <a :href=" static_projects.link" class="btn"  target="blank">
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

    <div    v-scrollanimation="'fade'" class="dynamic-website"><h2>Dynamic Website</h2>
      <p class="dynamic_text">
    Amazon EC2 instances host my backend server and web application. The backend uses RDS MariaDB on Amazon EC2, ensuring secure and efficient data management. This combination creates a scalable infrastructure supporting the dynamic nature of my web application, ensuring a responsive user experience. Additionally, I utilize Amazon S3 to store images from my application, providing reliable and scalable storage for media assets.
</p>
</div>

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
          "Static website designed for Swan City Pizzeria, a local business. Demonstrates design skills using CSS, HTML, and some JavaScript to create an engaging and visually appealing online presence.",
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
          link: "https://sunny-bonbon-17baef.netlify.app/",
          imageSrc: "/images/bandsite22.jpg",
        },
        {
          title: "Project 2",
          description:
          "Portfolio website showcasing skills and projects, built with Vue.js, Vuetify, and deployed on AWS EC2. Utilizes MariaDB RDS for data storage.",          
           link:"https://portfolio.simret.codes",
          imageSrc: "/images/my_portfolio.png",
        },
        {
          title: "Project 3",
          description:
          "    My university website utilizes Amazon EC2 for hosting, Flask for the backend, MariaDB RDS for data storage, and Amazon S3 for storing images. The frontend is built with Vue.js and Vuetify, deployed on EC2.",
          link: "https://dormfinder.simret.codes",
          imageSrc: "/images/dorm_finder.jpg",
        },
        {
          title: "Project 4",
          description:
          "Food ordering website with a custom design. Focuses on seamless communication between the database, backend, and frontend for efficient order processing.",
          link: "https://foodie.simret.codes",
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
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: translateX(100%); 
  backdrop-filter: blur(1px); 
  border-radius: 10px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
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
  background: rgba(247, 248, 248, 0.8); 
  transform: translateX(0); 
}

.card__item__details__title {
  font-size: 1.2rem;
  margin-bottom: 5px;
  text-align: center; 
  color:#43bbac; 
}

.card__item__details__text {
  color: #2f2f2f;
  font-size: .8rem;
  text-align: center;
  padding: 2px;
}

.btn {
  text-decoration: none;
  color: #fff;
  justify-self: center;
  border-radius: 25px;
}

.card__item__details__btn {
  background-color: #43bbac;
  border: none;
  padding: 3px 8px;
  cursor: pointer;
  font-size: .8rem;
  border-radius: 10px;
  margin: 10px auto;

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
  transform: scale(0.8) translateY(0px);
  opacity: 0;
  transition: all 0.5s ease-out; /* Adjust the duration to make it faster */
}

.stagger {
  transform: scale(1) translateY(0px);
  opacity: 1;
  transition: all 0.5s ease-out; /* Adjust the duration to make it faster */
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

.get-out{
  display: grid;
  place-items: center;
  background-color: #dcdfdc;
  height: 96%;
  margin: 0 auto;
  padding: 4px;
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

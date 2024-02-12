<template>
  <v-container class="main">
    <div class="title-container">
      <h1 class="main-title">Check Out My Progressing Skills</h1>
    </div>
    <div class="title-container">
      <p>
        Over the course of the past three years, I have steadfastly dedicated
        myself to the development and enhancement of these skills, a commitment
        that is perceptibly manifested through the ongoing evolution showcased
        in my GitHub commit history and projects.
      </p>
    </div>
    <v-row justify="center">
      <v-col
        v-for="(category, index) in categories"
        :key="index"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card
          class="pa-3 ma-2 skill-card"
          @mouseover="hoverCard(index)"
          @mouseleave="leaveCard"
        >
          <v-icon color="#1bae9c" class="display-2" size="10">{{
            category.icon
          }}</v-icon>
          <h3 class="mt-2 title">{{ category.title }}</h3>
          <v-divider class="my-2"></v-divider>
          <v-row justify="center">
            <v-col
              v-for="(skill, i) in category.skills"
              :key="i"
              cols="12"
              md="6"
            >
              <v-chip class="chip-small">{{ skill.title }}</v-chip>
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
      categories: [
        {
          title: "Databases",
          icon: "mdi-database",
          skills: [
            { title: "MySQL" },
            { title: "MariaDB" },
            { title: "MongoDB" },
          ],
        },
        {
          title: "Web Development Tools",
          icon: "mdi-web",
          skills: [
            { title: "Python" },
            { title: "JavaScript" },
            { title: "Vue.js" },
            { title: "React" },
            { title: "Flask" },
          ],
        },
        {
          title: "Cloud Services",
          icon: "mdi-cloud",
          skills: [{ title: "Oracle Cloud" }, { title: "AWS" }],
        },
        {
          title: "Design Tools",
          icon: "mdi-pencil",
          skills: [{ title: "Figma" }, { title: "Canva" }],
        },
      ],
    };
  },
  methods: {
    hoverCard(index) {
      this.hoveredIndex = index;
    },
    leaveCard() {
      this.hoveredIndex = null;
    },
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
  padding-top: 30px;
}
.title-container {
  text-align: center;
  margin-bottom: 20px;
}
.main-title {
  color: #1bae9c;
}
.skill-card {
  transition: box-shadow 0.3s, background-color 0.3s;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.skill-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background-color: rgb(215, 239, 239);
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
  color: #1bae9c;
}

.chip-small {
  font-size: 0.8rem;
  padding: 4px 8px;
}
@media only screen and (max-width: 767px) {
  .main {
    margin-top: 20px;
  }
}
</style>

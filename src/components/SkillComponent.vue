<template>
  <v-container>
    <div class="title-container">
      <h1>Check Out My Progressing Skills</h1>
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
          <v-icon class="display-2" size="10">{{ category.icon }}</v-icon>
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
.title-container {
  text-align: center;
  margin-bottom: 20px;
}
.skill-card {
  transition: box-shadow 0.3s;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.skill-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
}
.chip-small {
  font-size: 0.8rem;
  padding: 4px 8px;
}
</style>

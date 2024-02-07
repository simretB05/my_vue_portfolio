<template>
  <main>
    <projects-component></projects-component>
  </main>
</template>
      
      <script>
import ProjectsComponent from "@/components/ProjectsComponent.vue";

export default {
  components: {
    ProjectsComponent,
  },
};
</script>
      
      <style scoped>
main {
  min-height: 70vh;
  background-color: rebeccapurple;
}
</style>
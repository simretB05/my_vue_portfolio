<template>
  <main>
    <about-component></about-component>
  </main>
</template>
  
  <script>
import AboutComponent from "@/components/AboutComponent.vue";

export default {
  components: {
    AboutComponent,
  },
};
</script>
  
  <style scoped>
main {
  min-height: 70vh;
  background-color: rebeccapurple;
}
</style>
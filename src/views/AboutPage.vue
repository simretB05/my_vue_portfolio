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
  margin: 0;
  padding: 0;
  display: grid;
  place-items: start;
}
</style>
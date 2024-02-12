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
  width: 100%;
  display: grid;
  place-items: center;
}
</style>
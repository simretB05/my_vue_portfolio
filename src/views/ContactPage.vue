<template>
  <main>
    <contact-component></contact-component>
  </main>
</template>
    
    <script>
import ContactComponent from "@/components/ContactComponent.vue";

export default {
  components: {
    ContactComponent,
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
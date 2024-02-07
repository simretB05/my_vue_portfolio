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
  min-height: 70vh;
  background-color: rebeccapurple;
}
</style>
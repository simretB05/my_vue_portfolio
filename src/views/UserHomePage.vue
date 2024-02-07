<template>
  <main>
    <user-home-component></user-home-component>
  </main>
</template>

<script>
import UserHomeComponent from "@/components/UserHomeComponent.vue";

export default {
  components: {
    UserHomeComponent,
  },
};
</script>

<style scoped>
main {
  min-height: 80vh;
}
</style>
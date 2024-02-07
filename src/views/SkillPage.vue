<template>
  <main>
    <Skill-Page> </Skill-Page>
  </main>
</template>
        
        <script>
import SkillPage from "@/components/SkillComponent.vue";

export default {
  components: {
    SkillPage,
  },
};
</script>
        
        <style scoped>
main {
  min-height: 70vh;
  background-color: rebeccapurple;
}
</style>
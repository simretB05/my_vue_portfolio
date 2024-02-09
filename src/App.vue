<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style >
body,
html {
  margin: 0;
  padding: 0;
  font-family: "roboto-mono", monospace;
}
* {
  box-sizing: border-box;
}
</style>



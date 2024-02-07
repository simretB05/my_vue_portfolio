<template>
  <v-layout class="my-5">
    <v-col>
      <v-list>
        <v-img
          lazy-src="/images/your-image.jpg"
          max-height="150"
          max-width="250"
          src="/images/your-image.jpg"
        ></v-img>

        <v-list-item
          them--light-teal
          class="px-0"
          v-for="(item, i) in loginLinks"
          :key="i"
          link
          router
          :to="item.route"
          color="#ffffff"
        >
          <v-list-item-icon class="mr-2">
            <v-icon color="#ffffff">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="orange--text text--darken-4 font-weight-bold"
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      loginLinks: [
        {
          title: "About",
          route: "/about",
        },
        {
          title: "Contact",
          route: "/contact",
        },
        {
          title: "Projects",
          route: "/projects",
        },
      ],
    };
  },
  methods: {
    async logout() {
      if (this.token) {
        try {
          this.$root.$emit("loggedOut");
          this.$router.push(`/`);
        } catch (error) {
          error;
        }
      }
    },
  },
  mounted() {},
};
</script>

<style  scoped>
.my-5 {
  margin-top: 30px;
}
</style>
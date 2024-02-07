<template>
  <v-container>
    <v-layout class="custom-c">
      <v-card class="custom-c">
        <v-list class="menu-list" dense>
          <v-list-item
            class="menu-list_item"
            v-for="(item, i) in loginLinks"
            :key="i"
            link
            router
            :to="item.route"
            @click="i === loginLinks.length - 1 ? logout(item) : null"
            :class="{ 'last-item-button': i === loginLinks.length - 1 }"
          >
            <v-list-item-content>
              <v-list-item-title
                class="'text--darken-1': isDarkTheme, 'white--text': !isDarkTheme,font-weight-bold mx-3"
                >{{ item.title }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: {
    isDarkTheme: Boolean,
  },
  data() {
    return {
      drawer: false,
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
  methods: {},
};
</script>

<style scoped>
.theme--light.v-list-item:not(.v-list-item--active):not(
    .v-list-item--disabled
  ) {
  font-weight: 900;
  display: flex;
  align-items: center;
  width: 60%;
}
.v-list-item {
  display: flex;
  justify-items: center;
  width: 70%;
}
.custom-c {
  display: grid;
  justify-content: flex-end;
  width: 100%;
}

.v-list-item--dense .v-list-item__icon,
.v-list--dense .v-list-item .v-list-item__icon {
  margin: 10px;
  display: flex;
}
.menu-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 0vh;
  background-color: transparent;
  padding: 0;
}

.v-icon.v-icon {
  margin-top: 12px;
}
/* Bounce effect on click */
</style>

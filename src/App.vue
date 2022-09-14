<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/img/123456.gif"
          transition="scale-transition"
          width="60"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <div class="menu">
        <router-link to="/"><a>Home</a></router-link>
        <router-link to="/regis"><a>Register</a></router-link>
        <router-link to="/login"><a>Login</a></router-link>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.menu {
  display: flex;
  padding: 10px;
  text-decoration: none;
}
.menu a {
  margin: 10px;
  color: antiquewhite;
  text-decoration: none;
  font-size: 20px;
}
</style>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer theme="dark" expand-on-hover rail>
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-bread-slice"
            title="Home"
            value="home"
            to="/"
          ></v-list-item>

          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Avatars"
                value="avatars"
                prepend-icon="mdi-guy-fawkes-mask"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="([title, href], i) in avatars"
              :key="i"
              :value="title"
              :title="title"
              :href="href"
              rel="noopener norefferrer"
            ></v-list-item>
            <v-divider />
            <v-list-item
              key="3"
              value="avatars-jsonplaceholder"
              title="JSONPlaceholder"
              href="https://my-json-server.typicode.com/eddiehe49/avatars-json/"
              target="_blank"
              rel="noopener norefferrer"
            ></v-list-item>
          </v-list-group>

          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Favicons"
                value="favicons"
                prepend-icon="mdi-unicorn-variant"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="([title, href], i) in favicons"
              :key="i"
              :value="title"
              :title="title"
              :href="href"
              rel="noopener norefferrer"
              :disabled="
                this.$route.path === '/' && title === 'LightMode' ? true : false
              "
            ></v-list-item>
            <v-divider />
            <v-list-item
              key="4"
              value="favicons-jsonplaceholder"
              title="JSONPlaceholder"
              href="https://my-json-server.typicode.com/eddiehe49/favicons-json/"
              target="_blank"
              rel="noopener norefferrer"
            ></v-list-item>
          </v-list-group>

          <v-list-item
            prepend-icon="mdi-glass-mug-variant"
            title="About"
            value="about"
            to="/about"
            :disabled="this.$route.path === '/about' ? true : false"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<script>
export default {
  data: () => ({
    open: ["Users"],
    avatars: [
      ["DarkMode", "https://eddiehe-avatars-darkmode.vercel.app/"],
      ["LightMode", "https://eddiehe-avatars-lightmode.onrender.com/"],
    ],
    favicons: [
      ["Auto", "https://eddiehe-favicons.vercel.app/"],
      ["DarkMode", "https://eddiehe-favicons-darkmode.vercel.app/"],
      ["LightMode", "https://eddiehe-favicons-lightmode.onrender.com/"],
    ],
  }),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a {
  /* font-weight: bold; */
  color: #1867c0;
}
</style>

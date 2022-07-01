<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer theme="dark" expand-on-hover rail>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-bread-slice" title="Home" value="home" to="/"></v-list-item>

          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="Profile Pictures" value="profile pictures"
                prepend-icon="mdi-guy-fawkes-mask"></v-list-item>
            </template>
            <v-list-item v-for="([title, href], i) in profilePictures" :key="i" :value="title" :title="title"
              :href="href" rel="noopener norefferrer"></v-list-item>
            <v-divider />
            <v-list-item key="3" value="profile-pictures-jsonplaceholder" title="JSONPlaceholder"
              href="https://my-json-server.typicode.com/eddiehe49/profile-pictures/" target="_blank"
              rel="noopener norefferrer"></v-list-item>
          </v-list-group>

          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="Favicons" value="favicons" prepend-icon="mdi-unicorn-variant">
              </v-list-item>
            </template>
            <v-list-item v-for="([title, href], i) in favicons" :key="i" :value="title" :title="title" :href="href"
              rel="noopener norefferrer" :disabled="
                this.$route.path === '/' && title === 'LightMode' ? true : false
              "></v-list-item>
            <v-divider />
            <v-list-item key="4" value="favicons-jsonplaceholder" title="JSONPlaceholder"
              href="https://my-json-server.typicode.com/eddiehe49/favicons/" target="_blank" rel="noopener norefferrer">
            </v-list-item>
          </v-list-group>

          <v-list-item prepend-icon="mdi-glass-mug-variant" title="About" value="about" to="/about"
            :disabled="this.$route.path === '/about' ? true : false"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view @showDialogs="showFaviconsDialog" />
  <v-dialog v-model="faviconsDialog" persistent>
    <v-card>
      <v-card-title class="text-h5"> What are favicons? </v-card-title>
      <img src="faviconsIntroduction.jpg" alt="favicons introduction" />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="faviconsDialog = false">
          Close
        </v-btn>
        <v-btn color="green darken-1" text @click="faviconsDialog = false; tipsDialog = true">
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog v-model="tipsDialog" persistent>
    <v-card>
      <v-card-title class="text-h5"> Tips </v-card-title>
      <v-card-text>
        <v-list-item two-line>
          <v-list-item-header>
            <v-list-item-title>There is a like button.</v-list-item-title>
            <v-list-item-subtitle>Give your preferred favicon a thumb up!</v-list-item-subtitle>
            <br />
            <v-list-item-title>Scroll down!</v-list-item-title>
            <v-list-item-subtitle>Have fun in the comment section.</v-list-item-subtitle>
          </v-list-item-header>
        </v-list-item>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="tipsDialog = false">
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    open: ["Users"],
    profilePictures: [
      ["DarkMode", "https://eddiehe-profile-pictures-darkmode.vercel.app/"],
      ["LightMode", "https://eddiehe-profile-pictures-lightmode.onrender.com/"],
    ],
    favicons: [
      ["Auto", "https://eddiehe-favicons.vercel.app/"],
      ["DarkMode", "https://eddiehe-favicons-darkmode.vercel.app/"],
      ["LightMode", "https://eddiehe-favicons-lightmode.onrender.com/"],
    ],
    faviconsDialog: true,
    tipsDialog: false,
  }),
  methods: {
    showFaviconsDialog() {
      this.faviconsDialog = true;
    },
  },
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

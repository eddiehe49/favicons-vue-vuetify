<template>
  <v-card class="mx-auto" max-width="600">
    <v-layout>
      <v-navigation-drawer theme="dark" expand-on-hover rail>
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Home"
            value="home"
            to="/"
          ></v-list-item>

          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Admin"
                value="Admin"
                prepend-icon="mdi-view-dashboard"
              ></v-list-item>
            </template>

            <v-list-item
              v-for="([title], i) in admins"
              :key="i"
              :value="title"
              :title="title"
              href="https://eddiehe.super.site"
              target="_blank"
              rel="noopener norefferrer"
            ></v-list-item>
          </v-list-group>

          <v-list-item
            prepend-icon="mdi-account-multiple"
            title="Avatars"
            value="avatars"
            id="avatars-activator"
          >
            <v-menu activator="#avatars-activator">
              <v-list>
                <v-list-item
                  prepend-icon="mdi-account-multiple"
                  title="Avatars-React"
                  value="avatars-react"
                ></v-list-item>
                <v-list-item
                  prepend-icon="mdi-account-multiple"
                  title="Avatars-Vue"
                  value="avatars-vue"
                ></v-list-item>
                <v-list-item
                  prepend-icon="mdi-account-multiple"
                  title="Avatars-JSON"
                  value="avatars-json"
                  id="avatars-json-activator"
                ></v-list-item>
                <v-menu activator="#avatars-json-activator">
                  <v-list>
                    <v-list-item
                      prepend-icon="mdi-account-multiple"
                      title="Avatars-JSONPlaceholder"
                      value="avatars-jsonplaceholer"
                    ></v-list-item>
                    <v-list-item
                      prepend-icon="mdi-account-multiple"
                      title="Avatars-JSONBin"
                      value="avatars-jsonbin"
                    ></v-list-item>
                  </v-list>
                </v-menu>
              </v-list>
            </v-menu>
          </v-list-item>

          <v-list-item
            prepend-icon="mdi-account-multiple"
            title="Favicons"
            value="favicons"
            id="favicons-activator"
          >
            <v-menu activator="#favicons-activator">
              <v-list>
                <v-list-item
                  prepend-icon="mdi-account-multiple"
                  title="Favicons-React"
                  value="Favicons-react"
                ></v-list-item>
                <v-list-item
                  prepend-icon="mdi-account-multiple"
                  title="Favicons-Vue"
                  value="Favicons-vue"
                ></v-list-item>
                <v-list-item
                  prepend-icon="mdi-account-multiple"
                  title="Favicons-JSON"
                  value="favicons-json"
                  id="favicons-json-activator"
                ></v-list-item>
                <v-menu activator="#favicons-json-activator">
                  <v-list>
                    <v-list-item
                      prepend-icon="mdi-account-multiple"
                      title="Favicons-JSONPlaceholder"
                      value="favicons-jsonplaceholer"
                      href="https://api.jsonbin.io/v3/b/6247a881d96a510f028f6bfd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    </v-list-item>
                    <v-list-item
                      prepend-icon="mdi-account-multiple"
                      title="Favicons-JSONBin"
                      value="favicons-jsonbin"
                    ></v-list-item>
                  </v-list>
                </v-menu>
              </v-list>
            </v-menu>
          </v-list-item>

          <v-list-item
            prepend-icon="mdi-forum"
            title="About"
            value="about"
            to="/about"
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
    admins: [["Management"], ["Settings"]],
    cruds: [["Createeeee"], ["Read"], ["Update"], ["Delete"]],
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
</style>

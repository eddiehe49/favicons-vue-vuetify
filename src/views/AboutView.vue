<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">This is an about page.</h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">Powered by</h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in PoweredBy"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">Coded by</h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in codedBy"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    PoweredBy: [
      {
        text: "Vue",
        href: "https://v3.cn.vuejs.org/",
      },
      {
        text: "Vutify",
        href: "https://vuetifyjs.com/",
      },
      {
        text: "JSONPlaceholder",
        href: "http://jsonplaceholder.typicode.com/",
      },
      {
        text: "Krates",
        href: "https://app.krat.es/",
      },
      {
        text: "Render",
        href: "https://render.com/",
      },
    ],
    codedBy: [
      {
        text: "Eddie He",
        href: "https://eddiehe.super.site",
      },
    ],
  }),
};
</script>

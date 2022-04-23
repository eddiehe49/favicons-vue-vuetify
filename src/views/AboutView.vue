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
        <h1 class="display-2 font-weight-bold mb-3">What are favicons?</h1>
        <strong>
          Check out this
          <a
            href="https://eddiehe.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            >site</a
          >
          on your desktop browser.
          <br />
          Do you see the tiny icon in the left of the tab? That's a favicon!
        </strong>
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
            rel="noopener norefferrer"
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
            rel="noopener norefferrer"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getCurrentInstance } from "vue";
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
        href: "https://next.vuetifyjs.com/en/",
      },
      {
        text: "JSONPlaceholder",
        href: "https://jsonplaceholder.typicode.com/",
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
  mounted() {
    const internalInstance = getCurrentInstance();
    //  全局变量
    let global = internalInstance.appContext.config.globalProperties;
    global.$waline.update();
  },
};
</script>

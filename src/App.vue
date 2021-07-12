<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue';
import { router } from './router'
export default {
  name: 'App',
  setup() {
    // get page width, show left aside when page width over 500px, otherwise not show
    // width < 500 for mobilel; width > 500 for PC
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width < 500 ? false : true);
    provide("asideVisible", asideVisible) // provide is just like set Method, the value stored can get by inject

    // close left aside for mobile when router changed
    router.afterEach(() => {
      if (width <= 500) {
        console.log("afterEach router change")
        asideVisible.value = false;
      }
    });
  }
}
</script>

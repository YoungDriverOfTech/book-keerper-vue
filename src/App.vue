<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue';
export default {
  name: 'App',
  setup() {
    // get page width, show left aside when page width over 500px, otherwise not show
    // width < 500 for mobilel; width > 500 for PC
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width < 500 ? false : true);

    console.log("App.vue:" + asideVisible.value)

    provide("asideVisible", asideVisible) // provide is just like set Method, the value stored can get by inject
  }
}
</script>

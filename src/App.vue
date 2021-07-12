<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue';
export default {
  name: 'App',
  setup() {
    const asideVisible = ref(true);
    provide("asideVisible", asideVisible) // provide is just like set Method, the value stored can get by inject
  }
}
</script>

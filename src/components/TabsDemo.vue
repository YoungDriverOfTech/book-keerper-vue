<template>
<div>Tabs 示例</div>
<h1>示例1</h1>
<Tabs :selected="x" @update:selected="x = $event">
  <Tab title="导航11111111111111">内容1</Tab>
  <Tab title="导航2">内容2</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },

  setup() {
    const x = ref("导航11111111111111");
    return {x}
  }

}
</script>

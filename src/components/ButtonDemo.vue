<template>
    <div>
        <h1>示例1</h1>
        <br/>
        <Button theme="button">hello</Button>
        <Button theme="link">hello</Button>
        <Button theme="text">hello</Button>
    </div>
    <div>
        <h1>示例2</h1>
        <br/>
        <Button size="small">hello</Button>
        <Button size="normal">hello</Button>
        <Button size="big">hello</Button>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components: {
        Button
    },

}
</script>
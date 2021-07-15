<template>
    <div>
        <P>Button 文档</P>
        <br/>
        <Button @click="onClick"
            @focus="onClick"
            @mouseover="onClick"
            @size="small">
            hello world
        </Button>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    component: {
        Button
    },

    setup() {
        const onClick = () => {
            console.log("wahhaha");
        }
        return {onClick}
    }

}
</script>
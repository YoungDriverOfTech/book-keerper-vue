<template>
    <div>
        <p>Dialog 示例</p>
    </div>
    <Demo :component="Dialog1Demo" />
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
export default {
    components: {
        Demo
    },
    setup() {
        return { Dialog1Demo }
    }
}
</script>
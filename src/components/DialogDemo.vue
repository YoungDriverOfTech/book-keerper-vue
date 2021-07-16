<template>
    <div>
        <p>Dialog 的文档</p>
    </div>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">click to show dialog</Button>
    <Dialog :visible="x" 
            @update:visible="x = $event"
            :ok="ok"
            :cancle="cancle">
        <template v-slot:content>
            <strong>hi</strong>
            <div>hi2</div>
        </template>
        <template v-slot:title>
            <strong>加粗的标题</strong>
        </template>
    </Dialog>
    <!-- @update:visible visible is property name, and x is property value -->
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {
    components: {
        Dialog,
        Button
    },
    setup() {
        const x = ref(false);
        const toggle = () => {
            x.value = !x.value;
        };
        const ok = () => {
            console.log("ok function is executed");
            return false;
        };
        const cancle = () => {
            console.log("cancle function is executed");
        };
        return {
            x, 
            toggle,
            ok,
            cancle
        }
    }
}
</script>
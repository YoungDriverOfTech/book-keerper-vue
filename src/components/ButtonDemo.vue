<template>
    <div>
        <h1>示例1</h1>
        <br/>
        <Button theme="button">button</Button>
        <Button theme="link">link</Button>
        <Button theme="text">text</Button>
    </div>
    <div>
        <br/>
        <h1>示例2</h1>
        <br/>
        <Button theme="button" size="small">small button</Button>
        <Button theme="button" size="normal">normal button</Button>
        <Button theme="button" size="big">big button</Button>
    </div>
    <div>
        <Button theme="link" size="small">small button</Button>
        <Button theme="link" size="normal">normal button</Button>
        <Button theme="link" size="big">big button</Button>
    </div>
    <div>
        <Button theme="text" size="small">small button</Button>
        <Button theme="text" size="normal">normal button</Button>
        <Button theme="text" size="big">big button</Button>
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
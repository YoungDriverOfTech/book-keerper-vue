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
        <Button theme="link" size="small">small link</Button>
        <Button theme="link" size="normal">normal link</Button>
        <Button theme="link" size="big">big link</Button>
    </div>
    <div>
        <Button theme="text" size="small">small text</Button>
        <Button theme="text" size="normal">normal text</Button>
        <Button theme="text" size="big">big text</Button>
    </div>
     <div>
        <br/>
        <h1>示例3</h1>
        <br/>
        <Button theme="button" level="main">main button</Button>
        <Button theme="button" level="normal">normal button</Button>
        <Button theme="button" level="danger">danger button</Button>
    </div>
    <div>
        <Button theme="link" level="main">main link</Button>
        <Button theme="link" level="normal">normal link</Button>
        <Button theme="link" level="danger">danger link</Button>
    </div>
    <div>
        <Button theme="text" level="main">main text</Button>
        <Button theme="text" level="normal">normal text</Button>
        <Button theme="text" level="danger">danger text</Button>
    </div>
     <div>
        <br/>
        <h1>示例4</h1>
        <br/>
        <Button theme="button" disabled>diable button</Button>
        <Button theme="button" disabled>diable link</Button>
        <Button theme="button" disabled>diable text</Button>
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
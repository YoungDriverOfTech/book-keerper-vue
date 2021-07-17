<template>
    <div v-for="(t, index) in titles" :key="index">
        {{t}}
    </div>
    <component v-for="(c, index) in defaults" :key="index" :is="c"/>
</template>

<script>
import Tab from "./Tab.vue"
export default {
    setup(props, context) {
        const defaults = context.slots.default();
        defaults.forEach((tag) => {
            console.log(tag);
            if (tag.type !== Tab) {
                throw new Error(`Tabs内子标签必须是Tab`)
            }
        });

        const titles = defaults.map((tag) => {
            console.log(tag.props.title);
            return tag.props.title;
        });

        return {defaults, titles}
    },
}
</script>
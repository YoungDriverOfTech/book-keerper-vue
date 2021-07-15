<template>
  <div :size="size">
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
export default {
    // the parent attrs(such as click event, properties) will be binded into component's outside element automatically
    // this attribute(false) will cancle the automate bind and the attrs need be binded manually
    inheritAttrs: false,
    props: {},
    setup(props, context) {
        // context.attrs will get all properties from parent
        const {size, ...rest} = context.attrs;
        return {size, rest}
    }
}
</script>

<style lang="scss" scoped>

</style>
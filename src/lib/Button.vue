<template>
    <!-- :class="{[`theme-&{theme}`]: theme}" can be used to bind dynamic class -->
    <button class="gulu-button" 
            :class="{[`gulu-theme-${theme}`]: theme}">
            <slot />
    </button>
</template>

<script lang="ts">
export default {
    // the parent attrs(such as click event, properties) will be binded into component's outside element automatically
    // this attribute(false) will cancle the automate bind and the attrs need be binded manually
    // inheritAttrs: false,

    props: {
        theme: {
            type: String,
            default: `button`
        },
    },
};
</script>

// PS: the component's style lable must cancel scoped property which will generate a random string in class(data-v-xxx), we should promise our components can generate a stable class and be rewrite by other developers
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.gulu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
</style>
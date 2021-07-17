<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav" ref="container">
            <div class="gulu-tabs-nav-item" 
                  v-for="(t, index) in titles" :key="index"
                  @click="select(t)"
                  :class="{selected: t===selected}"
                  :ref="el => { if (t===selected) selectedItem = el }">
              {{t}}
            </div>
            <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="gulu-tabs-content">
            <component class="gulu-tabs-content-item" 
            v-for="(c, index) in defaults" :key="index" :is="c"
            :class="{selected: c.props.title === selected}"/>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, watchEffect } from 'vue';
import Tab from "./Tab.vue"
export default {
    props: {
        selected: {
            type: String
        },
    },

    setup(props, context) {

        // change the indicator bar length when select different Tab label
        const selectedItem = ref(null)
        const indicator = ref(null);
        const container = ref(null);

        // cuz watchEffect will be executed before dom mounted, so selectedItem.value might be a null sometimes
        // and we need place watchEffect into onMounted hook, it will be executed after onMounted hook execution finished
        onMounted(() => {
          watchEffect(() => {
            // get selected Tab's length and set into indicator
            const {width} = selectedItem.value.getBoundingClientRect();
            indicator.value.style.width = width + 'px';

            // change indicator location when change selected Tab label
            const {left: left1} = container.value.getBoundingClientRect();
            const {left: left2} = selectedItem.value.getBoundingClientRect();
            const left = left2 - left1;
            indicator.value.style.left = left + 'px';
          })
        })
        

        // throw a error if user use div lable, rather than Tab, in the Tabs label
        const defaults = context.slots.default();
        defaults.forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error(`Tabs内子标签必须是Tab`)
            }
        });

        // get Tab label title priperties
        const titles = defaults.map((tag) => {
            return tag.props.title;
        });

        const select = (title) => {
            context.emit('update:selected', title)
        }
        return {defaults, titles, select, selectedItem, indicator, container}
    },
}
</script>


<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
&-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>
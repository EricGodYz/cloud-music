<template>
  <app-scroll :scrollX="true" :scrollY="false" :width="wrapWidth">
    <div class="menu-wrap" ref="wrap">
      <span class="title">{{title}}</span>
      <i>:</i>
      <span
        class="item"
        v-for="(item,index) in data"
        :key="item.id"
        :class="{active: value === index}"
        @click="changeAction(index)"
      >{{item.label}}</span>
    </div>
  </app-scroll>
</template>

<script>
export default {
  props: {
    title: String,
    // 接受来自父组件的数据
    data: Array,
    value: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      wrapWidth: 0,
    };
  },

  // 处理列表的点击事件
  methods: {
    changeAction(index) {
      // 触发input，实现受控的组件

      this.$emit("input", index);
      console.log(index);
    
    },
  },
  mounted() {
    this.wrapWidth = this.$refs.wrap.offsetWidth;
    console.log(this.wrapWidth);
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/global-style.scss";

.menu-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: max-content;
  height: 26px;
  font-size: $font-size-s;
  padding: 0 6px;
  box-sizing: border-box;
  span {
    flex: 0 0 auto;
    padding: 2px 6px;
    &:first-of-type {
      color: $font-color-desc;
    }
    &.active {
      border: 1px solid $theme-color;
      border-radius: 8px;
      color: $theme-color;
    }
  }
  i {
    flex: 0 0 auto;
    margin: 0 4px;
    color: $font-color-desc;
  }
}
</style>
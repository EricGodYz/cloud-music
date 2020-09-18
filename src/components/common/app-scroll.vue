<template>
  <div class="scroll-view" ref="scroll">
    <div class="scroll-wrap" :style="{width:wrapWidth}">
      <!-- 声明插槽,向里面添加内容 -->
      <slot />
    </div>
  </div>
</template>

<script>
// 公共组件scroll的使用
export default {
  props:{
      handleScroll:Function,
      scrollX:{
        type:Boolean,
        default:false,
      },
      scrollY:{
        type:Boolean,
        default:true,
      },
      // 接受滚动视图的宽度
      width:{
        type:[String,Number],
        default:'100%'
      }
  },
  computed: {
    // 计算最终的宽度的样式
    wrapWidth(){
      if(typeof this.width === 'string'){
        return this.width;
      }else{
        return this.width + 'px';
      }
    }
  },
  mounted() {
    // 声明插件的使用位置
    const scroll = new IScroll(this.$refs.scroll, {
      tap: true,
      click: true,
      probeType: 3,
       scrollX: this.scrollX,
      scrollY: this.scrollY
    });
    // 当插件变化的时候就进行更新
    scroll.on("beforeScrollStart", () => {
      scroll.refresh();
    });
   

    // 当有scroll的的需求的时候才才有change这个改变
    // 进行scroll的监听与执行
    this.handleScroll && scroll.on('scroll',()=>{
        // if(scroll.y >=0 ){
        //     // 上滑scroll的值为true
        //     // console.log(scroll.y);
        //     // 子组件传递值
        //     this.change(true);
        // }else{ 
        //     // 下滑的scroll的值为负
        //     // console.log(scroll.y);
        //     this.change(false);
        // }
        this.handleScroll({x:scroll.x,y:scroll.y})
    })
  },
};
</script>

<style lang="scss" scoped>
// 需要滚动的时候必须要有overflow
.scroll-view {
  overflow: hidden;
}
</style>
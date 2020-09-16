<template>
  <div class="scroll-view" ref="scroll">
    <div class="scroll-wrap">
      <!-- 下拉刷新 -->

      <div class="pull-down" :style="{height:height + 'px'}">
        <span class="icon loading" v-if="isPullDown">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span class="iconfont icon-fanhui" :class="{turn:canPullDown}" v-else></span>
        <span class="text">{{pullDownText}}</span>
      </div>

      <!-- 放置加载歌曲的信息 -->
      <slot />

      <div class="pull-up" :style="{height:height + 'px'}">
        <span class="icon loading" v-if="isPullUp">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span class="iconfont icon-fanhui" :class="{turn:canPullUp}" v-else></span>
        <span class="text">{{pullUpText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //  下拉刷新需要的属性
      // 控制图标下拉加载的方向
      canPullDown: false,

        // 控制loading的图标的显示
      isPullDown: false,

      //  控制图标上拉加载的方向
      canPullUp: false,
    //   控制loading图标的显示
      isPullUp: false,

      pullDownText: "下拉可以刷新...",
      pullUpText: "上拉可以加载更多...",
      // 定义设备的倍率
       // 等比例进行高度的添加
      height: window.devicePixelRatio * 40,
    };
  },

  methods: {
    //   结束上拉刷新
      endPullDown(){
          this.scroll.scrollTo(0,-1*this.height,300);
          this.isPullDown = false;
      },
      endPullUp(){
          this.isPullUp = false;
      },
      scrollToTop(){
          this.scroll.scrollTo(0,(-1*this.height),0);
      }
  },
  mounted() {
    // 滑动加载的声明
    const scroll = (this.scroll = new IScroll(this.$refs.scroll, {
      tap: true,
      click: true,
      probeType: 3,
    }));

    scroll.on("beforeScrollStart", () => {
      // console.log(this.$refs.scroll);
      scroll.refresh();
    });
    // 下拉进行刷新
  
    scroll.scrollTo(0, -1 * this.height, 0);
    // 下拉的时候的属性
    scroll.on("scroll", () => {
        // 进行防抖
        if(this.isPullDown){
            // 如果正在加载中不进行判断
            return;
        }
        // 达到下拉属性的条件
      if (scroll.y >= 0) {
          this.canPullDown = true;
          this.pullDownText = '释放立即刷新...';
      }else if(scroll.y <0 && scroll.y > (-1 * this.height)){
        //   未达到条件的，进行用户的提醒
        this.canPullDown =  false;
        this.pullDownText ='下拉可以进行刷新...'
      }
    });

    // 下拉结束时候的属性
    scroll.on('scrollEnd',()=>{
        if(this.isPullDown){
            //如果正在加载中不进行判断
            return;
        }
        // 达到下拉刷新的条件，执行刷新
        if(scroll.y >= 0 ){
            this.isPullDown =  true;
            this.pullDownText = '拼命加载中...'
            // 通知父组件加载数据
            this.$emit('pull-down');
            // 如果没有达到就直接回复原样
        }else if(scroll.y < 0 && scroll.y > (-1 * this.height)){
            console.log(scroll.y);
            scroll.scrollTo(0,-1*this.height,300);

        }
    });




    // 进行上载的事件
    scroll.on('scroll',()=>{
        if(this.isPullUp){
            return;
        }
        // 越往下划，高度就越小
        const minY = scroll.maxScrollY + this.height;
        // 所以滑动到低的时候就是数据加载到页面上最大滚动的zmaxsxrollY
        const maxY = scroll.maxScrollY;
        // console.log(minY,maxY);
        if(scroll.y >= minY){
            // 页面正常可以滚动的距离
            
        }else if(scroll.y < minY  && scroll.y > maxY){
            // 可以进行页面的加载
            this.canPullUp = false;
            this.pullUpText = '上拉可以加载更多....';
        }else{
            // scroll.y <= maxY
            this.canPullUp = true;
            this.pullUpText = '释放立即加载更多....';
            
        }
    });

    // 上载松手后
    scroll.on('scrollEnd',()=>{
        if(this.isPullUp){
            return;
        }
       
        // 越往下划，高度就越小
        const minY = scroll.maxScrollY + this.height;
        // 所以滑动到低的时候就是数据加载到页面上最大滚动的zmaxsxrollY
        const maxY = scroll.maxScrollY;

        if(scroll.y >= minY){
            // 正常的可以滚动的距离
        }else if(scroll.y < minY && scroll.y > maxY){
            scroll.scrollTo(0,minY,300);
        }else{
            this.isPullUp =  true;
            this.pullUpText = '拼命加载中';
            this.$emit('pull-up');
        }

    })
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/global-style.scss";
// 当进行滚动的时候进行下拉的刷新
.scroll-view {
  overflow: hidden;
}

.pull-down,
.pull-up {
  width: 100%;
  display: flex;
//   background-color: lawngreen;
  align-items: center;
  justify-content: center;
  font-size: $font-size-s;
  color: $font-color-desc;
  .iconfont {
    transform: rotate(90deg);
    &.turn {
      transform: rotate(-90deg);
    }
  }
}
.iconfont {
  transform: rotate(-90deg);
  margin: 6px;
  transition: 300ms;
  &.turn {
    transform: rotate(90deg);
  }
}

@keyframes ani-scale {
  0%,
  100% {
    height: 4px;
  }
  50% {
    height: 16px;
  }
}
.icon {
  display: flex;
  width: 20px;
  justify-content: space-around;
  align-items: flex-end;
  margin: 0 6px;
  i {
    background-color: $theme-color;
    width: 2px;
    height: 16px;
    animation: ani-scale 1s infinite ease-in;
    &:nth-of-type(1) {
      animation-delay: -0.25s;
    }
    &:nth-of-type(2) {
      animation-delay: -0.5s;
    }
    &:nth-of-type(3) {
      animation-delay: -0.75s;
    }
  }
}
</style>
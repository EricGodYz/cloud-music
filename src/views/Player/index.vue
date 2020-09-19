<template>
  <div id="play-wrap">
    <!-- <h1 @click ="show=!show ">player</h1> -->
    <!-- <h3 class="tit">{{showPlayerPanel}}</h3> -->
    <transition enter-active-class="mini-slide-in" leave-active-class="mini-slide-out">
      <mini-player v-show="showMiniPlayer" @show-player-panel="handlePlayerPanel" />
    </transition>

    <!-- 展示播放的界面 -->
    <transition >
        <normal-player v-if="showPlayerPanel" @close-player-panel="handlePlayerPanel"/>
        
    </transition>
  </div>
</template>

<script>
import miniPlayer from "./children/mini-player";
import NormalPlayer from './children/noraml-player';
export default {
  components: {
    miniPlayer,
    NormalPlayer
  },
  data() {
    return {
      showMiniPlayer: true,
      showPlayerPanel: false,
    };
  },
  methods: {
    handlePlayerPanel() {
      this.showPlayerPanel = !this.showPlayerPanel;
    },
  },
};
</script>

<style scoped lang="scss" >
#play-wrap {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  h3 {
    color: #fff;
    font-size: 20px;
  }

}


@keyframes mini-slide-in {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes mini-slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}
.mini-slide-in {
  animation: mini-slide-in 300ms ease-in;
}
.mini-slide-out {
  animation: mini-slide-out 300ms ease-out;
}
</style>
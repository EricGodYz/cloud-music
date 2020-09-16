<template>
  <div id="singers" class="page">
    <!-- 歌手的类型 -->

    <singers-list title="分类(默认热门)" :data="menu_type"  v-model="select_type" />
    <singers-list title="首字母" :data="menu_letter"  v-model="select_letter" />



    <ul>
      <li class="singer-item" v-for="item in data" :key="item.id">
        <img v-lazy="item.picUrl" alt="">
        <h3>{{item.name}}</h3>

      </li>
    </ul>

  </div>
</template>

<script>
import { mapState } from "vuex";
import SingersList from "../components/singers/singers-list";
export default {
  components: {
    SingersList,
  },
  data() {
    return {
      // 歌曲类型列表
      menu_type: [],
      // 歌曲字母列表
      menu_letter: [],
      //歌曲类型的选择 -1(默认是-1)
      select_type: -1,
      // 歌曲字母的选择 默认为-1
      select_letter: -1,
    };
  },
  computed: {
    ...mapState({
      // singer:(state) => {console.log(state);},
      data: (state) => state.singers.singers,
    }),
  },
  watch: {
    select_type(){
      this.requestData();
    },
    select_letter(){
      this.requestData();
    }
  },

  // 请求数据被封装成函数方便调用

  methods: {
    requestData() {
      //进行参数的处理
      let type = -1;
      let area = -1;
      let initial = -1;
     


      //当歌手列表的数据被选中
      if(this.select_type >= 0){
        const item = this.menu_type[this.select_type];
        type = item.typeID,
        area = item.areaID
      }
      if(this.select_letter >=0){
        const item = this.menu_letter[this.select_letter];
        initial = item.id; 
      }
      
      const offset = 0;
      const limit = 30;
      // 当字母列表的数据被选中
      //发送请求数据
      this.$store.dispatch("singers/requestSingersList", {
        type,
        area,
        initial,
        offset,
        limit,
      });
    },
  },

  created() {
    // 构建组合列表

    // 声明歌手的类型，进行组合
    const types = [
      { label: "男", id: 1 },
      { label: "女", id: 2 },
      { label: "组合", id: 3 },
    ];
    // 主要是进行数据的拼接
    const areas = [
      { label: "华语", id: 7 },
      { label: "欧美", id: 96 },
      { label: "日本", id: 8 },
      { label: "韩国", id: 16 },
      { label: "其他", id: 0 },
    ];

    // 构建歌曲类型的列表
    let result = [];
    areas.forEach((area) => {
      result = [
        // 每次遍历直接加进去，保存数据
        ...result,
        ...types.map((type) => ({
          label: area.label + type.label,
          id: area.id.toString() + type.id.toString(),
          areaID: area.id,
          typeID: type.id,
        })),
      ];
    });
    // console.log(result);
    this.menu_type = result;
    // console.log(this.menu_type);

    // 构建字母列表
    this.menu_letter = new Array(26).fill(65).map((item, index) => {
      return {
        label: String.fromCharCode(item + index),
        id: String.fromCharCode(index + 97),
      };
    });

    console.log(this.menu_letter);
    //  处理完参数列表，就开始进行请求数据
    this.requestData();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/global-style.scss";
.content {
  position: absolute;
  top: 52px;
  left: 0;
  bottom: 0;
  width: 100%;
}
.singer-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid $border-color;
  img {
    width: 50px;
    height: 50px;
  }
  h3 {
    margin: 0 10px;
    line-height: 50px;
    font-size: $font-size-m;
  }
}
</style>
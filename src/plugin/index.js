import AppSroll from '../components/common/app-scroll.vue';
import VueLazyload from 'vue-lazyload'
import InfiniteScroll from '../components/common/infinite-scroll'
export default {
    // 定义公共组件导入的地方
    install(Vue) {

        // 图片懒加载的应用
        Vue.use(VueLazyload, {
            preLoad: 1.3,
            error: '/img/music.png',
            loading: '/img/music.png',
            attempt: 1
        })

        // 滚动组件的注册
        Vue.component("app-scroll", AppSroll);
        Vue.component("infinite-scroll", InfiniteScroll);


    }
}
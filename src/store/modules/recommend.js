import { BANNER_API, RECOMMEND_LIST_API, RECOMMEND_LIST_API_Detail } from '../../api/url';

import http from '../../api/http';

export default {
    namespaced: true,

    // 存储数据的状态
    state: {
        banner: [],
        recommend: [],
        bannerState: false,
        recommendState: false,
       
    },
    getters: {
        loading(state) {
            // console.log(state);
            return state.bannerState || state.recommendState;
        }
    },
    mutations: {

        //处理轮播图的数据
        setBanner(state, payload) {
            state.banner = payload;
        },
        // 设置bannerLoading的状态
        setBannerState(state, payload) {
            // console.log(state);
            state.bannerState = payload;
        },

        // 处理推荐列表的数据
        setRecommend(state, payload) {
            state.recommend = payload;
        },

        //设置recommengLoading的状态
        setRecommendState(state, payload) {
            state.recommendState = payload;

        },
       
    },

    actions: {
        // 请求轮播图的数据
        async requestBannerList(context) {
            context.commit('setBannerState', true);

            const { data: { banners } } = await http.get(BANNER_API);
            const newData = banners.map((item) => item.imageUrl);
            context.commit('setBanner', newData);
            // 当数据请求加载完毕
            // console.log(newData);
            context.commit('setBannerState', false);



        },
        // 请求推荐歌单的数据
        async requestRecommendList(context) {

            context.commit('setRecommendState', true);

            const { data: { result } } = await http.get(RECOMMEND_LIST_API);
            const newData = result.map(({ id, name, picUrl, playCount, }) => ({
                id,
                name,
                picUrl,
                playCount,
            }));
            // console.log(newData);
            context.commit('setRecommend', newData);

            context.commit('setRecommendState', false);





            // 验证是否得到对于loading的处理
            // setTimeout(async () => {
            //     const { data: { result } } = await http.get(RECOMMEND_LIST_API);
            //     const newData = result.map(({ id, name, picUrl, playCount, }) => ({
            //         id,
            //         name,
            //         picUrl,
            //         playCount,
            //     }));
            //     // console.log(newData);
            //     context.commit('setRecommend', newData);
            //     context.commit('setRecommendState', false);
            // }, 5000);




        },

       
    }
}
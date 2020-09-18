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
        recommendList: {},
        detailLoading: false,
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
            console.log(state);
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
        setRecommendListDetail(state, payload) {
            state.recommendList = payload;
        },
        setDetailLoading(state, payload) {
            state.detailLoading = payload;
        }
    },

    actions: {
        // 请求轮播图的数据
        async requestBannerList(context) {
            context.commit('setBannerState', true);

            const { data: { banners } } = await http.get(BANNER_API);
            const newData = banners.map((item) => item.imageUrl);
            context.commit('setBanner', newData);
            // 当数据请求加载完毕
            console.log(newData);
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

        // 请求歌单详情数据
        async requestRecommendListDetail(context, payload) {
            context.commit('setDetailLoading', true);
            const { data: { playlist } } = await http.get(RECOMMEND_LIST_API_Detail, payload);
            // console.log(playlist);
            const listDetail = {
                // 歌单的名字
                name: playlist.name,
                // 歌单的图片
                coverImgUrl: playlist.coverImgUrl,
                // 歌单的收藏量
                subscribedCount: playlist.subscribedCount,
                // 创建者的名字
                creator: {
                    // 创建者的名字
                    nickname: playlist.creator.nickname,
                    // 创建者的图片
                    avatarUrl: playlist.creator.avatarUrl,
                },


                tracks: playlist.tracks.map((item) => ({
                    // 歌曲的id
                    id: item.id,
                    // 歌曲的名字
                    name: item.name,
                    // 歌手
                    ar: item.ar.map((arItem) => (arItem.name)),
                    // 专辑
                    al: {
                        // 专辑
                        name: item.al.name,
                        picUrl: item.al.picUrl,
                    }
                })),



            };
            // console.log(listDetail.creator.avatarUrl);

            context.commit("setRecommendListDetail", listDetail);
            context.commit('setDetailLoading', false);
        }
    }
}
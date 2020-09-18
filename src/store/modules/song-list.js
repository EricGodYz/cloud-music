import { SONG_LIST_API_Detail } from '../../api/url';
import http from '../../api/http';
export default{
    namespaced: true,
    state:{
        detail: {},
        loading: false,
    },
    mutations:{
        setListDetail(state, payload) {
            state.detail = payload;
        },

        setLoading(state, payload) {
            state.loading = payload;
        }
    },
    actions:{
         // 请求歌单详情数据
         async requestListDetail(context, payload) {
            context.commit('setLoading', true);
            const { data: { playlist } } = await http.get(SONG_LIST_API_Detail, payload);
            // console.log(playlist);
            const listDetail = {
                // 歌单的名字
                title: playlist.name,
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

            context.commit("setListDetail", listDetail);
            context.commit('setLoading', false);
        }
    }
  
}
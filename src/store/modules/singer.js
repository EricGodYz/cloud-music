import { SINGER_API_DETAIL } from '../../api/url';
import http from '../../api/http'
export default {
    namespaced: true,
    state: {
        singerImage:'',
        hotSongs:[],
        loading:false

    },
    mutations: {
        setLoading(state,payload){
            state.loading  = payload;
        },
        setSongDetail(state,payload){
            state.singerImage = payload.picUrl;
            state.hotSongs = payload.hotSongs;
        }

    },
    actions: {
        async requestDetailData(context, payload) {
            context.commit('setLoading',true)
            const { data } = await http.get(SINGER_API_DETAIL, payload);
       
            const hotSongs = data.hotSongs.map((item) => ({
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
            }));
            const picUrl = data.artist.picUrl;
            // console.log(picUrl);
            context.commit('setSongDetail',{picUrl,hotSongs});
            
            context.commit('setLoading',false);
           
            

        }

    }
}
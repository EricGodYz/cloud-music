import {RANK_LIST_API} from '../../api/url';

import http from '../../api/http';

export default{

 
    namespaced: true,
    // 处理数据
    state:{
        // 数据的存储
        // 官方榜
        topList:[],
        // 全球榜
        list:[],
        // loading的标值
        loading:false

    },

    // 函数同步
    mutations:{
        // 进行数据的赋值
        setRankData(state,payload){
            // 数据的赋值
            state.topList = payload.toplist;
            // 列表数据的赋值
            state.list = payload.list;
        },
        setLoading(state,payload){
            state.loading = payload;
        }
    },


    // 异步操作
    actions:{
        async requestRankList(context){
            context.commit('setLoading',true);
            let {data:{list}} = await http.get(RANK_LIST_API);
            let toplist = list.splice(0,4);
            // 官方榜的数据
            toplist = toplist.map((item)=>({
                id:item.id,
                coverImgUrl:item.coverImgUrl,
                update:item.updateFrequency,
                tracks:item.tracks
            }));
            console.log(toplist);
            // 全球榜的数据
            list=list.map((item)=>({
                id:item.id,
                coverImgUrl:item.coverImgUrl,
                update:item.updateFrequency,
            }));
            console.log(list);
            context.commit("setRankData",{toplist,list});
            context.commit('setLoading',false);

        }
    }

}
// 进行常用的url声明
// 自己需要伪造一个公用的api接口
export const HOST = 'http://localhost:8080/api';

// 说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
export const BANNER_API = '/banner';

// 调用此接口 , 可获取推荐歌单
export const RECOMMEND_LIST_API = '/personalized';


// 说明 : 调用此接口,可获取歌手分类列表

export const SINGERS_LIST_API = '/artist/list';


// 音乐排行榜
export const RANK_LIST_API = '/toplist/detail';


// song/detail 接口获取所有歌曲的详情
export const SONG_LIST_API_Detail = '/playlist/detail';

// 调用此接口 , 传入歌手 id, 可获得歌手部分信息和热门歌曲
export const SINGER_API_DETAIL = '/artists';
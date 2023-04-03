import { apiSlice } from "../api/apiSliec";

const relatedVideosApi = apiSlice.injectEndpoints({
    endpoints:(builders)=>({
        getReletedVideos:builders.query({
            query:({tags,id})=> {
                // ?tags_like=javascript&id_ne=1&_limit=1
                const limit = 3 
                let queryString = tags.length > 0 ? tags.map(tag => `tags_like=${tag}`).join("&")+`&id_ne=${id}&_limit=${limit}`:`id_ne=${id}&_limit=${limit}`
                return `/videos?${queryString}`
            }
        }),
        
    })
})

export const {useGetReletedVideosQuery} = relatedVideosApi
import { apiSlice } from "../api/apiSliec";

const videosQueryApi = apiSlice.injectEndpoints({
    endpoints:(builders)=>({
        getVideos:builders.query({
            query:({tags,search})=> {
                let queryString = ''

                if(tags.length > 0){
                    queryString += tags.map(tag => `tags_like=${tag}`).join("&")
                }
                if(search !== ''){
                    queryString+= `&q=${search}`
                }
                return `/videos/?${queryString}`
            }
        }),
        
        getSingleVideo:builders.query({
            query:(id)=> `/videos/${id}`
        })
    })
})

export const {useGetVideosQuery,useGetSingleVideoQuery} = videosQueryApi
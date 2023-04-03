import { apiSlice } from "../api/apiSliec";

const tagsApi = apiSlice.injectEndpoints({
    endpoints:(builders)=>({
        getTags:builders.query({
            query:()=> '/tags'
        })
    })
})

export const {useGetTagsQuery} = tagsApi
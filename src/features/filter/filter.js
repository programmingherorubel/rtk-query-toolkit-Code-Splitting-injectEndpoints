const {createSlice} = require('@reduxjs/toolkit')

const initialState = {
    tags:[],
    search:''
}

const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        tagSelected: (state,action)=>{
            state.tags.push(action.payload)
        },
        tagRemove: (state,action)=>{
            const removeTag = state.tags.indexOf(action.payload)
            if(removeTag !== -1){
                state.tags.splice(removeTag,1)
            }
        },
        searched:(state,action)=>{
            state.search= action.payload
        }
    }
})

export default filterSlice.reducer 
export const {tagRemove,searched,tagSelected}= filterSlice.actions
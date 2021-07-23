import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../../app/store'


interface PostsList {
    posts: Array<Post>
}

interface Post {
    id:any,
    title:string,
    content:string
}

const initialState : PostsList = {
    posts: [
        {
        id:1,
        title:"Title 1",
        content:"Welcome!"
        } as Post,
        {
            id:2,
            title:"Story 2",
            content:"Nice day today"
        } as Post
    ]
}
    
const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded(state,action: PayloadAction<Post>) {
            state.posts.push(action.payload)
        }
    }
})
export const {postAdded} = postsSlice.actions

export default postsSlice.reducer
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {sub} from 'date-fns'

interface PostsList {
    posts: Array<Post>
}



interface Post {
    id:any,
    date:any,
    title:string,
    content:string,
    reactions: Object,
}

const initialState : PostsList = {
    posts: [
        {
        id:1,
        title:"Title 1",
        content:"Welcome!",
        reactions: {thumbsUp: 0, hooray: 0,heart:0,rocket:0,eyes:0},
        date: sub(new Date(), {minutes: 10}).toISOString()
        } as Post,
        {
            id:2,
            title:"Story 2",
            content:"Nice day today",
            reactions: {thumbsUp: 0, hooray: 0,heart:0,rocket:0,eyes:0},
            date: sub(new Date(), {minutes: 5}).toISOString()
        } as Post
    ]
}
    
const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded(state,action: PayloadAction<Post>) {
            state.posts.push(action.payload)
        },
        postUpdated(state,action:PayloadAction<Post>){
            const {id,title,content} = action.payload
            const existingPost = state.posts.find(post => post.id === id)
            if(existingPost){
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
})

export const {postAdded,postUpdated} = postsSlice.actions

export default postsSlice.reducer
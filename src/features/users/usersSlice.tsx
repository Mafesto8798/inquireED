import { createSlice,PayloadAction } from '@reduxjs/toolkit'

interface UserList {
  users: Array<User>
}

interface User {
  id: string,
  name:string
}

const initialState: UserList = {
  users:[
    { id: '0', name: 'Tianna Jenkins' } as User,
    { id: '1', name: 'Kevin Grant' } as User,
    { id: '2', name: 'Madison Price' } as User
  ]
}
 

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer
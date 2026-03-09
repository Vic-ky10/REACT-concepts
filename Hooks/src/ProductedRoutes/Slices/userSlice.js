import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        removeUser: (state) => {
            state.user = null
        }
    }
})

// export actions
export const { setUser, removeUser } = userSlice.actions

// export reducer
export default userSlice.reducer
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const API_URL = "https://6a5a2e89ad8332e75f02386c.mockapi.io/users";

export const displayUsers = createAsyncThunk("displayUsers", async () => {
    const resp = await axios.get(API_URL)    
    return resp.data    
})

export const addUsers = createAsyncThunk("addUsers", async (data) => {
    const resp = await axios.post(API_URL, data)
    return resp.data
})

export const deleteUsers = createAsyncThunk("deleteUsers", async (id) => {
    const resp = await axios.delete(`${API_URL}/${id}`)
    return resp.data
})

export const updateUsers = createAsyncThunk("updateUsers", async (data) => {
    const resp = await axios.put(`${API_URL}/${data.id}`, data)
    return resp.data
})

const pendingHandler = (state) => {
    state.loading = true
    state.error = ""
}
const usersSlice = createSlice({
    name: 'crud',
    initialState: {
        data: [],
        loading: false,
        error: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //===================FetchStudent============================
            .addCase(displayUsers.pending, pendingHandler)

            .addCase(displayUsers.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })

            .addCase(displayUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            //===================AddStudent============================
            .addCase(addUsers.pending, pendingHandler)

            .addCase(addUsers.fulfilled, (state, action) => {
                state.loading = false
                state.data = [...state.data, action.payload]
            })

            .addCase(addUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            //===================DelStudent============================
            .addCase(deleteUsers.pending, pendingHandler)

            .addCase(deleteUsers.fulfilled, (state, action) => {
                state.loading = false
                state.data = state.data.filter(ele => ele.id != action.payload.id)
            })

            .addCase(deleteUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            //===================UpdateStudent============================
            .addCase(updateUsers.pending, pendingHandler)

            .addCase(updateUsers.fulfilled, (state, action) => {
                state.loading = false
                const index = state.data.findIndex(ele => ele.id == action.payload.id)
                if (index >= 0) {
                    state.data[index] = action.payload
                }
            })

            .addCase(updateUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

    }
})

export const { } = usersSlice.actions
export default usersSlice.reducer
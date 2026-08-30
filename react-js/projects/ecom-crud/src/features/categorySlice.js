import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const API_URL = import.meta.env.VITE_API_URL;
import axios from 'axios'
const CATEGORY_API_URL = API_URL + "/api/categories";

export const listCategory = createAsyncThunk("listCategory", async () => {
    const resp = await axios.get(CATEGORY_API_URL)    
    return resp.data    
})

export const addCategory = createAsyncThunk("addCategory", async (data) => {
    const resp = await axios.post(CATEGORY_API_URL, data)
    return resp.data
})

export const deleteCategory = createAsyncThunk("deleteCategory", async (id) => {
    const resp = await axios.delete(`${CATEGORY_API_URL}/${id}`)
    return resp.data
})

export const updateCategory = createAsyncThunk("updateCategory", async (data) => {
    const resp = await axios.put(`${CATEGORY_API_URL}/${data.id}`, data)
    return resp.data
})

const pendingHandler = (state) => {
    state.loading = true
    state.error = ""
}
const CategorySlice = createSlice({
    name: 'Category',
    initialState: {
        data: [],
        loading: false,
        error: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //===================listCategory============================
            .addCase(listCategory.pending, pendingHandler)

            .addCase(listCategory.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data.categories
            })

            .addCase(listCategory.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            //===================addCategory============================
            .addCase(addCategory.pending, pendingHandler)

            .addCase(addCategory.fulfilled, (state, action) => {
                state.loading = false
                state.data = [...state.data, action.payload.data.categories]
            })

            .addCase(addCategory.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            //===================deleteCategory============================
            .addCase(deleteCategory.pending, pendingHandler)

            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.loading = false
                state.data = state.data.filter(ele => ele.id != action.payload.data.categories.id)
            })

            .addCase(deleteCategory.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            //===================updateCategory============================
            .addCase(updateCategory.pending, pendingHandler)

            .addCase(updateCategory.fulfilled, (state, action) => {
                state.loading = false
                const index = state.data.findIndex(ele => ele.id == action.payload.data.categories.id)
                if (index >= 0) {
                    state.data[index] = action.payload.data.categories
                }
            })

            .addCase(updateCategory.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

    }
})

export const { } = CategorySlice.actions
export default CategorySlice.reducer
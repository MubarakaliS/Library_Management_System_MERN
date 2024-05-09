import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    adminList: [],
    isLoading: false,
    error: ''
}
const BASE_URI = 'http://localhost:4000/api/admin'
//GET
export const getAdminFromServer = createAsyncThunk(
    "admin/getAdminFromServer",
    async (_, { rejectWithValue }) => {
        const response = await fetch(BASE_URI)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({ error: 'No Admin Found' })
        }
    }
)


const adminSlice = createSlice({
    name: 'adminSlice',
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            //getBookFromServer
            .addCase(getAdminFromServer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAdminFromServer.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.adminList = action.payload
            })
            .addCase(getAdminFromServer.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.error
                state.adminList = []
            })
        }
    }
);

// export const { addBookToList, removeBookFromList, updateBookInList, addSelectedBook, updateSearchISBN,updateSearchBookTitle } = bookSlice.actions

export default adminSlice.reducer
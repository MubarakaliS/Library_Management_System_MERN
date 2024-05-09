import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState = {
    issueBookList: [],
    selectedIssueBook: {},
    isLoading: false,
    error: '',
    // searchISBN: '',
    // searchBookTitle:'',
}
const BASE_URI = 'http://localhost:4000/api/issueBook'
//GET
export const getIssueBookFromServer = createAsyncThunk(
    "issueBooks/getIssueBookFromServer",
    async (_, { rejectWithValue }) => {
        const response = await fetch(BASE_URI)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({ error: 'No Issue Books Found' })
        }
    }
)

// POST
export const addIssueBookToServer = createAsyncThunk(
    "issueBooks/addIssueBookToServer",
    async (issueBooks, { rejectWithValue }) => {
        const options = {
            method: 'POST',
            body: JSON.stringify(issueBooks),
            headers: {
                'Content-type': 'application/json;charset=UTF-8'
            }
        }
        const response = await fetch(BASE_URI, options)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({ error: `Issue Book Not Added` })
        }
    }
)

// export const addIssueBookToServer = createAsyncThunk(
//     "issueBooks/addIssueBookToServer",
//     async (issueBooks, { rejectWithValue }) => {
//         const options = {
//             method: 'POST',
//             body: JSON.stringify(issueBooks),
//             headers: {
//                 'Content-type': 'application/json;charset=UTF-8'
//             }
//         }
//         try {
//             const response = await fetch(BASE_URI, options);

//             if (response.ok) {
//                 const jsonResponse = await response.json();
//                 return jsonResponse;
//             } else {
//                 throw new Error('Issue Book Not Added');
//             }
//         } catch (error) {
//             // Handle duplicate key error
//             if (error.message.includes('E11000 duplicate key')) {
//                 return rejectWithValue({ error: 'Duplicate ISBN. Issue Book Not Added.' });
//             } else {
//                 return rejectWithValue({ error: error.message });
//             }
//         }
//     }
// )

//PATCH
export const updateIssueBookInServer = createAsyncThunk(
    "issueBooks/updateIssueBookInServer",
    async (issueBook, { rejectWithValue }) => {
        const options = {
            method: 'PATCH',
            body: JSON.stringify(issueBook),
            headers: {
                'Content-type': 'application/json;charset=UTF-8'
            }
        };

        try {
            const response = await fetch(`${BASE_URI}/${issueBook.id}`, options);

            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            } else {
                throw new Error(`Book Not Updated ${issueBook.id}`);
            }
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);

//DELETE

export const deleteIssueBookFromServer = createAsyncThunk(
    "issueBooks/deleteIssueBookFromServer",
    async (issueBook, { rejectWithValue }) => {
        const options = {
            method: 'DELETE'
        };

        try {
            const response = await fetch(`${BASE_URI}/${issueBook._id}`, options);

            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            } else {
                throw new Error(`Book Not Deleted ${issueBook._id}`);
            }
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);


const issueBookSlice = createSlice({
    name: 'issueBookSlice',
    initialState: initialState,
    reducers: {
        // //Synchronousoperations
        removeIssueBookFromList: (state, action) => {
            state.issueBookList = state.issueBookList.filter((book) => book._id !== action.payload._id)
        },
        addSelectedIssueBook: (state, action) => {
            state.selectedIssueBook = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            //getBookFromServer
            .addCase(getIssueBookFromServer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getIssueBookFromServer.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.issueBookList = action.payload
            })
            .addCase(getIssueBookFromServer.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.error
                state.issueBookList = []
            })
             // addIssueBookToServer
             .addCase(addIssueBookToServer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addIssueBookToServer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.issueBookList.push(action.payload);
            })
            .addCase(addIssueBookToServer.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
            //UPDATE
            .addCase(updateIssueBookInServer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateIssueBookInServer.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.issueBookList = state.issueBookList.map((book) => book._id === action.payload._id ? action.payload : book);
            })
            .addCase(updateIssueBookInServer.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.error
            })
            //deleteBookFromServer
            .addCase(deleteIssueBookFromServer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteIssueBookFromServer.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
            })
            .addCase(deleteIssueBookFromServer.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.error
            })

           
    }

})

export const {removeIssueBookFromList,addSelectedIssueBook} = issueBookSlice.actions

export default issueBookSlice.reducer
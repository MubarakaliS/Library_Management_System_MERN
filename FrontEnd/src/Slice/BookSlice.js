import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookList: [],
    selectedBook: {},
    isLoading: false,
    error: '',
    searchISBN: '',
    searchBookTitle:'',
}
const BASE_URI = 'http://localhost:4000/api/books'
//GET
export const getBookFromServer = createAsyncThunk(
    "books/getBookFromServer",
    async (_, { rejectWithValue }) => {
        const response = await fetch(BASE_URI)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({ error: 'No Books Found' })
        }
    }
)


//POST
export const addBookToServer = createAsyncThunk(
    "books/addBookToServer",
    async (formData, { rejectWithValue }) => {
      try {
        const response = await fetch(BASE_URI, {
          method: 'POST',
          body: formData,
          // No need to set Content-type, as it's automatically set for FormData
        });
  
        if (response.ok) {
          const jsonResponse = await response.json();
          return jsonResponse;
        } else {
          throw new Error('Book Not Added');
        }
      } catch (error) {
        console.error('Error adding book:', error.message);
        return rejectWithValue({ error: 'Book Not Added' });
      }
    }
  );
  

//PATCH
export const updateBookInServer = createAsyncThunk(
    "books/updateBookInServer",
    async (book, { rejectWithValue }) => {
        const options = {
            method: 'PATCH',
            body: JSON.stringify(book),
            headers: {
                'Content-type': 'application/json;charset=UTF-8'
            }
        };

        try {
            const response = await fetch(`${BASE_URI}/${book.id}`, options);

            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            } else {
                throw new Error(`Book Not Updated ${book.id}`);
            }
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);

//DELETE

export const deleteBookFromServer = createAsyncThunk(
    "books/deleteBookFromServer",
    async (book, { rejectWithValue }) => {
        const options = {
            method: 'DELETE'
        };

        try {
            const response = await fetch(`${BASE_URI}/${book._id}`, options);

            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            } else {
                throw new Error(`Book Not Deleted ${book._id}`);
            }
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);

//Search
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Create an async thunk for fetching a single book by ISBN
export const fetchBookByISBN = createAsyncThunk(
    'books/fetchBookByISBN',
    async (book, { rejectWithValue }) => {
        const response = await fetch(`${BASE_URI}/isbn/${book}`)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({ error: 'No Books (ISBN) Found' })
        }
    }
);

export const fetchBookByTitle = createAsyncThunk(
  'books/fetchBookByTitle',
  async (bookTitle, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URI}/bookTitle/${bookTitle}`);
      
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      } else {
        const errorMessage = await response.text(); // Get the error message from the response
        return rejectWithValue({ status: response.status, error: errorMessage || 'Failed to fetch books by title' });
      }
    } catch (error) {
      return rejectWithValue({ error: 'An error occurred while fetching books by title' });
    }
  }
);



export const updateIssueBookInServer = createAsyncThunk(
    'books/updateIssueBookInServer',
    async (updatedBookList, { rejectWithValue }) => {
        const options = {
            method: 'PATCH',
            body: JSON.stringify(updatedBookList),
            headers: {
                'Content-type': 'application/json;charset=UTF-8'
            }
        };

        try {
            const response = await fetch(`${BASE_URI}/update-books/${updatedBookList._id}`, options);

            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            } else {
                throw new Error('Books Not Updated');
            }
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);


const bookSlice = createSlice({
    name: 'bookSlice',
    initialState: initialState,
    reducers: {
        removeBookFromList: (state, action) => {
            state.bookList = state.bookList.filter((book) => book._id !== action.payload._id)
        },

        addSelectedBook: (state, action) => {
            state.selectedBook = action.payload
        },
        updateSearchISBN: (state, action) => {
            state.searchISBN = action.payload;
        },
        updateSearchBookTitle: (state, action) => {
            state.searchBookTitle = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            //getBookFromServer
            .addCase(getBookFromServer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBookFromServer.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.bookList = action.payload
            })
            .addCase(getBookFromServer.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.error
                state.bookList = []
            })
            .addCase(addBookToServer.pending, (state) => {
                state.isLoading = true;
                state.error = '';
              })
              .addCase(addBookToServer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.bookList.push(action.payload);
              })
              .addCase(addBookToServer.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ? action.payload.error : 'Book Not Added';
              })
            //updateBookInServer
            .addCase(updateBookInServer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateBookInServer.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.bookList = state.bookList.map((book) => book._id === action.payload._id ? action.payload : book);
            })
            .addCase(updateBookInServer.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.error
            })
            //deleteBookFromServer
            .addCase(deleteBookFromServer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteBookFromServer.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
            })
            .addCase(deleteBookFromServer.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.error
            })

            //Search 
            .addCase(fetchBookByISBN.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchBookByISBN.fulfilled, (state, action) => {
                state.isLoading = false;
                state.bookList = action.payload;
            })
            .addCase(fetchBookByISBN.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            //Search 
            .addCase(fetchBookByTitle.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchBookByTitle.fulfilled, (state, action) => {
                state.isLoading = false;
                state.bookList = action.payload;
            })
            .addCase(fetchBookByTitle.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            //updateBookInServer
            .addCase(updateIssueBookInServer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateIssueBookInServer.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.bookList = state.bookList.map((book) => book._id === action.payload._id ? action.payload : book);
            })
            .addCase(updateIssueBookInServer.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.error
            })
           
    }

})

export const { addBookToList, removeBookFromList, updateBookInList, addSelectedBook, updateSearchISBN,updateSearchBookTitle } = bookSlice.actions

export default bookSlice.reducer
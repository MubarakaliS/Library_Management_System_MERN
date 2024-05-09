import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    userList: [],
    selectedUser: {},
    isLoading: false,
    error: ''
}
const BASE_URI = 'https://library-management-system-mern-krp1.onrender.com/api/users'
//GET
export const getUserFromServer = createAsyncThunk(
    "users/getUserFromServer",
    async (_, { rejectWithValue }) => {
        const response = await fetch(BASE_URI)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({ error: 'No User Found' })
        }
    }
)

//POST

export const addUserToServer = createAsyncThunk(
    "users/addUserToServer",
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
          throw new Error('User Not Added');
        }
      } catch (error) {
        console.error('Error adding user:', error.message);
        return rejectWithValue({ error: 'User Not Added' });
      }
    }
  );



//PATCH
export const updateUserInServer = createAsyncThunk(
    "users/updateBookInServer",
    async (users, { rejectWithValue }) => {
        const options = {
            method: 'PATCH',
            body: JSON.stringify(users),
            headers: {
                'Content-type': 'application/json;charset=UTF-8'
            }
        };

        try {
            const response = await fetch(`${BASE_URI}/${users.id}`, options);

            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            } else {
                throw new Error(`Book Not Updated ${users.id}`);
            }
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);

//DELETE

export const deleteUserFromServer = createAsyncThunk(
    "users/deleteUserFromServer",
    async (users, { rejectWithValue }) => {
        const options = {
            method: 'DELETE'
        };

        try {
            const response = await fetch(`${BASE_URI}/${users._id}`, options);

            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            } else {
                throw new Error(`Book Not Deleted ${users._id}`);
            }
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        //Synchronousoperations
        // addBookToList: (state, action) => {
        //     const _id = Math.random() * 100
        //     let book = { ...action.payload, _id }
        //     state.bookList.push(book)
        // },
        removeUserFromList: (state, action) => {
            state.userList = state.userList.filter((user) => user._id !== action.payload._id)
        },
        // updateBookInList: (state, action) => {
        //     state.bookList = state.bookList.map((book) => book._id === action.payload._id ? action.payload : book);
        // },

        addSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            //getUserFromServer
            .addCase(getUserFromServer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUserFromServer.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.userList = action.payload
            })
            .addCase(getUserFromServer.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.error
                state.userList = []
            })
            //addUserToServer
            .addCase(addUserToServer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addUserToServer.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.userList.push(action.payload)
            })
            .addCase(addUserToServer.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.error
            })
            //updateUserInServer
            .addCase(updateUserInServer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateUserInServer.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.userList = state.userList.map((user) =>user._id === action.payload._id ? action.payload : user);
            })
            .addCase(updateUserInServer.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.error
            })
            //deleteUserFromServer
            .addCase(deleteUserFromServer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteUserFromServer.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
            })
            .addCase(deleteUserFromServer.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.error
            })

    }

})

export const { addUserToList, removeUserFromList, updateUserInList, addSelectedUser } = userSlice.actions

export default userSlice.reducer
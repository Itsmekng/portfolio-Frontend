import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FailedAlert, SuccessAlert } from "../../Alert";
import { Url } from "../../Alert";

const token = localStorage.getItem('token');


// Create async action for user creation
export const CreateUser = createAsyncThunk(
  "CreateUser",
  async (data, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value, value.name); // Append file with its name
        } else {
          formData.append(key, value);
        }
      });

      const response = await axios.post(
        `${Url}/portfolio/resister`,formData,
      );
      localStorage.setItem('token', JSON.stringify(response.data.token));
      return  (response ,SuccessAlert("User create Successfully") );
    } catch (error) {
    
      return  rejectWithValue(error , FailedAlert("Resister Failed , Try Again "));
    }
  }
);

// Read action to fetch all users
export const showUser = createAsyncThunk(
  "showUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${Url}/portfolio/AllUsers`, 
        {
          headers: {
            Authorization: localStorage.getItem('token'), // Add your authorization token here if needed
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// delete Users
export const DeleteUser = createAsyncThunk(
  "DeleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${Url}/portfolio/DeleteUser/${id}`,
        {},
        {
          headers: {
            Authorization: token, // Include token in headers
          },
        }
      );
SuccessAlert("delete user successfully" )
      return response.data; // Return response data
    } catch (error) {
      return rejectWithValue(error.message); // Return error message
    }
  }
);


export const LoginUser = createAsyncThunk(
  "LoginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${Url}/portfolio/LoginUser` ,data
      );

      localStorage.setItem('token', JSON.stringify(response.data.token));
      return  response.data;
    } catch (error) {
      FailedAlert("Login Failed , Try again later")
      return rejectWithValue(error.response.data)   
    }
  }
);




// export const Logout = createAsyncThunk(
//   "Logout",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `${Url}/portfolio/LogoutUser`, 
//         {
//           headers: {
//             Authorization: localStorage.getItem('token'), // Add your authorization token here if needed
//           },
//         }
//       );
//       localStorage.setItem('token', "")
//       SuccessAlert("Successfully Logout")
//       return response.data;
//     } catch (error) {
//       FailedAlert("Some Error Occure , try again later")
//       return rejectWithValue(error.response.data);
//     }
//   }
// );


export const LogedUser = createAsyncThunk(
  "LogedUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${Url}/portfolio/GetUserDetails`, 
        {
          headers: {
            Authorization: localStorage.getItem('token'), // Add your authorization token here if needed
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const Newletter = createAsyncThunk(
  "Newletter",
  async (email, { rejectWithValue }) => {
    try {
      

      const response = await axios.post(
        `${Url}/portfolio/Newletter/${email}`,
        email,
        {
          withCredentials: true,
          headers: {
            Authorization: token, // Include token in headers
          },
        }
      );
SuccessAlert("Request Added")
      return response.data; // Return response data
    } catch (error) {
      FailedAlert("please enter your email !!!")
      
      return rejectWithValue(error.message); // Return error message
    }
  }
);




// Define the user slice
export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(CreateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(CreateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(DeleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(DeleteUser.fulfilled, (state, action) => {
        state.loading = false;
       const {id} = action.payload;
       if (id) {
        state.users = state.users.filter((ele) => ele.id !== id)
       }
      })
      .addCase(DeleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // .addCase(Logout.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(Logout.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.users = action.payload;
      // })
      // .addCase(Logout.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload;
      
      // })

      .addCase(LogedUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(LogedUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(LogedUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(Newletter.pending, (state) => {
        state.loading = true;
      })
      .addCase(Newletter.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(Newletter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  },
});

// Export the reducer and actions
export const { xxx } = userSlice.actions;
export default userSlice.reducer;

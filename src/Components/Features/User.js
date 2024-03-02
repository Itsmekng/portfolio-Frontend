import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FailedAlert, SuccessAlert } from "../../Alert";


// Create async action for user creation
export const createUser = createAsyncThunk(
  "createUser",
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
        "https://portfolio-backend-pt9r.onrender.com/portfolio/resister",
        formData,
        {
          withCredentials: true,
          headers: {
            // Add any auth token here
            authorization: "your token comes here",
            'Content-Type': 'multipart/form-data' // Ensure proper content type for file upload
          },
        }
      );
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
        "https://portfolio-backend-pt9r.onrender.com/portfolio/AllUsers", 
        {

          withCredentials: "true",
          headers: {
            Authorization: "", // Add your authorization token here if needed
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
      const response = await axios.delete(
        `https://portfolio-backend-pt9r.onrender.com/portfolio/DeleteUser/${id}`,{

        withCredentials: true,
        headers:{
          authorization: "Your Token Here"
        }
        }
      );
      return response;
    } catch (error) {
      return rejectWithValue(error , "errorrrrr !!!");
    }
  }
);


export const LoginUser = createAsyncThunk(
  "LoginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://portfolio-backend-pt9r.onrender.com/portfolio/LoginUser", 
        data,
        {
          withCredentials: "true",
          headers: {
            // Add any auth token here
            authorization: "",
          
          },
        }
      );
      SuccessAlert("Successfully Login")
      return  response.data
    } catch (error) {
      FailedAlert("Login Failed , Try again later")
      return rejectWithValue(error.response.data)   
    }
  }
);



export const Logout = createAsyncThunk(
  "Logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://portfolio-backend-pt9r.onrender.com/portfolio/LogoutUser", 
        {

          withCredentials: "true",
          headers: {
            Authorization: "", // Add your authorization token here if needed
          },
        }
      );
      SuccessAlert("Successfully Logout")
      return response.data;
    } catch (error) {
      FailedAlert("Some Error Occure , try again later")
      return rejectWithValue(error.response.data);
    }
  }
);


export const LogedUser = createAsyncThunk(
  "LogedUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://portfolio-backend-pt9r.onrender.com/portfolio/GetUserDetails", 
        {

          withCredentials: "true",
          headers: {
            Authorization: "", // Add your authorization token here if needed
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
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
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
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

      .addCase(Logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(Logout.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(Logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      
      })

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
      });

  },
});

// Export the reducer and actions
export const { xxx } = userSlice.actions;
export default userSlice.reducer;

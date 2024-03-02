import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FailedAlert, SuccessAlert } from "../../Alert";

// Define initial state
const initialState = {
  projectList: [], // Renamed 'Project' to 'projectList' for clarity
  loading: false,
  error: null,
};

// Define the async thunk for sending a message
export const sendMessage = createAsyncThunk(
  "contact/sendMessage",
  async (messageData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/portfolio/CreateMessage",
        messageData
      );
      return ( response.data , SuccessAlert("Message Successfully Send") )
    } catch (error) {
      return ( thunkAPI.rejectWithValue(error) , FailedAlert(error) )
    }
  }
);

export const ShowMessage = createAsyncThunk(
  "data/showMessage",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8000/portfolio/ReadMessage" , {

      withCredentials: "true",
      headers:{
Authorization: "Token Here"
      },

      });
      if (response.status !== 200) {
        throw new Error("Failed to fetch data");
      }
      const data = response.data;
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async (projectId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:8000/portfolio/DeleteMessage/${projectId}` , { withCredentials: "true"});
      if (response.status !== 200) {
        throw new Error('Failed to delete project');
      }
      return  projectId; // Return the ID of the deleted project
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);





// Define the contact slice
const contactSlice = createSlice({
  name: "Message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.projectList = action.payload; // Update projectList instead of Message
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(ShowMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(ShowMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.projectList = action.payload; // Update projectList instead of Message
      })
      .addCase(ShowMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteProject.pending, (state) => {
        state.deleting = true;
        state.error = null; // Reset error state
      })
      .addCase(deleteProject.fulfilled, (state) => {
        state.deleting = false;
        // Handle deletion from state if needed
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.deleting = false;
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;

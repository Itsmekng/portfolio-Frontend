import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Url } from "../../Alert";

const token = localStorage.getItem('token');

export const CreateProjects = createAsyncThunk(
  "CreateProject",
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
        `${Url}/portfolio/CreateProject`,
        formData,
        {withCredentials: "true",
          headers: {
            // Add any auth token here
            authorization: token,
            "Content-Type": "multipart/form-data", // Ensure proper content type for file upload
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const ShowProject = createAsyncThunk(
  "ShowProject",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${Url}/portfolio/AllProject`
      );
    
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Read action to fetch all users
export const likeProject = createAsyncThunk(
  'likeProject',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${Url}/portfolio/LikeAndDislike/${id}`, 
        {},
        {
          withCredentials: true, // Allow cookies to be sent
          headers: {
            Authorization: token, // Replace 'YOUR_AUTH_TOKEN' with the actual token value
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteProject = createAsyncThunk(
  'deleteProject',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${Url}/portfolio/DeleteProject/${id}`, 
        {},
        {
         withCredentials: true,
          headers: {
            Authorization: token, // Replace 'YOUR_AUTH_TOKEN' with the actual token value
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);








export const projectSlice = createSlice({
  name: "Project",
  initialState: {
    projectList: [], // Renamed 'Project' to 'projectList' for clarity
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(CreateProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projectList = action.payload;
      })
      .addCase(CreateProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(ShowProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(ShowProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projectList = action.payload;
      })
      .addCase(ShowProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(likeProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(likeProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projectList = action.payload;
      })
      .addCase(likeProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projectList = action.payload;
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default projectSlice.reducer;

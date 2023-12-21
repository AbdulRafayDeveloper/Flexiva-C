import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
const base_url= process.env.REACT_APP_BASE_URL;
console.log(base_url);

export const registerUser = createAsyncThunk("registerUser", async (user, { rejectWithValue }) => {
  try {
    
    console.log("in register user", user);
    const response = await fetch(`http://127.0.0.1:3500/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    body: JSON.stringify(user)
    });

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    } else {
      return rejectWithValue(responseData);
    }
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const loginUser = createAsyncThunk("loginUser", async ({email, password}, { rejectWithValue }) => {
  try {
    const response = await fetch(`${base_url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    body: JSON.stringify({ email,password })
    });

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    } else {
      return rejectWithValue(responseData);
    }
  } catch (error) {
    return rejectWithValue(error.response);
  }
});


const initialState = {
  Users: [],
  data:{},
  loading: false,
  error: null,
  auth_token: null
};

const userSlicer = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    setUserField: (state, action) => {
      // Merge action payload into user data
      state.data = { ...state.data, ...action.payload };
      console.log(state.data);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;  // Corrected the state property name
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.auth_token=action.payload;
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Form Submitted Successfully!'
        });
        console.log(state.auth_token);
        // You can handle the registration success if needed
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `${state.error}`
        });
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;  // Corrected the state property name
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.auth_token=action.payload;
        console.log(state.auth_token);
        // You can handle the registration success if needed
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {
    setUserField
  } = userSlicer.actions;
export default userSlicer.reducer;

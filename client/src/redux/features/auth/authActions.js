import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";

// LOGIN
export const userLogin = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await API.post("/auth/login", userData);

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        alert(res.data.message);
        window.location.replace("/");
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// REGISTER
export const userRegister = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await API.post("/auth/register", userData);

      if (res.data.success) {
        alert("User Registered Successfully");
        window.location.replace("/login");
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// CURRENT USER
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
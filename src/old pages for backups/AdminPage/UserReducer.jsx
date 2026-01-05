import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { petApi } from "../SearchPage/petApiService";

const API_URL = "https://66ccbaefa4dd3c8a71b8a15d.mockapi.io/user/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(API_URL);
  return response.json();
});

export const addUser = createAsyncThunk("users/addUser", async (newUser) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  return response.json();
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (updatedUser) => {
    const { id } = updatedUser;
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    return response.json();
  },
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async ({ id }) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return id;
  },
);

export const fetchUsersWithPets = createAsyncThunk(
  "users/fetchUsersWithPets",
  async (_, { dispatch }) => {
    const usersResponse = await dispatch(fetchUsers());
    const users = usersResponse.payload;

    const petsResponse = await dispatch(petApi.endpoints.search.initiate({}));
    const pets = petsResponse.data;

    const petsMap = pets.reduce((map, pet) => {
      map[pet.id] = pet;
      return map;
    }, {});

    const usersWithPets = users.map((user) => ({
      ...user,
      pet: user.petId ? petsMap[user.petId] : null,
    }));

    return usersWithPets;
  },
);

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersWithPets.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        return state.filter((user) => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;

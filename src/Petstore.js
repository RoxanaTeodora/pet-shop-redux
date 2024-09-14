import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "./2.pages/SearchPage/adoptedPetSlice";
import searchParams from "./2.pages/SearchPage/searchParamsSlice";
import { petApi } from "./2.pages/SearchPage/petApiService";
import userReducer from "./2.pages/AdminPage/userReducer";

const storePet = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
    [petApi.reducerPath]: petApi.reducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});

export default storePet;

import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "./2.pages/SearchPage/adoptedPetSlice";
import searchParams from "./2.pages/SearchPage/searchParamsSlice";
import { petApi } from "./2.pages/SearchPage/petApiService";
import UserReducer from "./2.pages/AdminPage/UserReducer";

const storePet = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
    [petApi.reducerPath]: petApi.reducer,
    users: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});

export default storePet;

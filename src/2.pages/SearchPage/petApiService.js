import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const petApi = createApi({
  reducerPath: "petApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getPet: builder.query({
      query: (id) => ({
        url: "/pets",
        params: { id },
      }),
      transformResponse: (response) => response.pets?.[0], // Extrage primul animal
    }),
    getBreeds: builder.query({
      query: (animal) => ({
        url: "/breeds",
        params: { animal },
      }),
      transformResponse: (response) => response.breeds,
    }),
    search: builder.query({
      query: ({ animal, location, breed }) => ({
        url: "/pets",
        params: { animal, location, breed },
      }),
      transformResponse: (response) => response.pets,
    }),
  }),
});

export const { useGetBreedsQuery, useGetPetQuery, useSearchQuery } = petApi;

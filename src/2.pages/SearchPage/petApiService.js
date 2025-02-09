import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const petApi = createApi({
  reducerPath: "petApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getPet: builder.query({
      query: (id) => `pets?id=${id}`, // Actualizat pentru a utiliza endpoint-ul corect
      transformResponse: (response) => response.pets[0], // Extrage primul animal din răspuns
    }),
    getBreeds: builder.query({
      query: (animal) => `breeds?animal=${animal}`,
      transformResponse: (response) => response.breeds,
    }),
    search: builder.query({
      query: ({ animal, location, breed }) => ({
        url: "pets",
        params: { animal, location, breed },
      }),
      transformResponse: (response) => response.pets,
    }),
  }),
});

export const { useGetBreedsQuery, useGetPetQuery, useSearchQuery } = petApi;

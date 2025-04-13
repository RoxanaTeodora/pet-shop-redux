import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const petApi = createApi({
  reducerPath: "petApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pets-v2.dev-apis.com" }),
  endpoints: (builder) => ({
    getPet: builder.query({
      query: (id) => `pets?id=${id}`,
      transformResponse: (response) => response.pets[0],
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

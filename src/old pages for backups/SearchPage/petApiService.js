import { createApi } from "@reduxjs/toolkit/query/react";
import { pets } from "./data";

export const petApi = createApi({
  reducerPath: "petApi",
  baseQuery: async () => ({ data: {} }), // fake baseQuery
  endpoints: (builder) => ({
    getPet: builder.query({
      queryFn: (id) => {
        const pet = pets.find((p) => p.id === Number(id));
        return pet
          ? { data: pet }
          : { error: { status: 404, data: "Pet not found" } };
      },
    }),

    search: builder.query({
      queryFn: ({ animal, location, breed }) => {
        let result = pets;

        if (animal) {
          result = result.filter((p) => p.animal === animal);
        }
        if (breed) {
          result = result.filter((p) => p.breed === breed);
        }
        if (location) {
          result = result.filter((p) =>
            `${p.city}, ${p.state}`
              .toLowerCase()
              .includes(location.toLowerCase()),
          );
        }

        return { data: result };
      },
    }),

    getBreeds: builder.query({
      queryFn: (animal) => {
        const breeds = [
          ...new Set(
            pets.filter((p) => p.animal === animal).map((p) => p.breed),
          ),
        ];
        return { data: breeds };
      },
    }),
  }),
});

export const { useGetPetQuery, useSearchQuery, useGetBreedsQuery } = petApi;

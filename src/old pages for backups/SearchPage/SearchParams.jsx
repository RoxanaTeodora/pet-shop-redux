import Results from "./Results";
import useBreedList from "./useBreedList";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { all } from "./searchParamsSlice";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
import { useSearchQuery } from "./petApiService";

const SearchParams = () => {
  const adoptedPet = useSelector((state) => state.adoptedPet.value);
  const searchParams = useSelector((state) => state.searchParams.value);
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const dispatch = useDispatch();

  let { data: pets } = useSearchQuery(searchParams);
  pets = pets ?? [];
  return (
    <div className="search-params">
      <form
        className="form-pet background-color-components"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          dispatch(all(obj));
        }}
      >
        {adoptedPet ? (
          <div className="adopted-pet-container">
            <div className="adopted-pet">
              <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
            </div>
            <h4 className="adopted-pet-text"> Your adopted pet</h4>
          </div>
        ) : null}

        <label htmlFor="location">
          Location
          <input
            id="location"
            name="location"
            placeholder="Location"
            className="form-pet-input"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            className="form-pet-input"
            id="animal"
            name="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            name="breed"
            className="form-pet-input"
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button className="search-btn">See the results</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

import Pet from "./Pet";
import PropTypes from "prop-types";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

Results.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      animal: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string),
      state: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Results;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "http://localhost:5000/api/pets/images";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

Pet.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string.isRequired,
};

export default Pet;

import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './breedcard.css';

const BreedCard = ({
  imageURL, name, origin, onClick,
}) => (
  <Col className="breed-card" onClick={onClick}>
    <div className="image-part">
      <img src={imageURL} alt="breed" />
      <BsFillArrowRightCircleFill />
    </div>
    <div className="text-part">
      <h3>{name}</h3>
      <p>{origin}</p>
    </div>
  </Col>
);

BreedCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BreedCard;

import { Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { fetchBreeds } from '../redux/breeds';
import BreedCard from '../components/BreedCard';
import doggy from '../images/doggy.png';
import './breeds.css';

const Breeds = () => {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state);

  useEffect(() => {
    if (!breeds.length) dispatch(fetchBreeds());
  }, [fetchBreeds]);

  return (
    <div id="breeds-page">
      <div className="headline">
        <img src={doggy} alt="Dog" />
        <p>&quot;Hi, Weclome &quot;</p>
      </div>
      <h1 className="divider">LIST OF DOG BREEDS</h1>
      {!breeds.length ? <ReactLoading type="spinningBubbles" className="loading-indicator" /> : (
        <Container fluid>
          <Row xs={2}>
            {breeds.map(({
              id,
              origin,
              name,
              image,
            }) => (
              <BreedCard
                key={id}
                origin={origin}
                name={name}
                imageURL={image && image.url ? image.url : 'https://www.prestashop.com/sites/default/files/wysiwyg/404_not_found.png'}
              />
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Breeds;

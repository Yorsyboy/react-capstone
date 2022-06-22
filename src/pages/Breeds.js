import { Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { fetchBreeds } from '../redux/breeds';
import { fetchCatFact } from '../redux/fact';
import BreedCard from '../components/BreedCard';
import cat from '../images/cat.png';
import './breeds.css';

const Breeds = () => {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.breeds);
  const fact = useSelector((state) => state.fact);

  useEffect(() => {
    if (fact === '') dispatch(fetchCatFact());
    if (!breeds.length) dispatch(fetchBreeds());
  }, [fetchBreeds]);

  return (
    <div id="breeds-page">
      <div className="headline">
        <img src={cat} alt="Dog" />
        <p>&quot;Hi, Weclome &quot;</p>
        <div>
          <p className="meow-fact">Meow Fact</p>
          <p>
            {fact === '' ? <ReactLoading type="cubes" /> : fact ?? 'We failed to get a fact for meow :('}
          </p>
        </div>
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

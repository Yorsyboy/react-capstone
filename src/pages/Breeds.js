import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { fetchBreeds } from '../redux/breeds';
import { fetchCatFact } from '../redux/fact';
import BreedCard from '../components/BreedCard';
import cat from '../images/cat.png';
import './breeds.css';

const Breeds = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.breeds);
  const fact = useSelector((state) => state.fact);

  useEffect(() => {
    if (fact === '') dispatch(fetchCatFact());
    if (!breeds.length) dispatch(fetchBreeds());
  }, [fetchBreeds]);

  return (
    <div id="breeds-page">
      <div className="first-head">
        <img src={cat} alt="cat" />
        <p className="welcome">
          &quot;Hi, Weclome &quot;
        </p>
        <div className="fact">
          <p className="meow-fact">Cat Fact:</p>
          {/* eslint-disable-next-line no-nested-ternary */}
          {fact === '' ? <ReactLoading type="cubes" /> : fact ? (
            <p>
              &quot;
              {fact}
              &quot;
            </p>
          )
            : <p>We failed to get a fact for meow :(</p>}
        </div>
      </div>
      <h1 className="list">LIST OF CAT BREEDS</h1>
      {/* eslint-disable-next-line no-nested-ternary */}
      {breeds ? !breeds.length ? <ReactLoading type="spinningBubbles" className="loading-indicator" /> : (
        <Container fluid>
          <Row xs={2} md={3} lg={4} xxl={6}>
            {breeds.map((breed) => (
              <BreedCard
                key={breed.id}
                origin={breed.origin}
                name={breed.name}
                imageURL={breed.image && breed.image.url ? breed.image.url : 'https://www.prestashop.com/sites/default/files/wysiwyg/404_not_found.png'}
                onClick={() => {
                  navigate('/details', { state: { breed } });
                }}
              />
            ))}
          </Row>
        </Container>
      ) : <p className="loading-indicator">We are unable to get breeds for now :(</p>}
    </div>
  );
};

export default Breeds;

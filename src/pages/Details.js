import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { Container, Row } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import Characteristic from '../components/Characteristic';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchCarousel, resetCarousel } from '../redux/carousel';
import './details.css';

const Details = () => {
  const { state } = useLocation();
  const { breed } = state;
  const dispatch = useDispatch();
  const carousel = useSelector((state) => state.carousel);

  useEffect(() => {
    dispatch(resetCarousel());
    dispatch(fetchCarousel({ id: breed.id }));
  }, []);

  return (
    <>
      <div id="details-page">
        <div className="headline">
          {carousel && carousel.length > 0 ? (
            <Carousel className="carousel" showArrows autoPlay swipeable axis="horizontal" showThumbs={false} showStatus={false} dynamicHeight={false} infiniteLoop>
              {carousel.map((image) => <img key={image} src={image} alt="" />)}
            </Carousel>
          ) : <ReactLoading type="spinningBubbles" className="loading-indicator" />}
        </div>
        <h1 className="details">
          DETAILED INFO OF &nbsp;
          { breed.name }
        </h1>
        <Container fluid>
          <Row xs={1}>
            <Characteristic characteristic="Adaptability" value={`${breed.adaptability}/5`} />
            <Characteristic characteristic="Affection Level" value={`${breed.affection_level}/5`} />
            <Characteristic characteristic="Child Friendly" value={`${breed.child_friendly}/5`} />
            <Characteristic characteristic="Description" value={`${breed.description}`} />
            <Characteristic characteristic="Dog Friendly" value={`${breed.dog_friendly}/5`} />
            <Characteristic characteristic="Energy Level" value={`${breed.energy_level}/5`} />
            <Characteristic characteristic="Grooming" value={`${breed.grooming}/5`} />
            <Characteristic characteristic="Hairless" value={`${breed.hairless}/5`} />
            <Characteristic characteristic="Health Issues" value={`${breed.health_issues}/5`} />
            <Characteristic characteristic="Hypoallergenic" value={`${breed.hypoallergenic}/5`} />
            <Characteristic characteristic="Indoor" value={`${breed.indoor}/5`} />
            <Characteristic characteristic="Intelligence" value={`${breed.intelligence}/5`} />
            <Characteristic characteristic="Lap" value={`${breed.lap}/5`} />
            <Characteristic characteristic="Life Span" value={`${breed.life_span} years`} />
            <Characteristic characteristic="Natural" value={`${breed.natural}/5`} />
            <Characteristic characteristic="Origin" value={`${breed.origin}`} />
            <Characteristic characteristic="Rare" value={`${breed.rare}/5`} />
            <Characteristic characteristic="Rex" value={`${breed.rex}/5`} />
            <Characteristic characteristic="Shedding Level" value={`${breed.shedding_level}/5`} />
            <Characteristic characteristic="Short Legs" value={`${breed.short_legs}/5`} />
            <Characteristic characteristic="Social Needs" value={`${breed.social_needs}/5`} />
            <Characteristic characteristic="Stranger Friendly" value={`${breed.stranger_friendly}/5`} />
            <Characteristic characteristic="Suppressed Tail" value={`${breed.suppressed_tail}/5`} />
            <Characteristic characteristic="Temperament" value={`${breed.temperament}/5`} />
            <Characteristic characteristic="Vocalisation" value={`${breed.vocalisation}/5`} />
            <Characteristic characteristic="Weight" value={`${breed.weight.metric} kg`} />
            <Characteristic characteristic="Wikipedia" value={`${breed.wikipedia_url}`} isURL />
            <Characteristic characteristic="Vet Street" value={`${breed.vetstreet_url}`} isURL />
            <Characteristic characteristic="VCA Hospital" value={`${breed.vcahospitals_url}`} isURL />
            <Characteristic characteristic="CFA" value={`${breed.cfa_url}`} isURL />
          </Row>
        </Container>
      </div>
    </>

  );
};

export default Details;

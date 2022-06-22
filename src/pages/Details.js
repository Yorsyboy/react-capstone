import { useLocation } from 'react-router-dom';
// import { IoIosArrowBack } from 'react-icons/io';

const Details = () => {
  const { state } = useLocation();
  const { breed } = state;

  return (
    <div>
      <div>
        {breed.id}
      </div>
    </div>
  );
};

export default Details;

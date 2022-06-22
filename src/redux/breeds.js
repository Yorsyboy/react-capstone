import TheCatApi from '../api/TheCatApi';

const BREEDS_FETCHED = 'BREEDS_FETCHED';

const fetchBreeds = () => async (dispatch) => {
  const breeds = await TheCatApi.getAllBreeds();

  if (breeds) {
    dispatch({
      type: BREEDS_FETCHED,
      breeds,
    });
  } else {
    // TODO Handle Error
  }
};

const breedsReducer = (state = [], actions) => {
  switch (actions.type) {
    case BREEDS_FETCHED:
      return actions.breeds;
    default:
      return state;
  }
};

export { breedsReducer as default, fetchBreeds };

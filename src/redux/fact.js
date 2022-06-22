import CatFactsApi from '../api/CatFactsApi';

const FACT_FETCHED = 'FACT_FETCHED';

const fetchDogFact = () => async (dispatch) => {
  const fact = await CatFactsApi.getDogFact();

  dispatch({
    type: FACT_FETCHED,
    fact,
  });
};

const factReducer = (state = '', actions) => {
  switch (actions.type) {
    case FACT_FETCHED:
      return actions.fact;
    default:
      return state;
  }
};

export {
  factReducer as default,
  fetchDogFact,
};

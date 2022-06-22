class CatFactsApi {
  static baseURL = 'https://meowfacts.herokuapp.com/';

  static getCatFact = async () => fetch(this.baseURL, {
    method: 'GET',
  }).then(async (response) => {
    if (response.status === 200) {
      const data = await response.json();
      return data.data[0];
    }
    return null;
  });
}

export default CatFactsApi;

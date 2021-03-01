const getData = api => {
  return fetch(api)
    .then(response => response.json())
    .then(response => resposne)
    .catch(error => error);
};

export default getData;

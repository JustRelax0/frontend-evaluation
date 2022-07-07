const axios = require("axios");
const Promise = require("bluebird");

const getPlanets = (page, cb) => {
  const options = {
    method: "get",
    url: `https://swapi.dev/api/planets/?page=${page}`,
  };

  axios(options)
    .then((results) => {
      cb(null, results.data.results);
    })
    .catch((error) => {
      cb(error, null);
    });
};

const getAllPlanets = (cb) => {
  let promises = [];

  for (let i = 1; i < 7; i++) {
    promises.push(axios.get(`https://swapi.dev/api/planets/?page=${i}`));
  }

  Promise.all(promises)
    .then((data) => {
      let newData = [];
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].data.results.length; j++)
          newData.push(data[i].data.results[j]);
      }
      cb(null, newData);
    })
    .catch((err) => {
      cb(err, null);
    });
};

const getPlanet = (planet, cb) => {
  const options = {
    method: "get",
    url: `https://swapi.dev/api/planets/?search=${planet}`,
  };

  axios(options)
    .then((results) => {
      let promises = [];
      for (let i = 0; i < results.data.results[0].residents.length; i++) {
        promises.push(axios.get(results.data.results[0].residents[i]));
      }
      return Promise.all(promises);
    })
    .then((residents) => {
      let newData = [];
      for (let i = 0; i < residents.length; i++) {
        newData.push(residents[i].data);
      }
      console.log(newData);
      cb(null, newData);
    })
    .catch((error) => {
      cb(error, null);
    });
};

module.exports.getPlanets = getPlanets;
module.exports.getPlanet = getPlanet;
module.exports.getAllPlanets = getAllPlanets;

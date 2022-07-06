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

module.exports.getPlanets = getPlanets;

// Asia and Europe in single Array

let europe = fetch('https://restcountries.eu/rest/v2/region/europe').then(
  (data) => data.json()
);
let asia = fetch('https://restcountries.eu/rest/v2/region/asia').then((data) =>
  data.json()
);

Promise.all([europe, asia]).then((countries) =>
  console.log(countries[0].concat(countries[1]))
);


// Spanish speaking countries in Europe

fetch("https://restcountries.eu/rest/v2/lang/es")
  .then((data) => data.json())
  .then((spanish) => {
    spanish.filter((Europe) => {
      if (Europe.region == "Europe") {
        console.log(Europe.name);
      }
    });
  });

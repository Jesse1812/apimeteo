const APIKEY = '59c73df5bc2294da5f06214affbe1281';

let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.getElementById('city').innerHTML =
          "<i class='fas fa-house-user'></i>" + data.name;
        document.getElementById('temp').innerHTML =
          "<i class='fas fa-thermometer-three-quarters'></i>" +
          data.main.temp +
          '°';
        document.getElementById('humidity').innerHTML =
          "<i class='fas fa-tint'></i>" + data.main.humidity + ' %';
        document.getElementById('wind').innerHTML =
          "<i class='fas fa-wind'></i>" +
          Math.round(data.wind.speed * 1.6) +
          ' km/h';
      })
    )
    .catch((error) => console.log('Erreur: ' + error));
};

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let ville = document.getElementById('inputCity').value;
  apiCall(ville);
});
apiCall('Aix-en-Provence');

let apiCall2 = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.getElementById('city2').innerHTML =
          "<i class='fas fa-house-user'></i>" + data.name;
        document.getElementById('temp2').innerHTML =
          "<i class='fas fa-thermometer-three-quarters'></i>" +
          data.main.temp +
          '°';
        document.getElementById('humidity2').innerHTML =
          "<i class='fas fa-tint'></i>" + data.main.humidity + ' %';
        document.getElementById('wind2').innerHTML =
          "<i class='fas fa-wind'></i>" +
          Math.round(data.wind.speed * 1.6) +
          ' km/h';
      })
    )
    .catch((error) => console.log('Erreur: ' + error));
};
apiCall2('Avignon');

let apiCall3 = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.getElementById('city3').innerHTML =
          "<i class='fas fa-house-user'></i>" + data.name;
        document.getElementById('temp3').innerHTML =
          "<i class='fas fa-thermometer-three-quarters'></i>" +
          data.main.temp +
          '°';
        document.getElementById('humidity3').innerHTML =
          "<i class='fas fa-tint'></i>" + data.main.humidity + ' %';
        document.getElementById('wind3').innerHTML =
          "<i class='fas fa-wind'></i>" +
          Math.round(data.wind.speed * 1.6) +
          ' km/h';
      })
    )
    .catch((error) => console.log('Erreur: ' + error));
};
apiCall3('Gap');

let apiCall4 = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.getElementById('city4').innerHTML =
          "<i class='fas fa-house-user'></i>" + 'Super Dévoluy';
        document.getElementById('temp4').innerHTML =
          "<i class='fas fa-thermometer-three-quarters'></i>" +
          data.main.temp +
          '°';
        document.getElementById('humidity4').innerHTML =
          "<i class='fas fa-tint'></i>" + data.main.humidity + ' %';
        document.getElementById('wind4').innerHTML =
          "<i class='fas fa-wind'></i>" +
          Math.round(data.wind.speed * 1.6) +
          ' km/h';
      })
    )
    .catch((error) => console.log('Erreur: ' + error));
};
apiCall4('Le dévoluy');

let apiCall5 = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.getElementById('city5').innerHTML =
          "<i class='fas fa-house-user'></i>" + 'Santo Domingo';
        document.getElementById('temp5').innerHTML =
          "<i class='fas fa-thermometer-three-quarters'></i>" +
          data.main.temp +
          '°';
        document.getElementById('humidity5').innerHTML =
          "<i class='fas fa-tint'></i>" + data.main.humidity + ' %';
        document.getElementById('wind5').innerHTML =
          "<i class='fas fa-wind'></i>" +
          Math.round(data.wind.speed * 1.6) +
          ' km/h';
      })
    )
    .catch((error) => console.log('Erreur: ' + error));
};
apiCall5('boca chica');

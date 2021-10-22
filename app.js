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
apiCall('paris');
apiCall('aix');

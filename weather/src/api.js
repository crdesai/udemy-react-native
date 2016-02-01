var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=ce9280f3d5594c8275263b11343e6102';

var kelvinToF = function(kelvin){
    return (Math.round(kelvin - 273.15) * 1.8 +32) + ' °F';
}

module.exports = function(latitude, longitude) {

    var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

    return fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(json) {
            console.log(json);
            return {
                city: json.name,
                temperature: kelvinToF(json.main.temp),
                description: json.weather[0].description.charAt(0).toUpperCase() + json.weather[0].description.slice(1)
            }
        })
        .catch(function(error){
            console.log(error);
        });
}
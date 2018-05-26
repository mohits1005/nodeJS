const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');


const argv = yargs.options({
    a:{
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else
    {
        // console.log(JSON.stringify(results, undefined, 2));
        console.log(results.address);
        Latitude = results.Latitude;
        Longitude = results.Longitude;
        weather.getWeather(Latitude,Longitude, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            }else
            {
                // console.log(JSON.stringify(weatherResults, undefined, 2));
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
            }
        });

    }

});

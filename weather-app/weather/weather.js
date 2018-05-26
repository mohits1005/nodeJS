const request = require('request');
//32d6a17ec4f423716861ab90bc86****
var getWeather = (lat,lng, callback) => {
    request({
        url:`https://api.darksky.net/forecast/32d6a17ec4f423716861ab90bc86****/${lat},${lng}`,
        json: true
    },(error,response,body)=>{
        if(!error && response.statusCode === 200)
        {
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else
        {
            callback('Unable to fetch weather');
        }
    });
}

module.exports = {
    getWeather
};

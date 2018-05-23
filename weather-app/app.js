const request = require('request');

request({
    url:"https://maps.googleapis.com/maps/api/geocode/json?address=221b%20baker%20street%20london",
    json: true
},(error,response,body)=>{
    // console.log(JSON.stringify(response, undefined, 2));
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
});

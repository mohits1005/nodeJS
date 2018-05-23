const request = require('request');

request({
    url:"https://maps.googleapis.com/maps/api/geocode/json?address=221b%20baker%20street%20london",
    json: true
},(error,response,body)=>{
    console.log(JSON.stringify(body, undefined, 2));
});

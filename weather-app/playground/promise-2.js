const request = require('request');

var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address);
    return new Promise((resolve, reject)=>{
        request({
            // url:"https://maps.googleapis.com/maps/api/geocode/json?address=221b%20baker%20street%20london",
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        },(error,response,body)=>{
            if(error)
            {
                reject('Unable to connect to Google servers')
            }
            else if(body.status === 'ZERO_RESULTS')
            {
                reject('Unable to find that address.');
            }
            else if(body.status === 'OK')
            {
                var location = {
                    address: body.results[0].formatted_address,
                    Longitude: body.results[0].geometry.location.lat,
                    Latitude: body.results[0].geometry.location.lng
                };
                resolve(location);
            }
        });
    });

}

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}).catch( (errorMessage) => {
    console.log(errorMessage);
})

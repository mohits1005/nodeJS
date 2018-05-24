const request = require('request');
const yargs = require('yargs');

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

// console.log(encodeURIComponent(argv['a']));
var encodedAddress = encodeURIComponent(argv.address);

request({
    // url:"https://maps.googleapis.com/maps/api/geocode/json?address=221b%20baker%20street%20london",
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
},(error,response,body)=>{
    if(error)
    {
        console.log('Unable to connect to Google servers');
    }
    else if(body.status === 'ZERO_RESULTS')
    {
        console.log('Unable to find that address.');
    }
    else if(body.status === 'OK')
    {
        // console.log(JSON.stringify(response, undefined, 2));
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
    }
});

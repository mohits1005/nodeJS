// const request = require('request');
// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
//
// const argv = yargs.options({
//     a:{
//         demand: true,
//         alias: 'address',
//         describe: 'Address to fetch weather for',
//         string: true
//     }
// })
// .help()
// .alias('help','h')
// .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if(errorMessage){
//         console.log(errorMessage);
//     }else
//     {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
//
// });


//32d6a17ec4f423716861ab90bc8620f7
const request = require('request');
request({
    url:`https://api.darksky.net/forecast/32d6a17ec4f423716861ab90bc8620f7/77.6445923,12.911862`,
    json: true
},(error,response,body)=>{
    if(!error && response.statusCode === 200)
    {
        console.log(body.currently.temperature);
    }
    else
    {
        console.log('Unable to fetch weather');
    }
});

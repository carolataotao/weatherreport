// //Init Storage
// const storage= new Storage();
// //Get stored location data
// const weatherLocation=storage.getLocationData();

// //Init weather object
// const weather=new Weather(weatherLocation.city);
// //Init UI
// const ui=new UI();

// //Get weather on DOM load
// document.addEventListener('DOMContentLoaded', getWeather);

// //change location event
// document.getElementById('w-change-btn').addEventListener('click',(e)=>{
//     const city=document.getElementById('city').Value;
//     //const country=document.getElementById('country').value;
    
//     //change location
//     weather.changeLocation(city);

//     //Set location in LS
//     storage.setLocationData(city);


//     //Get and display weather
//     getWeather();

//     //Close modal
//     $('#locModal').modal('hide');
// })

// function getWeather(){
//     weather.getWeather()
//     .then(results=>{
//         ui.paint(results);
//     })
//     .catch(err=>console.log(err));
// }
//Init storage 
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);
// Init UI
const ui = new UI;
// console.log();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'FL');

//change location event 
document.getElementById('w-change-btn').addEventListener('click', (e) => {

    const city = document.getElementById('city').value;

    // Change location
    weather.changeLocation(city);

    //set locaiton in LS 
    storage.setLocationData(city);

    // Get and display weather 
    getWeather();

    // close Modal  - only jquery used bcoz of bootstrap
    $('#locModal').modal('hide');
})

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
            // console.log(results);
        })
        .catch(err => console.log(err));
}
// class Weather{
//     constructor(city){
//         this.apiKey='4a81f4fb0b901a8b423f9df749281a09';
//         this.city=city;
//         //this.country=country;
//     }
//     //Fetch weather from API
//     async getWeather(){
//         // const response = await fetch(`https://www.api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);
//         const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);
//       const responseData=await response.json();
//         return responseData;
//    }

//    //Change weather location
//    changeLocation(city){
//        this.city=city;
//        //this.country=country;
//    }
// }

class Weather {
    constructor(city) {
        this.apiKey = '4a81f4fb0b901a8b423f9df749281a09';
        this.city = city;
    }

    // Fetch weather from API 

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();
        return responseData;

        //** you can try with responseData.main */
        // return responseData.main;
        console.log(responseData);
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}
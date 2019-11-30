// class Storage{
//     constructor(city) {
//         this.city;
//         //this.country;
//         this.defaultCity='Miami';
//         //this.defaultCountry='FL';
//     }

//     getLocationData(){
// if(localStorage.getItem('city')===null){
// this.city=this.defaultCity;
// }else{
// this.city=localStorage.getItem('city');
// }

// // if(localStorage.getItem('country')===null){
// // this.country=this.defaultCountry;
// // }else{
// // this.country=localStorage.getItem('country');
// // }

// return{
//     city: this.city
//     //country: this.country
// }
//     }
    
//     setLocationData(city){
//         localStorage.setItem('city', city);
//         //localStorage.setItem('country', country);
//     }
// }

class Storage {
    constructor(city) {
        this.city;
        this.defaultCity = 'Waikato';

    }

    getLocationData() {

        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;

        } else {
            this.city = localStorage.getItem('city');
        }

        return {
            city: this.city
        }
    }

    setLocationData(city) {
        localStorage.setItem('city', city);

    }
}

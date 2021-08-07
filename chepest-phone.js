// const phones =[
//     {name : 'samsung j5' , price : 45000, color : 'black', camera: '18mp' , stronge: '16gb'},
//     {name : 'vivo a12' , price : 20000, color : 'green', camera: '16mp' , stronge: '16gb'},
//     {name : 'Gphone' , price : 9000, color : 'yellow', camera: '9mp' , stronge: '8gb'},
//     {name: 'walton y5' , price: 8000, color: 'white' , camera : '4mp', stronge: '12gb'},
//     {name: 'samphony v12' , price: 1000, color: 'red' , camera : '14mb', stronge: '32gb'},

// ]

// let cheapest = phones[0];
// for( const phone of phones){

//     // compare 

//     if(phone.price < cheapest.price){
//         cheapest = phone;
//     }
// }
// console.log(cheapest);

var kachamal = [
    {product: 'cow' , color: 'black' , price : 50000},
    {product: 'goat' , color: 'pink' , price : 12000},
    {product: 'lamb' , color: 'white' , price : 15000},
    {product: 'camel' , color: 'soil' , price : 12500000},
    {product: 'elephant' , color: 'black' , price : 8050000},

]

// var maxPrice = kachamal[0];
// for(kaca of kachamal){
//     if(kaca.price > maxPrice.price){
//         maxPrice = kaca;
//     }
// }
// console.log(maxPrice);




// function way 

function getChepeastPrice (kachamal){

    var maxPrice = kachamal[0];
      for(kaca of kachamal){
        if(kaca.price > maxPrice.price){
            maxPrice = kaca;
        }
    }
    return maxPrice;
}
var ans = getChepeastPrice(kachamal);
console.log(ans);
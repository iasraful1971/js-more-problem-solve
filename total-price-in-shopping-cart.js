// let products = [
//     {productName : 'laptop', price: 43000},
//     {productName : 'Shirt' , price: 720 },
//     {productName  :'watch' , price: 650 },
//     {productName  :'phone' , price: 55000 },

// ]
// let totalPrice = 0;
// for(const product of products){
//     totalPrice = totalPrice + product.price;
// }
// console.log(totalPrice);

let cart = [
    {productName : 'laptop', price: 50000, quantity: 2},
    {productName : 'Shirt' , price: 840, quantity: 2},
    {productName  :'watch' , price: 2000 , quantity: 2},
    {productName  :'phone' , price: 42000 , quantity: 2},

]

 var cartTotal = 0;  
for (const product of cart){
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
   

}
console.log(cartTotal);
let carts = [
    {productName : 'laptop', price: 32000, quantity: 2},
    {productName : 'Shirt' , price: 840, quantity: 2},
    {productName  :'watch' , price: 800 , quantity: 2},
    {productName  :'phone' , price: 18000 , quantity: 2},
    {productName  :'headphone' , price: 400 , quantity: 1},

]
// let totalPrice = 0;
// for(product of carts){
//    let totalCart = product.price * product.quantity;
//    totalPrice = totalPrice + totalCart;
// }
// console.log('total price is :' ,totalPrice);



// functionally


function totalCartPrice (carts){
    let totalPrice  = 0;
     for(produts of carts){
         var cartTotal = produts.price * produts.quantity;
         totalPrice = totalPrice + cartTotal;
     }
     return totalPrice;
}
var ones = totalCartPrice(carts);
console.log("his total money is: " ,ones);
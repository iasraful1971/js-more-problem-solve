// 1 chair = 3cft
// 1 table = 10cft;
// 1 bed = 50cft;



// function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
//     // per calculation
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     // wood calcucation 
//     const chairWoodQuantity = chairQuantity * perChairWood;
//     const tableWoodQuantity = tableQuantity * perTableWood;
//     const bedWoodQuantity = bedQuantity * perBedWood;

//     // total wood 
//     let  totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
//     return totalWood;

// }
// const firstOption = woodCalculator(0 , 0 , 2);
// console.log('my result is: ' , firstOption ,' cft');

// kacamal calulator 


function kachamalCalculator (murgiQuantity , chagolQuantity , GuroQuantity){

        //kacamal price
    let murgiPrice = 100;
    let chagolPrice = 400;
    let guroPrice = 500;

       // calc 
    var amiMurgiNibo =  murgiPrice * murgiQuantity ;
    var amiChagolNibo =  chagolPrice * chagolQuantity;
    var amiGoruNibo =  guroPrice * GuroQuantity;

  total = amiMurgiNibo + amiChagolNibo + amiGoruNibo;
  return total;
}

var firstOption = kachamalCalculator(2 , 2 ,1);
console.log('total tk :' , firstOption) ;
function animalCount (miles){
    const firstTenMile = 10;
    const secondTenMile = 10;
    if(miles <= 10){
      const count = miles * 10;
      return count;
    }
   else if(miles <=20){
       const first10 = 10 * firstTenMile;
       const restMiles = miles - 10;
       const secondDesnceAnimle = restMiles * secondTenMile;
       let totalAnimal = first10 + secondDesnceAnimle;
       return totalAnimal;
   }
}
var animalQuantity = animalCount(17);
console.log('animals are : ' , animalQuantity);
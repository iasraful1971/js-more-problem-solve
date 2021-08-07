// // const names = ['abul' ,'babul' ,'kabul' ,'nabul' ,'nabul' ,'abul', 'nabul' ,'babul', 'jabul' ,'habul' ,'abul'];

// // function removeDuplicate (names){
// //     const unique= [];
   
// //     for(const element of names){
// //         console.log(element);
// //         if(unique.indexOf(element) == -1){
// //             unique.push(element);
// //         }
// //     }
// //     return unique;
// // }
// // const uniqueNAme = removeDuplicate(names);
// //     console.log(uniqueNAme)

// let fruits = ['mango' ,'jackfruit' , 'black berrry', 'bannana' ,'mango' , 'bannana', 'mango', 'mango'];

// function removeDuplicate1 (fruits){
//     const blankArray = [];
//     for(let i = 0; i < fruits.length; i++){
//         let element = fruits[i];
//         // console.log(element);
//         if(blankArray.indexOf(element) == -1){
//             blankArray.push(element)
//         }
//     }
//     return blankArray;
     
// }

// const myFruits = removeDuplicate1(fruits);
// console.log('the result is: ', myFruits);



// new practice with for of loop 

var womenName = ['mira' , 'shorna' ,'mansura' ,'popy' , 'mira' , 'popy' , 'mansura' ,'popy' , 'mira'];

function removeExtraElement (womenName){
    var barArray = [];

    for(var element of womenName){
        if(barArray.indexOf(element) == -1){
            barArray.push(element);
        }
    }
    return barArray;
}
var ans = removeExtraElement(womenName);
console.log("the ans is :" , ans);
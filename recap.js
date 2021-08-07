function largerstNumber (ages){
    let max = ages[0];
    for(let i =0; i < ages.lenght; i++){
        const element = ages[i];
        if(element > max){
            max = element;
        }

    }
    return max;
}
var ans = largerstNumber([10,20,30,40,50]);
console.log('big is : ' ,ans);
// lower 

function smallestNumber (ages){
    let min = ages[0];
    for(let i =0; i < ages.lenght; i++){
        let element = ages[i];
        if(element < min){
            min = element;
        }

    }
    return min;
}
var result = smallestNumber([10,20,30,40,50]);
console.log('smallest is: ' ,result);
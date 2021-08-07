// for (var i = 0; i <=50; i++){
//     if(i % 3 == 0){
//         console.log('foo');
//     }else{
//         console.log(i);
//     }
// }

for(let i = 0 ; i <= 50; i++){
   if(i % 5 ==0 ){
        console.log('bar');
    }

    else if(i % 5 == 3){
        console.log('fooo');
    }
    
    else if( i % 3 ==0 && i%5 ==0){
        console.log('foobar');
    }
    else{
        console.log(i);
    }
}
//identifyPrime



let num=[2,3,4,5,6,8,9,10,11,12,13];
let count=0;
    for(let i=0; i<=num; i++){
        if(num%i==0){
            count+;
        }
    }
    if(count==2){
        console.log("Yes");
    }else{
        console.log("No");
    }
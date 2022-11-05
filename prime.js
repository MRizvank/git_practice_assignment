let number = 13;
let count=0;
    for(let i=1; i<=number; i++){
        if(a%i==0){
            count++;
        }
    }if (count==2){
        console.log(number,"Yes It's a prime number");
        
    }else{
        console.log(number,"No It's not a prime number");
    } 
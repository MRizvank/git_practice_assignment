let a = 13;
let count=0;
    for(let i=1; i<=a; i++){
        if(a%i==0){
            count++;
        }
    }if (count==2){
        console.log("Yes","It's a prime number");
        
    }else{
        console.log("No","It's not a prime number");
    } 
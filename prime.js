let number = 13;
let coun=0;
    for(let i=1; i<=number; i++){
        if(number%i==0){
            coun++;
        }
    }if (coun==2){
        console.log(number,"Yes It's a prime number");
        
    }else{
        console.log(number,"No It's not a prime number");
    } 
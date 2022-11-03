let number=27;
let factors=0;
for(let i=1;i<=a;i++){
	if(number%i==0){
		factor++;
	}
}
if(factors==2){
	console.log(number,"Yes,This is a prime number");
}else{
	console.log(number,"No,This is not a prime number");
}
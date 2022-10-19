//Check if the Number is a palindrome
let str = "dad"
var bag = "" ;


for(var  i = str.length-1; i>=0 ; i--) {
  bag += str[i];
}
if(str == bag){
  console.log("Yes");
}else{
  console.log("No");
}
//please find the error

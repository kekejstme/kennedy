
//else if login
let userName="anderson@gmail.com";
let userPassword="123456";
let correctPassword="123456";
let correctUserName="anderson@gmail.com";
let hasLogin=false;

//using if condition
if(userName==correctUserName && userPassword==correctPassword){
    console.log("Welcome to our site,login successsfull");
    hasLogin=true;
}else if(userName !=correctUserName){
    console.log('your username is incorrect');
}else if(userPassword != correctPassword){
    console.log('incorrect password');
}else{
    console.log('incorrect login details');
}
if(hasLogin){
    console.log('you can now access our site');
}

//ATM APP

let accountName='Kennedy';
let correctPin=1234;
let accountBalance=50000;
let enterPin=1234;
let moneyWithdrawl=2000;



if(correctPin===enterPin){
    console.log(`login successful + your current Balance${accountBalance}`);

    if(accountBalance > moneyWithdrawl){
   let  currentBalance=accountBalance-moneyWithdrawl;
   console.log(`current balance: ${currentBalance}`);
    }

}else{
    console.log('incorrect password')
}

//

let validUserName='anderson@gmail.com';
let validPassword='3251';
let enteredUsername='anderson@gmail.com';
let enteredPassword='3251';

if(validUserName===enteredUsername && validPassword===enteredPassword){
    console.log('login successful');

}else if(validUserName !== enteredUsername){
    console.log('incorrect username');
}else if(validPassword !== enteredPassword){
    console.log('incorrect password');
}else{

}
//loop
let numberDisplay=5;
for(let i=1;i<= numberDisplay;i++){
    let multNumber=1 *2
    console.log('number'+i +' * 2 = '+multNumber);
}
//switch
let studentScore="40";

switch(studentScore){
    case "100":
        console.log("Excellent!");
        break;
    case "50":
        console.log("Passed");
        break;
    case "40":
        console.log("Average");
        break;
    default:
        console.log("Not valid");
}
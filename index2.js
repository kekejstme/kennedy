
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

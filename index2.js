
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
let accountBalance=3000;
let enterPin=1234;
let moneyWithdrawl=3000;



if(correctPin===enterPin){
    console.log(`login successful`);
    if(accountBalance > moneyWithdrawl){
   let  currentBalance=accountBalance-moneyWithdrawl;
   console.log(`current balance: ${currentBalance}`);
    }

}else{
    console.log('incorrect password')
}
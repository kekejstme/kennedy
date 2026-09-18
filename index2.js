
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
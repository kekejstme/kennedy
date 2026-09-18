
//variable
let productName= "Books";
let costPrice=500;
let sellingPrice=1000;
let productUnit=100;
//operators sellingprice - costprice
let gain=sellingPrice-costPrice;
let totalaStockValue=sellingPrice * productUnit;
console.log("The name of our product is " + productName + " and we have made a gain of N" + gain);
console.log("We have " + totalaStockValue + " worth of goods");
//percentage
let calTenPercentage=10/100 * gain;
console.log("the name of our product is "+ productName + "we have made "+'N'+gain+ '10% of the gain is '+calTenPercentage);
console.log("We have "+ "worth of goods");
//if statement
if(costPrice < sellingPrice){
    console.log("we have made a profit of N" + gain);
}
//else

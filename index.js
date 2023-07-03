// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer="nada";

function upperCaseCustomerName() {

    return customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer(){

    bestCustomer ='not bob';

}

function overwriteBestCustomer(){
    bestCustomer ='maybe bob'
}

function changeLeastFavoriteCustomer(){
     leastFavoriteCustomer = "me";
    return leastFavoriteCustomer;

}
console.log(changeLeastFavoriteCustomer());


//upperCaseCustomerName(customerName);
//setBestCustomer()
//console.log(customerName)file!

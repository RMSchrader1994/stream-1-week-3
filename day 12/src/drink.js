let whatCanIDrink = function(number) {

};



whatCanIDrink.prototype.age = function(number) {
    if(number<0) {
        alert("Sorry. I can't tell what drink because that age is incorrect!");
    } if (number<14 && number>0) {
        alert("Drink Toddy");
    } if (number<18 && number >= 15) {
        alert("Drink Coke");
    } if (number<21 && number >= 19) {
        alert("Drink Beer");
    } if (number<130 && number >= 22) {
        alert("Drink Whiskey");
    }
};

   
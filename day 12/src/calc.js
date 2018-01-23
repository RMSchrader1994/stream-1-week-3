let Calculator = function() {
    this.value = 0;
    this.firstNumber = true;
};



Calculator.prototype.add = function(number) {
    if(typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Arguments must be a number!!!!!");
    }
};

Calculator.prototype.sub = function(number) {
    if(typeof(number) == "number") {
        if(this.value == 0 && this.firstNumber) {
            this.value = number;
        } else{
            this.value -= number;
        }
        this.firstNumber = false;
    } else {
        alert("Arguments must be a number!!!!!");
    }
    
};

Calculator.prototype.mult = function(number) {
    if(typeof(number) == "number") {
        if(this.value == 0 && this.firstNumber) {
            this.value = number;
        } else{
            this.value *= number;
        }
        this.firstNumber = false;
    } else {
        alert("Arguments must be a number!!!!!");
    }
    
};

Calculator.prototype.divi = function(number){
    if(typeof(number) == "number") {
        if(this.value == 0 && this.firstNumber) {
            if(number/0) {
                alert("Second number can't be zero!");
            }
            this.value = number;
        }else{
            this.value /= number;
        }
        this.firstNumber = false;
    } else {
        alert("Arguments must be a number!!!!!");
    }
    
};
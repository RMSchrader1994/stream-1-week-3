describe("Calculator", function(){
    
    beforeEach(function() {
        calc = new Calculator();
    });
    
    describe("Addition function", function() {
        it("Should add two numbers together and return the result", function(){
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });
        it ("should not return 4 if the numbers don't add up to 4", function
        (){
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
            
        });
        it ("should have called the alert function if we don't give a number", function(){
           spyOn(window,"alert");
           calc.add("erfe");
           expect(window.alert).toHaveBeenCalledWith("Arguments must be a number!!!!!");
        });
    });
    describe("Subtract function", function(){
       it("Should subtract two numbers together and return the result", function(){
            calc.sub(6);
            calc.sub(2);
            expect(calc.value).toBe(4);
        });
        it ("should not return 4 if the numbers don't equal 4", function
        (){
            calc.sub(15);
            calc.sub(6);
            expect(calc.value).toBe(9);
        });
        it ("should have called the alert function if we don't give a number", function(){
           spyOn(window,"alert");
           calc.sub("erfe");
           expect(window.alert).toHaveBeenCalledWith("Arguments must be a number!!!!!");
        });
    });
    describe("Multiplication function", function(){
       it("Should multiply two numbers together and return the result", function(){
            calc.mult(6);
            calc.mult(2);
            expect(calc.value).toBe(12);
        });
        it("Should multiply two numbers together and return the result", function(){
            calc.mult(4);
            calc.mult(20);
            expect(calc.value).toBe(80);
        });
        it ("should not return 12 if the numbers don't equal 12", function(){
            calc.mult(3);
            calc.mult(6);
            expect(calc.value).toBe(18);
        });
        it ("should have called the alert function if we don't give a number", function(){
           spyOn(window,"alert");
           calc.mult("erfe");
           expect(window.alert).toHaveBeenCalledWith("Arguments must be a number!!!!!");
        });
    });
    describe("Division function", function(){
       it("Should divide two numbers together and return the result", function(){
            calc.divi(6);
            calc.divi(2);
            expect(calc.value).toBe(3);
        });
        it ("should not return 3 if the numbers don't equal 3", function(){
            calc.divi(24);
            calc.divi(6);
            expect(calc.value).toBe(4);
        });
        it ("should not return 3 if the numbers don't equal 3", function(){
            calc.divi(25);
            calc.divi(5);
            expect(calc.value).toBe(5);
        });
        it ("should have called the alert function if we don't give a number", function(){
           spyOn(window,"alert");
           calc.divi("erfe");
           expect(window.alert).toHaveBeenCalledWith("Arguments must be a number!!!!!");
        });
        it ("second number is not allowed to equal zero", function(){
           spyOn(window,"alert");
           calc.divi(12);
           calc.divi(0);
           expect(window.alert).toHaveBeenCalledWith("Second number can't be zero!");
        });
    });
});
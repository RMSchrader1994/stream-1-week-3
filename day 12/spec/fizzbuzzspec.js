describe("fizzBuzz", function(){
    
    beforeEach(function() {
        calc = new fizzBuzz();
    });
    
    describe("FizzBuzz", function() {
        it ("Divisible by 3 and 5", function(){
           spyOn(window,"alert");
           fizzBuzz(15);
           expect(window.alert).toHaveBeenCalledWith("FizzBuzz");
        });
    });
});
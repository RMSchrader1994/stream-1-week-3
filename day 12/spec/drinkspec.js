describe("whatCanIDrink", function(){
    
    beforeEach(function() {
        calc = new whatCanIDrink();
    });
    
    describe("What to drink", function(){
      it("Should display Sorry... if age is under 0", function(){
         spyOn(window,"alert");
         calc.age(-2);
         expect(window.alert).toHaveBeenCalledWith("Sorry. I can't tell what drink because that age is incorrect!");
      });
        it("Should display drink toddy if age is under 14", function(){
         spyOn(window,"alert");
         calc.age(10);
         expect(window.alert).toHaveBeenCalledWith("Drink Toddy");
      });
      it("Should display drink coke if age is under 18", function() {
          spyOn(window, "alert");
          calc.age(16);
          expect(window.alert).toHaveBeenCalledWith("Drink Coke");
      });
      it("Should display drink beer if age is under 21", function() {
          spyOn(window, "alert");
          calc.age(19);
          expect(window.alert).toHaveBeenCalledWith("Drink Beer");
      });
      it("Should display drink whiskey if age is under 130", function() {
          spyOn(window, "alert");
          calc.age(119);
          expect(window.alert).toHaveBeenCalledWith("Drink Whiskey");
      });
    });
});



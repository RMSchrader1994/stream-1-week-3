describe("Extra calculator functions", function() {
    describe("Area function", function() {
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
    });
    
    describe("Square Root function", function() {
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
    });
    
    describe("Square function", function() {
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
        it("should return 64 as the square of 8", function() {
            expect(squareMe(8)).toBe(64);
        });
    });
    describe("Square function", function() {
            it("should return 8 for cube of 2", function() {
            expect(cubeMe(2)).toBe(8);
        });
        it("should return 27 for cube of 3", function() {
            expect(cubeMe(3)).toBe(27);
        });
    });
    describe("Area of a Triangle function", function() {
            it("should return 36 for a base of 12 and height of 6", function() {
            expect(areaOfTriangle(12, 6)).toBe(36);
        });
    });

});
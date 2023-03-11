describe("calculateMonthlyPayment", function() {
    it("should calculate the monthly rate correctly", function() {
        const values = {
          amount: 10000,
          years: 5,
          rate: 3.5
        };
        const monthlyPayment = calculateMonthlyPayment(values);
        expect(monthlyPayment).toEqual("181.92");
    });
    
    it("should return a result with 2 decimal places", function() {
        const values = {
          amount: 12000,
          years: 3,
          rate: 4.5
        };
        const monthlyPayment = calculateMonthlyPayment(values);
        expect(monthlyPayment.split(".")[1].length).toEqual(2);
      });
    });
      
    it("should handle a large loan amount", function() {
      const values = {
        amount: 100000,
        years: 10,
        rate: 5
      };
      const monthlyPayment = calculateMonthlyPayment(values);
      expect(monthlyPayment).toEqual("1060.66");
    });
    
    it("should return 0 for a loan amount of 0", function() {
      const values = {
        amount: 0,
        years: 5,
        rate: 3.5
      };
      const monthlyPayment = calculateMonthlyPayment(values);
      expect(monthlyPayment).toEqual("0.00");
    });
    
     
       
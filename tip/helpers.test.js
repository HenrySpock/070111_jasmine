describe("Helpers test", function() {
    it('should return correct payment total for bill amount', function () {
      allPayments = {
        payment1: {billAmt: '20', tipAmt: '5'},
        payment2: {billAmt: '30', tipAmt: '10'},
        payment3: {billAmt: '40', tipAmt: '15'}
      };
      expect(sumPaymentTotal('billAmt')).toEqual(90);
    });
  
    it('should return correct payment total for tip amount', function () {
      allPayments = {
        payment1: {billAmt: '20', tipAmt: '5'},
        payment2: {billAmt: '30', tipAmt: '10'},
        payment3: {billAmt: '40', tipAmt: '15'}
      };
      expect(sumPaymentTotal('tipAmt')).toEqual(30);
    });
  
    it('should return correct tip percent for given bill and tip amounts', function () {
      expect(calculateTipPercent(50, 10)).toEqual(20);
    });

    describe("Helpers test", function() {
        it('should append a td element with the given value to the given tr element', function() {
          const tr = document.createElement('tr');
          const value = 'test value';
          appendTd(tr, value);
      
          expect(tr.children.length).toEqual(1);
          expect(tr.firstChild.tagName).toEqual('TD');
          expect(tr.firstChild.textContent).toEqual(value);
        });
      });
  });
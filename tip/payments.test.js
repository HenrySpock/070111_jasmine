describe("Payments test", function() {
    let paymentTbody, summaryTds;
  
    beforeEach(function() {
      paymentTbody = document.createElement('tbody');
      document.getElementById('paymentTable').appendChild(paymentTbody);
  
      summaryTds = document.querySelectorAll('#summaryTable tbody tr td');
    });
  
    // afterEach(function(done) { 
    afterEach(function() { 
        const paymentTbody = document.querySelector('#paymentTable tbody');
        paymentTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;

        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = ''; 
    }); 
  
    it('should add a new payment to allPayments on submitPaymentInfo()', function() {
      billAmtInput.value = '10';
      tipAmtInput.value = '2';
  
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('10');
      expect(allPayments['payment1'].tipAmt).toEqual('2');
      expect(allPayments['payment1'].tipPercent).toEqual(20);
    });
  
    it('should not add a new payment to allPayments with negative or empty inputs', function() {
      billAmtInput.value = '-10';
      tipAmtInput.value = '2';
  
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(0);
  
      billAmtInput.value = '10';
      tipAmtInput.value = '-2';
  
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(0);
  
      billAmtInput.value = '';
      tipAmtInput.value = '';
  
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
    it('should return an object with billAmt, tipAmt, and tipPercent when createCurPayment() is called with valid inputs', function() {
      let curPayment;
  
      billAmtInput.value = '10';
      tipAmtInput.value = '2';
  
      curPayment = createCurPayment();
  
      expect(curPayment.billAmt).toEqual('10');
      expect(curPayment.tipAmt).toEqual('2');
      expect(curPayment.tipPercent).toEqual(20);
    });
  
    it('should return undefined when createCurPayment() is called with negative or empty inputs', function() {
      let curPayment;
  
      billAmtInput.value = '-10';
      tipAmtInput.value = '2';
  
      curPayment = createCurPayment();
  
      expect(curPayment).toBeUndefined();
  
      billAmtInput.value = '10';
      tipAmtInput.value = '-2';
  
      curPayment = createCurPayment();
  
      expect(curPayment).toBeUndefined();
  
      billAmtInput.value = '';
      tipAmtInput.value = '';
  
      curPayment = createCurPayment();
  
      expect(curPayment).toBeUndefined();
    });
  
    it('should append a new payment to the payment table when appendPaymentTable() is called with a payment object', function() {
        const curPayment = {
          billAmt: '10',
          tipAmt: '2',
          tipPercent: 20
        };
      
        appendPaymentTable(curPayment);
      
        // get the payment table from the DOM
        const paymentTable = document.getElementById('paymentTable');
      
        // check that a new row was added to the table
        expect(paymentTable.rows.length).toBe(2); 
        expect(paymentTable.rows[1].cells.length).toBe(3);
        expect(paymentTable.rows[1].cells[0].textContent).toEqual('$10');
        expect(paymentTable.rows[1].cells[1].textContent).toEqual('$2');
        expect(paymentTable.rows[1].cells[2].textContent).toEqual('20%');
      });
  
      it('should reset the form inputs to empty strings', function() {
        billAmtInput.value = '10';
        tipAmtInput.value = '2';
      
        submitPaymentInfo();
      
        expect(billAmtInput.value).toEqual('');
        expect(tipAmtInput.value).toEqual('');
      });
});
    
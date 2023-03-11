describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      serverNameInput.value = 'Alice';
    });
  
    it('should add a new server to allServers on submitServerInfo()', function () {
      serverNameInput.value = 'Bob';
      submitServerInfo();
    
      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Bob');
    
      const serverTableRows = serverTbody.querySelectorAll('tr');
      expect(serverTableRows.length).toEqual(1);
      expect(serverTableRows[0].querySelector('td').textContent).toEqual('Bob');
    });

    it('should update earnings for each server in the DOM on updateServerTable()', function () {
      serverNameInput.value = 'Bob';
      submitServerInfo();
    
      billAmtInput.value = '100';
      tipAmtInput.value = '15';
      submitPaymentInfo();
    
      updateServerTable();
    
      const serverTableRows = serverTbody.querySelectorAll('tr');
      expect(serverTableRows.length).toEqual(1);
      expect(serverTableRows[0].querySelectorAll('td')[1].textContent).toEqual('$15.00');
    });
  
    afterEach(function() {
      // teardown logic
      allServers = {};
      serverId = 0;
      serverTbody.innerHTML = '';
    });
  });
  
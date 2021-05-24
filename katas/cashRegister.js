const checkCashRegister = (price, cash, cid) => {
    
    // initializes an object holding names and values for each bill
      let values = [
        { name: "ONE HUNDRED", val: 100.0 },
        { name: "TWENTY", val: 20.0 },
        { name: "TEN", val: 10.0 },
        { name: "FIVE", val: 5.0 },
        { name: "ONE", val: 1.0 },
        { name: "QUARTER", val: 0.25 },
        { name: "DIME", val: 0.1 },
        { name: "NICKEL", val: 0.05 },
        { name: "PENNY", val: 0.01 }
      ];
  
      // output to be returned
      let output = {status: null, change: []}
      
      //difference between cash and price
      let change = cash - price
  
      // change array is now object with a total ammount
      let register = cid.reduce(
        function(acc, curr) {
          acc.total += curr[1];
          acc[curr[0]] = curr[1];
          return acc;
        },
        { total: 0 }
      );
      
      // if exact change
      if (register.total === change) {
        output.status = "CLOSED"
        output.change - cid;
        return output
      }
  
      // if not enough change
      if (register.total < change) {
        output.status = "INSSUFFICENT_FUNDS"
        return output
      }
  
      // if there is more than enough change this runs
      // creating a change array to be returned
      let change_arr = values.reduce(
        function(acc, curr) {
          let value = 0
  
          while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val
            register[curr.name] -= curr.val
            value += curr.val
  
            change = Math.round(change * 100) / 100;
          }
          if (value > 0) {
            acc.push([curr.name, value])
          }
          return acc;
        }, []);
  
        if (change_arr.length < 1 || change > 0) {
          output.status = "INSUFFICIENT_FUNDS";
          return output;
        }
        
        output.status = "OPEN"
        output.change = change_arr
        return output 
  }
  
  console.log(checkCashRegister(100,232,[
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ]))
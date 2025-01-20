import Debug "mo:base/Debug";

actor DBank {
  var currentValue = 300;
  currentValue := 100;
  let id = 123456098765;

  public func topUp(amount : Nat) {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };

  public func withdrawal(amount : Nat) {
    let tempValue : Int = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    } else {
      Debug.print("Withdrawal Amount too large, current value is less than zero");
    };
  };

  public query func checkBalance() : async Nat {
    return currentValue;
  }

  // topUp();
};

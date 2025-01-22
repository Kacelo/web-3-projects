import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float"

actor DBank {
  stable var currentValue : Float = 300;
  currentValue := 300;

  // value, current time
  stable var startTime = Time.now();
  Debug.print(debug_show (currentValue));
  let id = 123456098765;
  Debug.print("need changes to be done");
  public func topUp(amount : Float) {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };

  public func withdrawal(amount : Float) {
    let tempValue : Float = currentValue - amount;
    Debug.print(debug_show(amount, tempValue ));
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    } else {
      Debug.print("Withdrawal Amount too large, current value is less than zero");
    };
  };

  public query func checkBalance() : async Float {
    return currentValue;
  };
  public query func checkBalance2() : async Float {
    return currentValue;
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapsedInNanoSeconds = currentTime - startTime;
    let timeElapsedInSeconds = timeElapsedInNanoSeconds / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedInSeconds));
    startTime := currentTime;
  };
  // topUp();
};

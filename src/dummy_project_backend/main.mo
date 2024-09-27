import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Error "mo:base/Error";
import Debug "mo:base/Debug";


actor {
  public shared query (msg) func whoami() : async Text {
    Debug.print("Caller: " # Principal.toText(msg.caller));
    Principal.toText(msg.caller)
  };

  private var users = HashMap.HashMap<Principal, Bool>(10, Principal.equal, Principal.hash);

  public shared(msg) func authenticate() : async Text {
    let caller = msg.caller;
    Debug.print("Authenticate called by: " # Principal.toText(caller));
    
    if (Principal.isAnonymous(caller)) {
      throw Error.reject("Cannot authenticate anonymous caller");
    };

    users.put(caller, true);
    "User authenticated successfully"
  };

  public shared(msg) func isAuthenticated() : async Bool {
    let caller = msg.caller;
    Debug.print("isAuthenticated called by: " # Principal.toText(caller));
    
    switch (users.get(caller)) {
      case (null) { false };
      case (?isAuth) { isAuth };
    }
  };

  public shared(msg) func logout() : async Text {
    let caller = msg.caller;
    Debug.print("Logout called by: " # Principal.toText(caller));
    
    users.delete(caller);
    "User logged out successfully"
  };
}

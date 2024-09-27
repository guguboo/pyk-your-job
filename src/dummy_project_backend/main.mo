import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Error "mo:base/Error";

actor {
  // Store authenticated users
  private var users = HashMap.HashMap<Principal, Bool>(10, Principal.equal, Principal.hash);

  // Authenticate a user
  public shared(msg) func authenticate() : async Text {
    let caller = msg.caller;
    
    if (Principal.isAnonymous(caller)) {
      throw Error.reject("Cannot authenticate anonymous caller");
    };

    users.put(caller, true);
    return "User authenticated successfully";
  };

  // Check if a user is authenticated
  public shared(msg) func isAuthenticated() : async Bool {
    let caller = msg.caller;
    
    switch (users.get(caller)) {
      case (null) { false };
      case (?isAuth) { isAuth };
    }
  };

  // Logout a user
  public shared(msg) func logout() : async Text {
    let caller = msg.caller;
    
    users.delete(caller);
    return "User logged out successfully";
  };
}
import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
    type Job = {
        id: Nat;
        text: Text;
        completed: Bool;
    };

    var jobs: [Job] = [];
    var nextId: Nat = 0;

    // This function acts like a GET request
    public query func getJobs() : async [Job] {
        jobs
    };

    // This function acts like a POST request
    public func addJob(text: Text) : async Nat {
        let job: Job = {
            id = nextId;
            text = text;
            completed = false;
        };
        jobs := Array.append(jobs, [job]);
        nextId += 1;
        nextId - 1
    };
}
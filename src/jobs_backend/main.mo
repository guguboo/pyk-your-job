import Array "mo:base/Array";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Trie "mo:base/Trie";
import TrieMap "mo:base/TrieMap";
import HashMap "mo:base/HashMap";
import Hash "mo:base/Hash";
import Debug "mo:base/Debug";
import Principal "mo:base/Principal";



actor {
    //CLASS FOR JOB
    var oneDay:Nat = 24 * 60 * 60 * 1_000_000_000;
    type JobMap = HashMap.HashMap<Text, [Job]>;

    type Job = {
        id: Nat;
        creatorId: Text;
        completed: Bool;
        jobTitle: Text;
        company: Text;
        registrationEndDate: Int;
        description: Text;
    };

    type User = {
        id: Nat;
        internetId: Text;
        applied_jobs: [Job];
        application_date: [Nat];
    };

    stable var jobs: [Job] = [];
    var users: JobMap = HashMap.HashMap<Text, [Job]>(
        100000,                  // Initial size of the hashmap (can be adjusted based on expected size)
        Text.equal,          // Equality function for `Text` keys
        Text.hash            // Hash function for `Text` keys
    );
    var nextId: Nat = 0;

    // This function acts like a GET request
    public query func getJobs() : async [Job] {
        // Debug.print("Number of jobs: " # debug_show(jobs.size()));
        jobs
    };

    // This function acts like a POST request
    public func addJob(jobTitle: Text, creatorId: Text, company: Text, registrationDays: Int, description: Text) : async Nat {
        let now: Int = Time.now();
        let job: Job = {
            id = nextId;
            creatorId = creatorId;
            completed = false;
            jobTitle = jobTitle;
            company = company;
            registrationEndDate = now + (oneDay * registrationDays);
            description = description;
        };
        jobs := Array.append(jobs, [job]);
        nextId += 1;
        addUserJob(creatorId, job);
        nextId - 1
        
    };

    func addUserJob(userId: Text, job: Job) : async () {
    switch (users.get(userId)) {
        case (null) {
            // If no jobs exist for this user, create a new array with the job.
            users.put(userId, [job]);
        };
        case (?existingJobs) {
            // If jobs already exist, add the new job to the existing array.
            let updatedJobs : [Job] = Array.append(existingJobs, [job]);
            users.put(userId, updatedJobs);
            };
        };
    };
    
    public shared query (msg) func whoami() : async Text {
    // Debug.print("Caller: " # Principal.toText(msg.caller));
    Principal.toText(msg.caller)
    };

    //FOR USR
    // public func refreshUser(): async Nat{
    //     for(job in jobs){
    //         job.
    //     };
    //     users.size()
    // }
}
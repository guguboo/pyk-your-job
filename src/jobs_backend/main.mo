import Array "mo:base/Array";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Trie "mo:base/Trie";
import Debug "mo:base/Debug";
import Principal "mo:base/Principal";



actor {
    //CLASS FOR JOB
    var oneDay:Nat = 24 * 60 * 60 * 1_000_000_000;
    type Trie<K, V> = Trie.Trie<K, V>;
    type Key<K> = Trie.Key<K>;
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
    stable let users: Trie<Text, [Job]> = Trie.empty();
    var nextId: Nat = 0;

    // This function acts like a GET request
    public query func getJobs() : async [Job] {
        Debug.print("Number of jobs: " # debug_show(jobs.size()));
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
        nextId - 1
    };

    public shared query (msg) func whoami() : async Text {
    Debug.print("Caller: " # Principal.toText(msg.caller));
    Principal.toText(msg.caller)
    };
}
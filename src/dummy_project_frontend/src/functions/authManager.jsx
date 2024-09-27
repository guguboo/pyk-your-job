import { AuthClient } from "@dfinity/auth-client";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../../declarations/dummy_project_backend/dummy_project_backend.did.js";
import { canisterId as backendCanisterId } from "../../../declarations/dummy_project_backend/index.js";

class AuthManager {
  constructor() {
    this.authClient = null;
    this.actor = null;
    this.identity = null;
  }

  async init() {
    this.authClient = await AuthClient.create();
    if (await this.authClient.isAuthenticated()) {
      await this.handleAuthenticated();
    }
  }

  async login() {
    return new Promise((resolve) => {
      this.authClient.login({
        identityProvider: process.env.DFX_NETWORK === "ic" 
          ? "https://identity.ic0.app/#authorize" 
          : `http://${process.env.CANISTER_ID_INTERNET_IDENTITY}.localhost:4943#authorize`,
        onSuccess: async () => {
          await this.handleAuthenticated();
          resolve(true);
        },
        onError: (error) => {
          console.error("Login failed:", error);
          resolve(false);
        },
      });
    });
  }

  async handleAuthenticated() {
    this.identity = await this.authClient.getIdentity();
    const isLocalDevelopment = process.env.DFX_NETWORK !== "ic";
    
    const agent = new HttpAgent({ 
      identity: this.identity,
      host: isLocalDevelopment ? "http://localhost:4943" : "https://ic0.app"
    });

    if (isLocalDevelopment) {
      await agent.fetchRootKey();
    }

    this.actor = Actor.createActor(idlFactory, {
      agent,
      canisterId: backendCanisterId,
    });

    try {
      const whoami = await this.actor.whoami();
      console.log("Authenticated as:", whoami);
      const authResult = await this.actor.authenticate();
      console.log("Backend authentication result:", authResult);
      const isAuth = await this.actor.isAuthenticated();
      console.log("Is authenticated:", isAuth);
    } catch (error) {
      console.error("Backend interaction failed:", error);
    }
  }

  async logout() {
    await this.authClient.logout();
    this.actor = null;
    this.identity = null;
    console.log("Logged out");
  }

  async isAuthenticated() {
    return this.authClient.isAuthenticated();
  }

  getActor() {
    return this.actor;
  }
}

export const authManager = new AuthManager();
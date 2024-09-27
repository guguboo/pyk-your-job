import { AuthClient } from "@dfinity/auth-client";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../../declarations/dummy_project_backend/dummy_project_backend.did.js";
import { canisterId as backendCanisterId } from "../../../declarations/dummy_project_backend/index.js";

class AuthManager {
  constructor() {
    this.authClient = null;
    this.actor = null;
  }

  async init() {
    this.authClient = await AuthClient.create();
    const isAuthenticated = await this.authClient.isAuthenticated();
    
    if (isAuthenticated) {
      await this.handleAuthenticated();
    }
    
    return isAuthenticated;
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
    const identity = await this.authClient.getIdentity();
    const isLocalDevelopment = process.env.DFX_NETWORK !== "ic";
    
    const agent = new HttpAgent({ 
      identity,
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
    } catch (error) {
      console.error("Backend interaction failed:", error);
    }
  }

  async logout() {
    await this.authClient.logout();
    if (this.actor) {
      try {
        await this.actor.logout();
      } catch (error) {
        console.error("Backend logout failed:", error);
      }
    }
    this.actor = null;
    console.log("Logged out");
  }

  async isAuthenticated() {
    if (!this.authClient) return false;
    const isAuthClientAuthenticated = await this.authClient.isAuthenticated();
    if (!isAuthClientAuthenticated) return false;
    
    if (!this.actor) {
      await this.handleAuthenticated();
    }
    
    try {
      return await this.actor.isAuthenticated();
    } catch (error) {
      console.error("Backend isAuthenticated check failed:", error);
      return false;
    }
  }

  getActor() {
    return this.actor;
  }
}

export const authManager = new AuthManager();
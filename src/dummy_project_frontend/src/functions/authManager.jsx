import { AuthClient } from "@dfinity/auth-client";
import { Actor, HttpAgent } from "@dfinity/agent";

// Import your canister definitions
import { idlFactory } from "../../../declarations/dummy_project_backend/dummy_project_backend.did.js";

const BACKEND_CANISTER_ID = process.env.CANISTER_ID;

class AuthManager {
  constructor() {
    this.authClient = null;
    this.actor = null;
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
        identityProvider: "https://identity.ic0.app/#authorize",
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
    const agent = new HttpAgent({ identity });

    // When in development, we need to set the host manually
    if (process.env.NODE_ENV !== "production") {
      agent.fetchRootKey().catch(console.error);
    }

    this.actor = Actor.createActor(idlFactory, {
      agent,
      canisterId: BACKEND_CANISTER_ID,
    });

    // Authenticate with the backend
    try {
      await this.actor.authenticate();
      console.log("Backend authentication successful");
    } catch (error) {
      console.error("Backend authentication failed:", error);
    }
  }

  async logout() {
    await this.authClient.logout();
    if (this.actor) {
      try {
        await this.actor.logout();
        console.log("Backend logout successful");
      } catch (error) {
        console.error("Backend logout failed:", error);
      }
    }
    this.actor = null;
  }

  async isAuthenticated() {
    if (!this.actor) return false;
    try {
      return await this.actor.isAuthenticated();
    } catch (error) {
      console.error("Error checking authentication status:", error);
      return false;
    }
  }
}

export const authManager = new AuthManager();
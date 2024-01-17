import conf from "../conf/conf.js";
import { Client , Account , ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
    
    this.account = new Account(this.client);            
  }

   // method for creating user Account
   async createAccount({email , password , name }) {
    try {
        const userAccount = await this.account.create(ID.unique() , email , password , name);
      if (condition) {
        // call another method
        return this.login({email , password});
      } else {
        return userAccount;
      }

    } catch (error) {
        throw error;  
    }
   }
    
// method for login 
async login ({email , password}) {
    try {
        return await this.account.createEmailSession(email , password); 
    } catch (error) {
        return error;
    }
      
}

 // method of current user 
async getCurrentUser() {
    try {
         return await this.account.get();
    } catch (error) {
        console.log("Appwrite Service :: getCurrentUser :: error " , error); 
        
    }
    return null ;             // if user is not there
}
  
// logout method 
async logout() {
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite Service :: logout :: error " , error);
    }
}

}

const authService = new AuthService();

export default authService;
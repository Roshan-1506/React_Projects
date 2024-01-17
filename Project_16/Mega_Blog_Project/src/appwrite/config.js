// configuration of appwrite

import conf from '../conf/conf';
import { Client , ID , Databases , Storage , Query } from "appwrite";

export class Service{
   client = new Client();
   databases;
   bucket;
   
   constructor(){
    this.client
               .setEndpoint(conf.appwriteUrl)
               .setProject(conf.appwriteProjectId);

     this.databases = new Databases(this.client)
     this.bucket = new Storage(this.client)          
   }

   // create post method
   async createPost({title , slug , content , featuredImage , status , userId}){
         try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
         } catch (error) {
            console.log("Appwrite Service :: createPost :: error " , error); 
         }
   }

    // update post method
   async updatePost(slug , {title , content , featuredImage , status}){
          try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
          } catch (error) {
            console.log("Appwrite Service :: updatePost :: error " , error); 
          }
   }
   
   // delete post method
   async deletePost(slug){
    try {
         await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
        return true
    } catch (error) {
        console.log("Appwrite Service :: deletePost :: error " , error);
        return false
    }
   }

   // get post method
   async getpost(slug){
    try {
         return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
         )
    } catch (error) {
        console.log("Appwrite Service :: getPost :: error " , error);
        return false
    }
   }

   // get posts which have active user status
   async getPosts(queries = [Query.equal("status" , "active")]){
       try {
         return this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries,
            
         )
       } catch (error) {
        console.log("Appwrite Service :: getPosts :: error " , error);
        return false
       }
   }

   // file upload service
     async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error " , error);
            return false
        }
     }

     // delete file service
     async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            ) 
            return true
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error " , error);
            return false
        }
     }

     // get file preview 
     getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
     }

}

const service = new Service()
export default service;
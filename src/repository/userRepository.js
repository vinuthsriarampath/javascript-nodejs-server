// import mySqlPool from "../config/mysql.js";
import AppError from "../exceptions/appError.js";
// import pgPool from "../config/postgres.js";
import { connectMongo } from "../config/mongo.js";

class UserRepository{
    // MySQL
    // async createUser(user) {
    //     try {
    //         const [result] = await mySqlPool.query('INSERT INTO users(firstName,lastName,email) VALUES(?,?,?)',[user.firstName,user.lastName,user.email]);
    //         return { id: result.insertId, ...user }; 
    //     } catch (error) {
    //         throw new AppError(400,error.message);
    //     }
    // }

    // async getUsers(){
    //     try {
    //         const [rows] =  await mySqlPool.query('SELECT * FROM users');
    //         return rows;
    //     } catch (error) {
    //         throw new AppError(400,error.message);
    //     }
    // }

    // PostgreSQL
    // async createUser(user) {
    //     try {
    //         const result = await pgPool.query(
    //             'INSERT INTO users(firstName,lastName,email) VALUES($1,$2,$3) RETURNING id, firstName, lastName, email',[user.firstName, user.lastName, user.email]
    //         );
    //         return result.rows[0]; 
    //     } catch (error) {
    //         throw new AppError(400, error.message);
    //     }
    // }

    // async getUsers(){
    //     try {
    //         const result = await pgPool.query('SELECT * FROM users');
    //         return result.rows;
    //     } catch (error) {
    //         throw new AppError(400, error.message);
    //     }
    // }

    // MongoDB
    async createUser(user) {
        try {
          const db = await connectMongo();
          const result = await db.collection("users").insertOne(user);
          console.info(result);
          return { id: result.insertedId, ...user };
        } catch (error) {
          throw new AppError(400, error.message);
        }
      }
    
      async getUsers() {
        try {
          const db = await connectMongo();
          const users = await db.collection("users").find({}).toArray();
          return users;
        } catch (error) {
          throw new AppError(400, error.message);
        }
      }

}

export default new UserRepository();
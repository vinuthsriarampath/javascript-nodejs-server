import mySqlPool from "../config/mysql.js";
import AppError from "../exceptions/appError.js";

class UserRepository{

    async createUser(user) {
        try {
            const [result] = await mySqlPool.query('INSERT INTO users(firstName,lastName,email) VALUES(?,?,?)',[user.firstName,user.lastName,user.email]);
            return { id: result.insertId, ...user }; 
        } catch (error) {
            throw new AppError(400,error.message);
        }
    }

    async getUsers(){
        try {
            const [rows] =  await mySqlPool.query('SELECT * FROM users');
            return rows;
        } catch (error) {
            throw new AppError(400,error.message);
        }
    }
}

export default new UserRepository();
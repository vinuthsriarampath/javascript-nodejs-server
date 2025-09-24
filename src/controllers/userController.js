import userService from "../services/userService.js";
import { createUserSchema } from "../validators/userValidationSchemas.js";

export const getUsers =async (_req,res)=>{
    const users = await userService.getUsers();
    res.json({message:"success", data:users});
}

export const createUser =async (req,res) =>{
    const {error} =createUserSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const createdUser =await userService.createUser(req.body)
    res.status(201).json({message:"successfully user created !", data:createdUser})
}
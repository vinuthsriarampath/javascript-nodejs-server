import { userResponseDTO } from "../dtos/userDtos.js";
import userRepository from "../repository/userRepository.js";

class UserService {

    async createUser(user) {
        const  createdUser = await userRepository.createUser(user);
        return createdUser;
    }

    async getUsers() {
        const users = await userRepository.getUsers();
        return users;
    }
}

// export a single instance (singleton)
export default new UserService();

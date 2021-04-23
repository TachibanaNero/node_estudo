import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";



class UsersService{
    async create(email : string) {
        const usersRepository = getCustomRepository(UsersRepository)
        //verificar se o usuário existe

        const userExists = await usersRepository.findOne({
            email
        });

        // se existir, retornar user
        if(userExists) {
            return userExists;
        };
        const user = usersRepository.create({
            email
        });

        await usersRepository.save(user);

        // se nao existir, salvar no banco de dados
        return user;

    }
}

export { UsersService }
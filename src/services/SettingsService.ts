import { getCustomRepository } from "typeorm"
import { SettingsRepository } from "../repositories/SettingsRepository"

interface ISettingsCreate {
    chat: boolean,
    username: string
}

class SettingsService {

    async create({ chat, username } : ISettingsCreate){
        const settingsRepository = getCustomRepository(SettingsRepository);
    
        // Select * from settings where username = "username" limit 1;
        const userAlreadyExist = await settingsRepository.findOne({
            username
        });

        if(userAlreadyExist) {
            throw new Error("User already exist!")
        }

        const settings = settingsRepository.create({
            chat,
            username
        });
    
        await settingsRepository.save(settings);

        return { SettingsService }
    }
}

export { SettingsService }
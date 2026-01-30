import { UserRepository } from "../../../domain/repositories/user.repository";

export class UpdateUserUseCase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(id: string, data: any) {
        const user = await this.userRepository.findById(id);
        if (!user) throw new Error("User not found");
        return this.userRepository.update(id, data);
    }
}
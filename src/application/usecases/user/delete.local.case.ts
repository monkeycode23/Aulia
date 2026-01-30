import { UserRepository } from "../../../domain/repositories/user.repository";

export class DeleteUserUseCase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(id: string) {
        const user = await this.userRepository.findById(id);
        if (!user) throw new Error("User not found");
        return this.userRepository.delete(id);
    }
}
import { UserRepository } from "../../../domain/repositories/user.repository";

export class CreateUserUseCase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(data: any) {
        const user = await this.userRepository.findByEmail(data.email);
        if (user) throw new Error("User already exists");
        return this.userRepository.create(data);
    }
}

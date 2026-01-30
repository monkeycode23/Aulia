import { ScheduleRepository } from "../../../domain/repositories/schedule.repository";

export class DeleteScheduleUseCase {
    constructor(private readonly scheduleRepository: ScheduleRepository) {}

    async execute(id: string) {
        return this.scheduleRepository.delete(id);
    }
}

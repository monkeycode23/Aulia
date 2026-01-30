import { ScheduleRepository } from "../../../domain/repositories/schedule.repository";

export class GetScheduleByIdUseCase {
    constructor(private readonly scheduleRepository: ScheduleRepository) {}

    async execute(id: string) {
        return this.scheduleRepository.findById(id);
    }
}

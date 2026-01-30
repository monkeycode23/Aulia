import { ScheduleRepository } from "../../../domain/repositories/schedule.repository";

export class GetAllSchedulesUseCase {
    constructor(private readonly scheduleRepository: ScheduleRepository) {}

    async execute() {
        return this.scheduleRepository.findAll();
    }
}

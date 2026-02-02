import { ScheduleRepository } from "../../../domain/repositories/schedule.repository";

export class CreateScheduleUseCase {
    constructor(private readonly scheduleRepository: ScheduleRepository) {}

    async execute(data: any) {
        return this.scheduleRepository.create(data);
    }
}

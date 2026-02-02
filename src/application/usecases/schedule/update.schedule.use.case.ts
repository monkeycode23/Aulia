import { ScheduleRepository } from "../../../domain/repositories/schedule.repository";

export class UpdateScheduleUseCase {
    constructor(private readonly scheduleRepository: ScheduleRepository) {}

    async execute(id: string, data: any) {
        return this.scheduleRepository.update(id, data);
    }
}

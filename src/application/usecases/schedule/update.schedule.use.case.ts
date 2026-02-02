import { ScheduleRepository } from "../../../domain/repositories/schedule.repository";
import { ValidationError } from "../../../shared/errors/app.errors";

export class UpdateScheduleUseCase {
    constructor(private readonly scheduleRepository: ScheduleRepository) {}

    async execute(id: string, data: any) {
        if (!id) throw new ValidationError("ID is required");
        return this.scheduleRepository.update(id, data);
    }
}

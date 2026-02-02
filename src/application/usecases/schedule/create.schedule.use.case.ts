import { ScheduleRepository } from "../../../domain/repositories/schedule.repository";
import { ValidationError } from "../../../shared/errors/app.errors";

export class CreateScheduleUseCase {
    constructor(private readonly scheduleRepository: ScheduleRepository) {}

    async execute(data: any) {
        if (!data.academicPeriodId) throw new ValidationError("Academic Period ID is required");
        if (!data.teacherId) throw new ValidationError("Teacher ID is required");
        if (!data.groupId) throw new ValidationError("Group ID is required");
        if (!data.subjectId) throw new ValidationError("Subject ID is required");
        
        return this.scheduleRepository.create(data);
    }
}

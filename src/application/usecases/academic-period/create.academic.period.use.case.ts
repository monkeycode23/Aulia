import { AcademicPeriodRepository } from "../../../domain/repositories/academic.period.repository";
import { ValidationError } from "../../../shared/errors/app.errors";

export class CreateAcademicPeriodUseCase {
    constructor(private readonly academicPeriodRepository: AcademicPeriodRepository) {}

    async execute(data: any) {
        if (!data.name) throw new ValidationError("Name is required");
        if (!data.startDate) throw new ValidationError("Start date is required");
        if (!data.endDate) throw new ValidationError("End date is required");
        if (!data.schoolId) throw new ValidationError("School ID is required");
        
        return this.academicPeriodRepository.create(data);
    }
}

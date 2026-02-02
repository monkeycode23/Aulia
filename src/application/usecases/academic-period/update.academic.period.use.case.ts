import { AcademicPeriodRepository } from "../../../domain/repositories/academic.period.repository";
import { ValidationError } from "../../../shared/errors/app.errors";

export class UpdateAcademicPeriodUseCase {
    constructor(private readonly academicPeriodRepository: AcademicPeriodRepository) {}

    async execute(id: string, data: any) {
        if (!id) throw new ValidationError("ID is required");
        return this.academicPeriodRepository.update(id, data);
    }
}

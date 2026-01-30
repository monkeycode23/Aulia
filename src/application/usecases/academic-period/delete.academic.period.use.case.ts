import { AcademicPeriodRepository } from "../../../domain/repositories/academic.period.repository";

export class DeleteAcademicPeriodUseCase {
    constructor(private readonly academicPeriodRepository: AcademicPeriodRepository) {}

    async execute(id: string) {
        return this.academicPeriodRepository.delete(id);
    }
}

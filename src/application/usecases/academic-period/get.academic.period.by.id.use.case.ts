import { AcademicPeriodRepository } from "../../../domain/repositories/academic.period.repository";

export class GetAcademicPeriodByIdUseCase {
    constructor(private readonly academicPeriodRepository: AcademicPeriodRepository) {}

    async execute(id: string) {
        return this.academicPeriodRepository.findById(id);
    }
}

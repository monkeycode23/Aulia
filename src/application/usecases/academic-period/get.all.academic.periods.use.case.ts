import { AcademicPeriodRepository } from "../../../domain/repositories/academic.period.repository";

export class GetAllAcademicPeriodsUseCase {
    constructor(private readonly academicPeriodRepository: AcademicPeriodRepository) {}

    async execute() {
        return this.academicPeriodRepository.findAll();
    }
}

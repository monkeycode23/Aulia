import { AcademicPeriodRepository } from "../../../domain/repositories/academic.period.repository";

export class CreateAcademicPeriodUseCase {
    constructor(private readonly academicPeriodRepository: AcademicPeriodRepository) {}

    async execute(data: any) {
        return this.academicPeriodRepository.create(data);
    }
}

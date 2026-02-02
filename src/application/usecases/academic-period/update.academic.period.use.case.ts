import { AcademicPeriodRepository } from "../../../domain/repositories/academic.period.repository";

export class UpdateAcademicPeriodUseCase {
    constructor(private readonly academicPeriodRepository: AcademicPeriodRepository) {}

    async execute(id: string, data: any) {
        return this.academicPeriodRepository.update(id, data);
    }
}

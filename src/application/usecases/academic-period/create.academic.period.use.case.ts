import { AcademicPeriodRepository } from "../../../domain/repositories/academic.period.repository";
import { ConflictError } from "../../../shared/errors/app.errors";

export class CreateAcademicPeriodUseCase {
    constructor(private readonly academicPeriodRepository: AcademicPeriodRepository) {}

    async execute(data: any) {
        const existing = await this.academicPeriodRepository.findByName(data.name);
        if (existing) {
            throw new ConflictError(`Ya existe un periodo académico con el nombre: ${data.name}`);
        }
        return this.academicPeriodRepository.create(data);
    }
}

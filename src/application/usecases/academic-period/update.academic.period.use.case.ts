import { AcademicPeriodRepository } from "../../../domain/repositories/academic.period.repository";
import { ConflictError } from "../../../shared/errors/app.errors";

export class UpdateAcademicPeriodUseCase {
    constructor(private readonly academicPeriodRepository: AcademicPeriodRepository) {}

    async execute(id: string, data: any) {
        if (data.name) {
            const existing = await this.academicPeriodRepository.findByName(data.name);
            if (existing && existing.id !== id) {
                throw new ConflictError(`Ya existe un periodo académico con el nombre: ${data.name}`);
            }
        }
        return this.academicPeriodRepository.update(id, data);
    }
}

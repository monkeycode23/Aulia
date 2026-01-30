import { SchoolRepository } from "../../../domain/repositories/school.repository";

async function updateSchool(schoolRepository: SchoolRepository, id: string, data: any) {
    return schoolRepository.update(id, data);
}

export class UpdateSchoolUseCase {
    constructor(private readonly schoolRepository: SchoolRepository) {}

    async execute(id: string, data: any) {
        return updateSchool(this.schoolRepository, id, data);
    }
}
import { SchoolRepository } from "../../../domain/repositories/school.repository";

export class DeleteSchoolUseCase {
  constructor(private readonly schoolRepository: SchoolRepository) {}

  async execute(id: string) {
    const school = await this.schoolRepository.findById(id);
    if (!school) throw new Error("School not found");
    return this.schoolRepository.delete(id);
  }
}
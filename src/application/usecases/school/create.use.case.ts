import { SchoolUpdate } from "../../../types/school";
import { SchoolRepository } from "../../../domain/repositories/school.repository";

export class CreateSchoolUseCase {
  constructor(private readonly schoolRepository: SchoolRepository) {}

  async execute(school: SchoolUpdate) {
    return this.schoolRepository.create(school);
  }
}

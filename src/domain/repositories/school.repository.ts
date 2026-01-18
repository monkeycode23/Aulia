import { School } from "../entities/school.entity";

export interface SchoolRepository {
  findById(id: number): Promise<School | null>;

  findByCode(code: string): Promise<School | null>;

  create(data: Partial<School>): Promise<School>;

  update(id: number, data: Partial<School>): Promise<School | null> ;

  delete(id: number): Promise<boolean>
  
}
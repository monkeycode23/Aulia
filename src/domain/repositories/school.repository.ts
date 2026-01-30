import { School } from "../entities/school.entity";

export interface SchoolRepository {
  findById(id: string): Promise<School | null>;

  findByCode(code: string): Promise<School | null>;

  create(data: Partial<School>): Promise<School>;

  update(id: string, data: Partial<School>): Promise<School | null> ;

  delete(id: string): Promise<boolean>;

  findAll(): Promise<School[]>;
  
}
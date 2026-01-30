import { Teacher } from "../entities/teacher.entity";

export interface TeacherRepository {
  findById(id: string): Promise<Teacher | null>;

findByEmployeeNumber(employeeNumber: string): Promise<Teacher | null>
  create(data: Partial<Teacher>): Promise<Teacher>;

  update(id: string, data: Partial<Teacher>): Promise<Teacher | null> ;

  delete(id: string): Promise<boolean>
  
}
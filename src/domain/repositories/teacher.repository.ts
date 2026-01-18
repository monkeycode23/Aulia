import { Teacher } from "../entities/teacher.entity";

export interface TeacherRepository {
  findById(id: number): Promise<Teacher | null>;

findByEmployeeNumber(employeeNumber: string): Promise<Teacher | null>
  create(data: Partial<Teacher>): Promise<Teacher>;

  update(id: number, data: Partial<Teacher>): Promise<Teacher | null> ;

  delete(id: number): Promise<boolean>
  
}
import { AcademicPeriod } from "../entities/academic.period.entity";

export interface AcademicPeriodRepository {
    create(academicPeriod: any): Promise<AcademicPeriod>;
    findAll(): Promise<AcademicPeriod[]>;
    findById(id: string): Promise<AcademicPeriod | null>;
    update(id: string, academicPeriod: any): Promise<AcademicPeriod | null>;
    delete(id: string): Promise<void>;
}

import { Schedule } from "../entities/schedule.entity";

export interface ScheduleRepository {
    create(schedule: any): Promise<Schedule>;
    findAll(): Promise<Schedule[]>;
    findById(id: string): Promise<Schedule | null>;
    update(id: string, schedule: any): Promise<Schedule | null>;
    delete(id: string): Promise<void>;
}

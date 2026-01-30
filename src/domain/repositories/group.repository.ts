import { Group } from "../entities/group.entity";

interface GroupRepository {
    create(group: Group): Promise<Group>;
    findAll(): Promise<Group[]>;
    findById(id: string): Promise<Group | null>;
    update(id: string, group: Group): Promise<Group | null>;
    delete(id: string): Promise<void>;
}
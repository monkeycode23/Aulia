import { Group } from "./group.entity";
import { Subject } from "./subject.entity";
import { Schedule } from "./schedule.entity";

export interface GroupSubjectId{
    groupId: string;
    subjectId: string;
}

export interface GroupSubject {
    id: GroupSubjectId;
    group: Group;
    subject: Subject;
    schedules: Schedule[];
}

export class GroupSubject {
    constructor(
        public id: GroupSubjectId,
        public group: Group,
        public subject: Subject,
        public schedules: Schedule[],
    ) {}
}

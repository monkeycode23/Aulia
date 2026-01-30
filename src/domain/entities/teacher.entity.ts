// domain/entities/teacher.entity.ts
// types/teacher.ts
import { Person } from "../../types/general";
import { User } from "../../types/user";
import { Subject } from "../../types/general";
import { Group } from "../../types/general";

export interface Teacher {
  id: string;
  personId: string;
  person?: Person;

  employeeNumber: string;
  specialization?: string;
  status: string;
  hireDate: Date;
  terminationDate?: Date;

  user?: User;

  subjects?: Subject[];
  groups?: Group[];

  createdAt?: Date;
  updatedAt?: Date;
}


export class Teacher {
  constructor(
    public id: string,
    public personId: string,
    public employeeNumber: string,
    public status: string,
    public hireDate: Date,
    public terminationDate?: Date,
    public specialization?: string,
    public user?: User,
    public subjects?: Subject[],
    public groups?: Group[],
    public createdAt?: Date,
    public updatedAt?: Date,
  ) {}
}

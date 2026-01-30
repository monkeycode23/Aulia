// domain/entities/school.entity.ts

import { Teacher } from "./teacher.entity";
import { Student } from "./student.entity";
import { Group } from "./group.entity";
import { Subject } from "./subject.entity";
import { User } from "./user.entity";

export interface School {
  id: string;
  name: string;
  code?: string;
  type?: string;
  establishedAt?: Date;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  logoUrl?: string;

  teachers?: Teacher[];
  students?: Student[];
  groups?: Group[];
  subjects?: Subject[];

  principal?: User;
  principalId?: string;

  createdAt: Date;
  updatedAt: Date;
}

export class School {
  constructor(
    public id: string,
    public name: string,
    public createdAt: Date,
    public updatedAt: Date,
    public code?: string,
    public type?: string,
    public establishedAt?: Date,
    public email?: string,
    public phone?: string,
    public address?: string,
    public city?: string,
    public state?: string,
    public country?: string,
    public postalCode?: string,
    public website?: string,
    public logoUrl?: string,
    public principalId?: string,

    public teachers?: Teacher[],
    public students?: Student[],
    public groups?: Group[],
    public subjects?: Subject[],
    public principal?: User,
  
  ) {}
}

import { Teacher } from "./teacher.entity";
import { Student } from "./school";
import { Group } from "./group.entity";
import { Subject } from "./subject.entity";
import { User } from "./user.entity";

export type SchoolType = 'PUBLIC' | 'PRIVATE' | 'CHARTER'; // ejemplo de tipos de escuela

export interface School {
  id: string;
  name: string;
  code?: string;
  type: string; // o SchoolType si quieres usar enum
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

export interface SchoolUpdate {
  name: string;
  type: string; // o SchoolType si quieres usar enum
  establishedAt?: Date;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  website: string;
  logoUrl: string;

  principal: User;
  principalId: string;

}

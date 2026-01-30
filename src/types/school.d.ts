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
  principalId?: number;

  createdAt: Date;
  updatedAt: Date;
}

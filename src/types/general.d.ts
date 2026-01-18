export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  gender?: "M" | "F" | "Other";
  birthDate?: Date;
  nationality?: string;
  idNumber?: string;
  additionalInfo?: Record<string, any>; // información adicional flexible
  createdAt: Date;
  updatedAt: Date;

  // Relaciones
  user?: User;
  student?: Student;
  teacher?: Teacher;
  parent?: Parent;
};


export type Student = {
  id: number;
  person: Person;
  enrollmentNumber: string;
  gradeLevel?: string;
  section?: string;
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
  enrollmentDate: Date;
  graduationDate?: Date;

  // Relaciones
  user?: User;
  subjects?: Subject[];
  studentEvents?: Event[];
  subscriptions?: UserSubscription[];

  createdAt: Date;
  updatedAt: Date;
};



export type Teacher = {
  id: number;
  person: Person;
  employeeNumber: string;
  specialization?: string;
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "RETIRED";
  hireDate: Date;
  terminationDate?: Date;

  // Relaciones
  user?: User;
  subjects?: Subject[];
  teacherEvents?: Event[];
  groups?: Group[];

  createdAt: Date;
  updatedAt: Date;
};



export type Group = {
  id: number;
  name: string; // ej: "3A"
  gradeLevel: string; // ej: "Primaria 3"
  status: "ACTIVE" | "INACTIVE" | "CLOSED";

  teacher?: Teacher;

  // Relaciones
  students?: Student[];
  subjects?: Subject[];

  createdAt: Date;
  updatedAt: Date;
};



export type Subject = {
  id: number;
  name: string; // ej: "Matemáticas"
  code?: string; // ej: "MAT101"
  description?: string;
  status: "ACTIVE" | "INACTIVE" | "ARCHIVED";

  teacher?: Teacher;

  // Relaciones
  groups?: Group[];
  students?: Student[];

  createdAt: Date;
  updatedAt: Date;
};

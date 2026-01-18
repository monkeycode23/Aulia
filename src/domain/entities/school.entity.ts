// domain/entities/school.entity.ts
export class School {
  constructor(
    public id: number,
    public name: string,
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
    public principalId?: number,
  ) {}
}

import { Role } from "../../types/actions";
//import { UserSubscription } from "./UserSubscription";
import { Person } from "../../types/general";

export type AuthProvider = "LOCAL" | "GOOGLE" | "GITHUB";

import { User as TUser } from "../../types/user";

export class User {
  public id?: string;
  public email?: string;
  public username?: string;
  public passwordHash?: string;

  public avatar: string;
  public verifiedEmail: boolean;
  public emailVerifiedAt?: Date;
  public isActive: boolean;
  public failedLogins: number;
  public lockedUntil?: Date;
  public passwordResetToken?: string;
  public passwordResetExpires?: Date;
  public lastLoginAt?: Date;
  public createdAt: Date;
  public updatedAt: Date;
  public deletedAt?: Date;

  public roles: Role[] = [];
  public userSubscriptions: any //UserSubscription[] = [];
  public person: Person;



  constructor(params: Partial<TUser>) {
    this.id = params.id;
    this.email = params.email;
    this.passwordHash = params.passwordHash;
   
    this.username = params.username ?? "";
    this.avatar = params.avatar ?? "https://api.dicebear.com/7.x/initials/svg?seed=Juan%20Perez";
    this.verifiedEmail = params.verifiedEmail ?? false;
    this.emailVerifiedAt = params.emailVerifiedAt ?? new Date;
    this.isActive = params.isActive ?? true;
    this.failedLogins = params.failedLogins ?? 0;
    this.lockedUntil = params.lockedUntil ?? new Date;
    this.passwordResetToken = params.passwordResetToken ?? "";
    this.passwordResetExpires = params.passwordResetExpires ?? new Date;
    this.lastLoginAt = params.lastLoginAt ?? new Date;
    this.createdAt = params.createdAt ?? new Date();
    this.updatedAt = params.updatedAt ?? new Date();
    this.deletedAt = params.deletedAt ?? new Date;

    this.roles = params.roles ?? [];
    this.userSubscriptions = params.userSubscriptions ?? [];
    
    this.person = params.person;
  }

 
  hasRole(roleName: string): boolean {
    return this.roles.some(role => role.name === roleName);
  }

  
  hasPermission(permission: string): boolean {
    return this.roles.some(role =>
      role.permissions.some((p:any) => p.name === permission)
    );
  }
}

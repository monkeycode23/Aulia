export type AuthProvider = "LOCAL" | "GOOGLE" | "GITHUB";

export type User = {
  id: number;
  email: string;
  username?: string | null;
  passwordHash: string;
  provider: AuthProvider;

  avatar: string;
  verifiedEmail: boolean;
  emailVerifiedAt?: Date | null;
  isActive: boolean;
  failedLogins: number;
  lockedUntil?: Date | null;
  passwordResetToken?: string | null;
  passwordResetExpires?: Date | null;
  lastLoginAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;

  roles: Role[];
  userSubscriptions?: UserSubscription[];
  person: Person;
};

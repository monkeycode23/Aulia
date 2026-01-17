
export class User {
  constructor(
    public id: string,
    public email: string,
    public password: string, // hashed
    public provider: "LOCAL" | "GOOGLE" | "GITHUB"
  ) {}
}
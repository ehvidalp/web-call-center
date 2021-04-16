import { Role } from "./role";

export interface User{
  id?: string;
  names: string;
  surnames: string;
  user: string;
  role?: Role;
  password?: string;
}

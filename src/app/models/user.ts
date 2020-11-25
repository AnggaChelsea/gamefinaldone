import { Role } from "./role";

export class User {
    id: number;
    username:string;
    nama:string;
    birtdate:Date;
    phonenumber:number;
    email:string;
    password:string;
    picture:string;
    subdistrict:number;
    role: Role;
    token?: string;
    
  }

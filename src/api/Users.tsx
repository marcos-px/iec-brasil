import { apiLocal } from "./config";
import jwt_decode from "jwt-decode"

interface UserPayload {
  name: string;
  email: string;
  username: string;
  password: string;
  age: string;
  photo: string;
}
export function registerUser(payload: UserPayload) {
  return apiLocal.post("/users/create", payload);
}

export function updateUser(_id: string, payload: UserPayload) {
    const USERTOKEN = localStorage.getItem('token');
  
    const token = USERTOKEN;
    const decoded : any = jwt_decode(token!);
    return apiLocal.put(`/users/${_id}`, payload, {
      headers: {
        Authorization: `Bearer ${USERTOKEN}`
      }
    });
  }

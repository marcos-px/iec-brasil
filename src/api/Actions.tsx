import { apiLocal} from "./config";
import jwt_decode from "jwt-decode"

interface ActionPayload {
  name: string;
  email: string;
  address: string;
  cpf: string;
  phone: string;
}
export function registerActions(payload: ActionPayload) {
  const USERTOKEN = localStorage.getItem('token');

  const token = USERTOKEN;
  const decoded : any = jwt_decode(token!);
  return apiLocal.post("/actions/new", payload, {
    headers: {
      Authorization: `Bearer ${USERTOKEN}`
    }
  });
}

export function updateAction(tinytitle: string, payload: ActionPayload) {
  const USERTOKEN = localStorage.getItem('token');

  const token = USERTOKEN;
  const decoded : any = jwt_decode(token!);
  return apiLocal.put(`/actions/${tinytitle}`, payload, {
    headers: {
      Authorization: `Bearer ${USERTOKEN}`
    }
  });
}

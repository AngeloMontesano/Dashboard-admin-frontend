import axios from "axios";
import { getBaseURL } from "./platform";

/*
  Zentraler API Client.
  Admin Key niemals loggen.
*/

export function apiClient(adminKey: string, adminActor?: string) {
  const baseURL = getBaseURL();

  return axios.create({
    baseURL,
    timeout: 15000,
    headers: {
      "X-Admin-Key": adminKey,
      ...(adminActor ? { "X-Admin-Actor": adminActor } : {}),
      "Content-Type": "application/json",
    },
  });
}

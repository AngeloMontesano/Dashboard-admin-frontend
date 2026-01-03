// src/api/platform.ts
import axios from "axios";

/*
  Platform API
  - Endpunkte ohne Admin Key
*/

const baseURL = import.meta.env.VITE_API_BASE || "http://localhost:8000";

const http = axios.create({
  baseURL,
  timeout: 15000,
});

export function getBaseURL() {
  return baseURL;
}

export async function platformHealth(): Promise<boolean> {
  await http.get("/health");
  return true;
}

export async function platformHealthDb(): Promise<boolean> {
  await http.get("/health/db");
  return true;
}

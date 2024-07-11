import { get } from "./httpClient.js";

export async function getUsers(signal) {
  return await get("users", signal);
}

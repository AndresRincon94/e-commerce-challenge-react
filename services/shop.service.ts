import User from "../interfaces/User";
import Fruit from "../interfaces/Fruit";

const API_URL = "http://localhost:4201";

export async function getFruits(): Promise<Fruit[]> {
  const response = await fetch(`${API_URL}/fruits`);
  const fruits = (await response.json()) as Fruit[];
  return fruits;
}

export async function login(username: string, password: string): Promise<User> {
  const requestOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  };

  const response = await fetch(`${API_URL}/login`, requestOptions);
  const user = (await response.json()) as User;
  return user;
}

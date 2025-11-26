import type { Route } from "./+types/login";
import { Login } from "../authentification/login/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function login() {
  return <Login />;
}

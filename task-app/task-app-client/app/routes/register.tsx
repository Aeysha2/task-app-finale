import type { Route } from "./+types/register";
import { Register } from "../authentification/register/register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function register() {
  return <Register />;
}

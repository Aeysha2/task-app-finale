import type { Route } from "./+types/home";
import { Home } from "../dashboard/home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function home() {
  return <Home />;
}

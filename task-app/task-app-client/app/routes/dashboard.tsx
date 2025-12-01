import type { Route } from "./+types/dashboard";
import { Home } from "../dashboard/home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },

  ];
}

export default function dashboard() {
  return <Home />;
}

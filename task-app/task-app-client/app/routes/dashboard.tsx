import type { Route } from "./+types/dashboard";
import Home from "./home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
  ];
}

export default function dashboard() {
  return <Home />;
}

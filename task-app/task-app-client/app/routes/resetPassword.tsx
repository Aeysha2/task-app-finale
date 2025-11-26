import type { Route } from "./+types/resetPassword";
import { ResetPassword } from "../authentification/resetPassword/resetPassword";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ForgotPassword" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function resetPassword() {
  return <ResetPassword />;
}

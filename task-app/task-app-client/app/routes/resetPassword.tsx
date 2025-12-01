import type { Route } from "./+types/resetPassword";
import { ResetPassword } from "../authentification/resetPassword/resetPassword";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ForgotPassword" },
  ];
}

export default function resetPassword() {
  return <ResetPassword />;
}

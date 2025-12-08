import type { UserLogged } from "~/types";
import { userLoggedKey } from "./constante";

export function getUserFromStorage(): UserLogged | null {
    const stored = localStorage.getItem(userLoggedKey)
    return stored ? JSON.parse(stored) as UserLogged: null

}

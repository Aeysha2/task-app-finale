import { userLoggedKey } from "./constante";

export function getTokenFromStorage(): string | null {
    const stored = localStorage.getItem(userLoggedKey)
    return stored ? JSON.parse(stored) : null

}

import type { AuthInfoParams } from "~/types";
export const AuthInfo = ({ action, answer, url }: AuthInfoParams) => {
    return (
        <p className="text-sm text-gray-600">
            {answer} ?{" "}
            <a href={url} className="text-indigo-600 hover:underline">
                {action}
            </a>
        </p>
    )
}
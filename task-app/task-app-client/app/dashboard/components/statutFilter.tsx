import React from "react"

export const StatusFilter = ({
    statusFilter,
    setStatusFilter
}: {
    statusFilter: string;
    setStatusFilter: (value: string) => void;
}) => {
    return (
        <div className="flex justify-center gap-4 mb-6">

            <button
                onClick={() => setStatusFilter("")}
                className={`px-4 py-2 rounded-xl border ${statusFilter === "" ? "bg-black text-white" : "bg-white"
                    }`}
            >
                Toutes les Tâches
            </button>

            <button
                onClick={() => setStatusFilter("PENDING")}
                className={`px-4 py-2 rounded-xl border ${statusFilter === "PENDING" ? "bg-blue-500 text-white" : "bg-white"
                    }`}
            >
                PENDING
            </button>

            <button
                onClick={() => setStatusFilter("STARTING")}
                className={`px-4 py-2 rounded-xl border ${statusFilter === "STARTING" ? "bg-yellow-500 text-white" : "bg-white"
                    }`}
            >
                STARTING
            </button>

            <button
                onClick={() => setStatusFilter("FINISHING")}
                className={`px-4 py-2 rounded-xl border ${statusFilter === "FINISHING" ? "bg-green-600 text-white" : "bg-white"
                    }`}
            >
                FINISHING
            </button>

        </div>
    );
};

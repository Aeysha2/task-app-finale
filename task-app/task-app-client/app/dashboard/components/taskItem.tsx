import { useState } from "react";
import type { TaskParams } from "~/types";

export const  TaskItem = ({description, id, Status,title}:TaskParams ) => {

  const handleStart = () => {
    console.log("En cours")
  };

  const handleDelete = () => {
    alert("Tâche supprimée !");
  };

  const handleEdit = () => {
    alert("Mode édition activé !");
  };

  return (
    <div className="max-w-md bg-white shadow-md rounded-2xl p-4 border">
      <h3 className="text-lg font-bold mb-1">{title}</h3>

      <p className="text-gray-600 mb-2">
        {description}
      </p>

      <p className="text-sm mb-3">
        <span className="font-semibold"> Status :</span>{" "}
        <span>
          {Status}
        </span>
      </p>

      <div className="flex gap-3">
        <button
          onClick={handleEdit}
          className="px-3 py-1 rounded-xl bg-green-500 text-white hover:bg-green-600 transition"
        >
          Modifier
        </button>

        <button
          onClick={handleDelete}
          className="px-3 py-1 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
        >
          Supprimer
        </button>

        <button
          onClick={handleStart}
          className="px-3 py-1 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Commencer
        </button>
      </div>
    </div>
  );
}

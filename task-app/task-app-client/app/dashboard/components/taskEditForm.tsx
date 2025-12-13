import { useState } from "react";

export function TaskEditForm({ task, onSave, onCancel }: any) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  return (
    <div className="mt-4 p-3 border rounded-2xl bg-white shadow-sm">
      <h4 className="font-semibold mb-2">Modifier la tâche</h4>

      <input
        className="w-full border rounded-xl p-2 mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre"
      />

      <textarea
        className="w-full border rounded-xl p-2 mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <button
        onClick={() => onSave({ title, description })}
        className="px-3 py-1 bg-blue-500 text-white rounded-xl mr-2"
      >
        Enregistrer
      </button>

      <button
        onClick={onCancel}
        className="px-3 py-1 bg-gray-400 text-white rounded-xl"
      >
        Annuler
      </button>
    </div>
  );
}

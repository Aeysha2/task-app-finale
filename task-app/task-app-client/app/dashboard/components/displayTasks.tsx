import type { TaskParams } from "~/types"
import { TaskItem } from "./taskItem"



export const tasks: TaskParams[] = [
  {
    "id": "1",
    "title": "Développer la page d'accueil",
    "description": "Créer la maquette et intégrer la page d'accueil en utilisant React et TailwindCSS.",
    "Status": "En attente"
  },
  {
    "id": "2",
    "title": "Configurer la base de données",
    "description": "Installer Prisma, créer le schéma et connecter l'application au serveur.",
    "Status": "En cours"
  },
  {
    "id": "3",
    "title": "Créer le composant TaskCard",
    "description": "Construire un composant réutilisable avec les actions modifier, supprimer et commencer.",
    "Status": "Terminé"
  },
  {
    "id": "4",
    "title": "Implémenter l'authentification",
    "description": "Ajouter le login, register, middleware de protection et les tokens JWT.",
    "Status": "En attente"
  },
  {
    "id": "5",
    "title": "Créer la page de gestion des tâches",
    "description": "Afficher la liste des tâches et permettre l'ajout, modification et suppression.",
    "Status": "En cours"
  },
  {
    "id": "6",
    "title": "Installer TailwindCSS",
    "description": "Configurer Tailwind dans le projet et créer les classes utilitaires personnalisées.",
    "Status": "Terminé"
  },
  {
    "id": "7",
    "title": "Créer le dashboard",
    "description": "Mettre en place une interface moderne pour afficher les statistiques et les tâches.",
    "Status": "En attente"
  },
  {
    "id": "8",
    "title": "Développer la navigation",
    "description": "Créer une navbar avec React Router et gérer les liens entre les pages.",
    "Status": "En attente"
  },
  {
    "id": "9",
    "title": "Créer le composant AddTask",
    "description": "Développer un formulaire pour ajouter une tâche avec validation.",
    "Status": "En cours"
  },
  {
    "id": "10",
    "title": "Optimiser les performances",
    "description": "Refactor du code, suppression des re-render inutiles, amélioration de l'état global.",
    "Status": "En attente"
  },
  {
    "id": "11",
    "title": "Créer une API REST",
    "description": "Développer les routes CRUD pour les tâches avec Express.",
    "Status": "En attente"
  },
  {
    "id": "12",
    "title": "Mettre en place la validation des données",
    "description": "Utiliser Zod ou Yup pour valider les données côté front et back.",
    "Status": "En attente"
  },
  {
    "id": "13",
    "title": "Déployer le projet",
    "description": "Déployer le frontend sur Vercel et le backend sur Railway ou Render.",
    "Status": "En attente"
  }
]

export const DisplayTask = () => {
  return(
    <div className="bg-gray-100 p-10 min-h-screen h-full">
      <div className="bg-white p-8 rounded-2xl w-full not-first:shadow-lg b">
        <h1 className="text-xl my-10 text-center uppercase">liste des tache</h1>
      <div className="flex flex-wrap justify-center gap-4 ">
      {tasks.map(({description,id,title,Status}) =><TaskItem description={description} id={id} title={title} Status={Status} />)}
      </div>
      </div>
      </div>
  )
}
import type { TaskParams } from "~/types";
import { TaskItem } from "./taskItem"
import { title } from "process";


export const tasks: TaskParams[] = [
  {
    id: "1",
    title: "Développer la page d’accueil",
    description: "Créer la maquette et intégrer la page d’accueil.",
    Status: "En attente"
  },
  {
    id: "2",
    title: "Implémenter l'authentification",
    description: "Créer login, register et protéger les routes.",
    Status: "En cours"
  },
  {
    id: "3",
    title: "Finaliser le dashboard",
    description: "Mettre en place les graphiques et statistiques.",
    Status: "Terminé"
  },
  {
    id: "4",
    title: "Configurer la base de données",
    description: "Installer Prisma, créer le schéma et connecter l'application.",
    Status: "En attente"
  },
  {
    id: "5",
    title: "Créer les APIs des tâches",
    description: "Développer les routes CRUD avec Express ou NestJS.",
    Status: "En cours"
  },
  {
    id: "6",
    title: "Valider les formulaires",
    description: "Ajouter des validations sur les champs titre et description.",
    Status: "En attente"
  },
  {
    id: "7",
    title: "Ajouter la pagination",
    description: "Mettre en place une pagination sur la liste des tâches.",
    Status: "En attente"
  },
  {
    id: "8",
    title: "Mettre en place l’auth middleware",
    description: "Protéger les routes côté backend avec un token JWT.",
    Status: "Terminé"
  },
  {
    id: "9",
    title: "Optimiser l’interface",
    description: "Améliorer l'affichage mobile et la structure des composants.",
    Status: "En cours"
  },
  {
    id: "10",
    title: "Rédiger la documentation",
    description: "Ajouter une documentation technique et fonctionnelle pour les développeurs.",
    Status: "En attente"
  },
  {
    id: "11",
    title: "Créer les tests unitaires",
    description: "Écrire les tests Jest pour les composants critiques.",
    Status: "En attente"
  },
  {
    id: "12",
    title: "Déployer le projet",
    description: "Configurer le déploiement sur Vercel ou Render avec base de données distante.",
    Status: "En cours"
  }
];



export const DisplayTask = () => {
    
    return (
        <div className="bg-gray-100 p-10 min-h-screen">
        <div className="w-full bg-white p-8 rounded-2xl shadow-lg b">
            <h1 className="text-xl my-10 text-center uppercase">Liste des taches</h1>
        <div className="flex flex-wrap justify-center gap-4">
            {tasks.map(({description,id,Status,title}) => <TaskItem description={description} id={id} Status={Status} title={title} />)}
        </div>
        </div>
        
        </div>
    )
}
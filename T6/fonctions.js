function afficherFin() {
    console.log("=== Session terminée ===");
}

function afficherDemarrage() {
    console.log("=== Démarrage du système ===");
    console.log("Statut : Opérationnel");
}

// Les appels pilotent l'ordre réel d'exécution
afficherDemarrage();
afficherFin();

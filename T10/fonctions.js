function trouverMaximum(tableau) {
    let max = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }
    return max;
}

let scores = [45, 82, 63];
let meilleurScore = trouverMaximum(scores);

console.log("Meilleur score : " + meilleurScore);
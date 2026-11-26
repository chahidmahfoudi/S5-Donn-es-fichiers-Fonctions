function calculerSurface(longueur, largeur){
    return longueur * largeur;

}
function estGrand(surface){
    return surface>=100;
}
let calcul=calculerSurface(12, 10);
let grande= estGrand(calcul);

console.log(' la surface est '+ calcul+'m²');
console.log(' la surface la plus grande '+ grande );
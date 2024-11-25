let cj;
let co;
let cnbo;


function Jouer() {
    cj=choixJoueur();
    cnbo=choixNombreOrdi();
    choixOrdi();
    Resultat();
    alerte();
}

//Etape 1 : Choix du Joueur
function choixJoueur() {
    
return prompt ("Quel est votre choix entre Pierre, Feuille et Ciseaux ?")
}
console.log(choixJoueur)

//Etape 2 : Choix ordi

function choixNombreOrdi ( ) {
    return Math.ceil(Math.random() * 3);
}



// 1 = Feuille
// 2 = Pierre
// 3 = Ciseaux
function choixOrdi() {
    


if (cnbo===1) {
    co= "Feuille"
}
else if (cnbo===2) {
    co= "Pierre"
}
else if (cnbo===3) {
    co = "Ciseaux"
}

}

//Etape 3 COMPARER

function Resultat() {
    

if (cj===co) {
    res= "Il y a une Egalité"
}
else if (
    (cj==="Ciseaux" && co==="Feuille") ||
    (cj==="Feuille" && co==="Pierre") ||
    (cj==="Pierre" && co==="Ciseaux")
){
    res = "Le joueur gagne"
}

else {
    res = "L'ordinateur a gagné"
}
}
// Etape 4
function alerte () {
    alert (" Le joueur a fait " + cj + " et l'ordinateur a fait " + co + ". Donc:" + res)
}
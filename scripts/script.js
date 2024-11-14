/***************
 * 
 * Ici nous avons toutes les fonctions necessaires au fonctionnement du game
 * 
 **************/

/**
 * cette fonction affiche le score du joueur dans la console 
 * @param {number} resultat : le score du joueur
 * @param {number} nombreMotsProposes : le nombre de mots proposés au joueur
 */
function afficherResultat(resultat, nombreMotsProposes){

    console.log("Le score final est de " + resultat + " sur " + nombreMotsProposes)

}

function choisirPhrasesOuMots(){

    let choix =  prompt("Entrer ce que vous voulez entre 'mots' ou 'phrases' : ")
    while( choix !== "mots" && choix !== "phrases") {
        choix =  prompt("Entrer ce que vous voulez entre mots ou phrases")
    }

    return choix
}

/**
 * 
 * @param {Array[String]} listePropositions : le tableau ou la liste qui contient les mots/phrases
 * @returns {number} : le score du joueur
 */
function lancerBoucleDeJeu(listePropositions){

    let score = 0

    for(let i = 0; i < listePropositions.length; i++){
        // on demande au joueur d'entrer ce qui correspond à l'indice i
        let entreeUtilisateur = prompt("Entrez ce qui suit : " + listePropositions[i])
        if (entreeUtilisateur === listePropositions[i]) {
            //on incremente son score si son entree est correcte
            score++
        }
    
    }

    return score
}

function lancerJeu(){

    let choix = choisirPhrasesOuMots()
    let score = 0
    let nombreMotsProposes = 0

    if( choix === "mots"){
    
        score = lancerBoucleDeJeu(listeMots)
        nombreMotsProposes = listeMots.length
    
    } else {
    
        score =  lancerBoucleDeJeu(listePhrases)
        nombreMotsProposes = listePhrases.length
    }

    afficherResultat(score, nombreMotsProposes)
}
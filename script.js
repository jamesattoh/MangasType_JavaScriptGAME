/**  ATTENTION !!!
 * les guillemets droits ( " ) et les apostrophes droits ( ' ) sont différents des versions typographiques 
 * (comme ’ et “”). Même si ces caractères semblent identiques visuellement, ils sont traités différemment par
 *  JavaScript lors des comparaisons de chaînes de caractères.
**/



function choisirPhrasesOuMots(){

    let choix =  prompt("Entrer ce que vous voulez entre 'mots' ou 'phrases' : ")

    while( choix !== "mots" && choix !== "phrases") {

        choix =  prompt("Entrer ce que vous voulez entre mots ou phrases")
    }

    return choix
}


 


function afficherResultat(resultat, nombreMotsProposes){

    console.log("Le score final est de " + resultat + " sur " + nombreMotsProposes)

}


function lancerBoucleDeJeu(tableau){
    let score = 0

    for(let i = 0; i < tableau.length; i++){
        let motUtilisateur = prompt("Entrez ce qui suit : " + tableau[i])
    
        if (motUtilisateur === tableau[i]) {
            score++
        }
    
    }

    return score
}

function lancerJeu(){

    let choix = choisirPhrasesOuMots()
    if( choix === "mots"){
    
    let score = lancerBoucleDeJeu(listeMots)

        afficherResultat(score, listeMots.length)
    
    } else {
    
        let score =  lancerBoucleDeJeu(listePhrases)
    
        afficherResultat(score, listePhrases.length)
    }

}





// les boucles 

// for( let i = 0; i <3; i++){
//     console.log(i)
// }

// const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
// console.log(listeMots[0])
// console.log(listeMots[1])
// console.log(listeMots[2])

// for(let i = 0;  i < listeMots.length; i ++){
//     console.log(listeMots[i])
// }

// let i = 0

// while ( i < 3){
//     console.log(i)
//     i++
// }

// let phrase = prompt("Ecrivez Ok !")

// while( phrase !== "ok"){
//      phrase = prompt("Ecrivez Ok !")
// }

// console.log("Vous avez entré ok ")
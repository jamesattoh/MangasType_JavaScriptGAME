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
    //je récupère la zone d'insertion du score
    let spanScore = document.querySelector(".zoneScore span")
    //format du score grace à l'interpolation ``
    let affichageScore = ` ${resultat} / ${nombreMotsProposes}`
    //je place le score 
    spanScore.innerHTML = affichageScore
}

function afficherProposition(motAAfficher){
    let zoneProposition = document.querySelector(".zoneProposition")
    // let affichageProposition = `${motAAfficher}`
    // zoneProposition.innerHTML = affichageProposition
    zoneProposition.innerText = motAAfficher
}

function lancerJeu(){
    //je fais les initialisations
    let score = 0
    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    let i = 0

    //j'affiche le mot numero i tu tableau
    afficherProposition(listeMots[i])

    //j'ecoute l'evenement sur le bouton valider
    btnValiderMot.addEventListener("click", () => {

        /**je mets a jour le score du joueur; 1ere des choses a faire(avant le i++) sinon le score
        ne changera pas **/
        for(let i = 0; i < listeMots.length; i++){
            if( listeMots[i] === inputEcriture.value){
                score++
            }
        }

        i++
        afficherResultat(score, i)

        //j'ajoute le test pour vooir si le mot[i] vaut undefined
        if(listeMots[i] === listeMots[undefined]){
        
            //j'affiche le mot numero i tu tableau, donc apres incrementation
            afficherProposition("Le jeu est finito !")
            //je rends le bouton impossible a cliquer quand les propositiions sont terminees
            btnValiderMot.disabled = true

        }else{
            afficherProposition(listeMots[i])
        }

        //je vide le champ a chaque clique ou ajout
        inputEcriture.value = ``
    })

    afficherResultat(score, i)
}
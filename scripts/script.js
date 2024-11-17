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
    //la liste est par defaut listeMots et changera selon le choix du joueur
    let listeProposition = listeMots

    //j'affiche le mot numero i tu tableau
    afficherProposition(listeProposition[i])

    //j'ecoute l'evenement sur le bouton valider
    btnValiderMot.addEventListener("click", () => {
        /**je mets a jour le score du joueur; 1ere des choses a faire(avant le i++) sinon le score
        ne changera pas **/
        for(let i = 0; i < listeProposition.length; i++){
            if( listeProposition[i] === inputEcriture.value){
                score++
            }
        }

        i++
        afficherResultat(score, i)

        //j'ajoute le test pour vooir si le mot[i] vaut undefined
        if(listeProposition[i] === listeProposition[undefined]){
            //j'affiche le mot numero i tu tableau, donc apres incrementation
            afficherProposition("Le jeu est finito !")
            //je rends le bouton impossible a cliquer quand les propositiions sont terminees
            btnValiderMot.disabled = true
        }else{
            afficherProposition(listeProposition[i])
        }

        //je vide le champ a chaque clique ou ajout
        inputEcriture.value = ``
    })

    //je recupere les boutons radio
    let listeBtnRadio = document.querySelectorAll(".optionSource input")
    //je parcours la liste
    for(let j = 0; j < listeBtnRadio.length; j++){
        //j'ecoute le changement, avec la variable event, je reconnais l'evenement qui vient de se produire
        listeBtnRadio[j].addEventListener("change", (event) => {
            console.log(event.target.value)
            //j'attribue la liste qu'il faut seloon le choix du joueur
            if( event.target.value === "1"){
                listeProposition = listeMots
            }else{
                listeProposition = listePhrases
            }
            //j'affiche directement la proposition suivant le changement du choix
            afficherProposition(listeProposition[i])
        })
    }
    afficherResultat(score, i)
}
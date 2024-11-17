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

/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score de ${score} sur le site d'Azertype !`
    location.href = mailto
}


function validerNom(nomBalise){
    //je procede a la verification de deux caracteres au minimum
    if(nomBalise.value.length >= 2){
        return true
    }
    return false
       
}

function validerEmail(emailBalise){
    //j'utilise une expression reguliere : les 2 \ pour signifier que je veux exactement le point .
    let baliseRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    //on passe a la verification
    if(baliseRegExp.test(emailBalise.value)){
        return true
    }
    return false
    
}

function lancerJeu(){
    
    //je fais les initialisations
    initAddEventListenerPopup()
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

    let form = document.querySelector("form")
    //j'ecoute l'evenement submit
    form.addEventListener("submit", (event) => {
        //je previens le comportement par defaut pour eviter le comportement de la page
        event.preventDefault()
        //je recupere les valeurs des champs presents
        let baliseNom = document.getElementById("nom")
        let sujet = baliseNom.value

        let baliseEmail = document.getElementById("email")
        let message = baliseEmail.value

        let scoreEmail = `${score} / ${i}`
       // afficherEmail(sujet, message, scoreEmail)

        console.log(validerNom(baliseNom))
        console.log(validerEmail(baliseEmail))

        if((validerNom(baliseNom) && validerEmail(baliseEmail )) === true){

            afficherEmail(sujet, message, scoreEmail)
        }else{
            console.error("c'est une error")
        }

    })


    afficherResultat(score, i)
}
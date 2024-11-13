const listeMots = ["Cachalot", "Pétunia", "Serviette"]

const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"];

let score = 0

let choix =  prompt("Entrer ce que vous voulez entre 'mots' ou 'phrases' : ")

while( choix !== "mots" && choix !== "phrases") {

    choix =  prompt("Entrer ce que vous voulez entre mots ou phrases")
}

if( choix === "mots"){
    
    for(let i = 0; i < listeMots.length; i++){
        let motUtilisateur = prompt("Entrez le nom : " + listeMots[i])
    
        if (motUtilisateur === listeMots[i]) {
            score++
        }
    
    }

    console.log("Le score final est de " + score + " sur " + listeMots.length)

} else {

    for(let i = 0; i < listePhrases.length; i++){
        let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
    
        if (phraseUtilisateur === listePhrases[i]) {
            score++
        }
    
    }

    console.log("Le score final est de " + score + " sur " + listePhrases.length)
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
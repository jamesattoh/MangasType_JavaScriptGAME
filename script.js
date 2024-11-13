const listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

let premierNom =  prompt("Entrez le premier nom : " + listeMots[0] + " !")

if (premierNom === listeMots[0]) {
    score++
}

let deuxiemeNom =  prompt("Entrez le premier nom : " + listeMots[1] + " !")

if (deuxiemeNom === listeMots[1]) {
    score++
}


let troisiemeNom =  prompt("Entrez le premier nom : " + listeMots[2] + " !")

if (troisiemeNom === listeMots[2]) {
    score++
}

console.log("Le score final est de " + score + " sur 3")

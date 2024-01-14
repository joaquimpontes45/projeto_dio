let nomeDoHeroi = "Kallistor";
let xpDoHeroi = 0;
let classeDoHeroi = "";  


while (xpDoHeroi <= 7000) {
   
    if (xpDoHeroi <= 1000) {
        classeDoHeroi = "Ferro";
    } else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
        classeDoHeroi = "Bronze";
    } else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
        classeDoHeroi = "Prata";
    } else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
        classeDoHeroi = "Ouro";
    } else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
        classeDoHeroi = "Platina";
    } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
        classeDoHeroi = "Ascendente";
    } else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
        classeDoHeroi = "Imortal";
    } else if(xpDoHeroi >=10001 ){
        classeDoHeroi = "Radiante";
    }
    
    xpDoHeroi += 500;
}

// Exiba a mensagem final
console.log("O Herói com o nome de  " + nomeDoHeroi + " está no nível de " + classeDoHeroi);

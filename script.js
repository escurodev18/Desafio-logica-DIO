const nameHeroi = document.querySelector("#send");
nameHeroi.addEventListener("click", function(e) {
    e.preventDefault();

    const informacoes = document.querySelector("#nomeHeroi", "#xpHeroi");

    const heroi = nomeHeroi.value;
    const xp =parseInt(xpHeroi.value);

    console.log("O nome do herói é "+heroi)
    console.log("Experiência: "+ xp+"xp")

    if (xp <= 1000 ){
        console.log("O herói de nome "+ heroi +" está no nível "+xp+"xp"+" portanto é Ferro")
    }
    else if (xp > 1000 && xp <= 2000){
        console.log("O herói de nome "+ heroi +" está no nível "+xp+"xp"+" portanto é Bronze")
    }
    else if (xp > 2000 && xp <= 5000){
        console.log("O herói de nome "+ heroi +" está no nível "+xp+"xp"+" portanto é Prata")
    }
    else if (xp > 5000 && xp <= 6000){
        console.log("O herói de nome "+ heroi +" está no nível "+xp+"xp"+" portanto é Ouro")
    }else if (xp > 6000 && xp <= 7000){
        console.log("O herói de nome "+ heroi +" está no nível "+xp+"xp"+" portanto é Platina")
    }else if (xp > 7000 && xp <= 8000){
        console.log("O herói de nome "+ heroi +" está no nível "+xp+"xp"+" portanto é Ascendente")
    }else if (xp > 8000 && xp <= 9000){
        console.log("O herói de nome "+ heroi +" está no nível "+xp+"xp"+" portanto é Imortal")
    }
    else{
        console.log("Radiante")
    }
});


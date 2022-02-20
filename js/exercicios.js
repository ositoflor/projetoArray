function resposta1(){
    let resp = $("#resposta").val()
    if(resp === "carros[1]"){
        $("#btn-proximo1").removeClass("sumir-btn");
        $("#result").html("Parabéns você acertou!! 🤩🤩");
    } else {
        return $("#result").html("Poxa não acertou  😔😔 tente novamente.");
    }
}


function resposta2(){
    let resp = $("#resposta").val()
    if(resp === "frutas.pop()"){
        $("#btn-proximo1").removeClass("sumir-btn");
        $("#result").html("Parabéns você acertou!! 🤩🤩");
    } else {
        return $("#result").html("Poxa não acertou 😔😔 tente novamente.");
    }
}


function resposta3(){
    let resp = $("#resposta").val()
    if(resp === ">="){
        $("#btn-proximo1").removeClass("sumir-btn");
        $("#result").html("Parabéns você acertou!! 🤩🤩");
    } else {
        return $("#result").html("Poxa não acertou 😔😔 tente novamente.");
    }
}
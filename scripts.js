function selecionadoP(principal){

     const ativo = document.querySelector(".principal .selected");

     if(ativo !== null){
        ativo.classList.remove("selected");
     }

    const select = document.querySelector(principal);

    select.classList.add("selected");

    if(document.querySelectorAll('.selected').length === 3){

        document.querySelector(".botao").classList.add("finalizar")
        document.querySelector(".botao").removeAttribute("disabled");
        document.querySelector(".botao").innerHTML = "Finalizar Pedido";
       }

}
function selecionadoB(bebida){

    const ativo = document.querySelector(".bebida .selected");

    if(ativo !== null){
       ativo.classList.remove("selected");
    }

   const select = document.querySelector(bebida);

   select.classList.add("selected");

   if(document.querySelectorAll('.selected').length === 3){

    document.querySelector(".botao").classList.add("finalizar")
    document.querySelector(".botao").removeAttribute("disabled");
    document.querySelector(".botao").innerHTML = "Finalizar Pedido";
   }
}
function selecionadoS(sobremesa){

    const ativo = document.querySelector(".sobremesa .selected");

    if(ativo !== null){
       ativo.classList.remove("selected");
    }

   const select = document.querySelector(sobremesa);

   select.classList.add("selected");

   if(document.querySelectorAll('.selected').length === 3){

    document.querySelector(".botao").classList.add("finalizar")
    document.querySelector(".botao").removeAttribute("disabled");
    document.querySelector(".botao").innerHTML = "Finalizar Pedido";
   }
}

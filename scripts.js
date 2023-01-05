function selecionadoP(principal){

     const ativo = document.querySelector(".principal .selected");

     if(ativo !== null){
        ativo.classList.remove("selected");
     }

    const select = document.querySelector(principal);

    select.classList.add("selected");

     const contem = select.classList.contain("selected");
     if(contem === true){
        select.classList.toggle("selected");
     }
}
function selecionadoB(bebida){

    const ativo = document.querySelector(".bebida .selected");

    if(ativo !== null){
       ativo.classList.remove("selected");
    }

   const select = document.querySelector(bebida);

   select.classList.add("selected");
}
function selecionadoS(sobremesa){

    const ativo = document.querySelector(".sobremesa .selected");

    if(ativo !== null){
       ativo.classList.remove("selected");
    }

   const select = document.querySelector(sobremesa);

   select.classList.add("selected");
}

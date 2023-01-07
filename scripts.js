function selecionadoP(principal){

     const ativo = document.querySelector(".principal .selected");

     if(ativo !== null){
        ativo.classList.remove("selected");
     }

    const select = document.querySelector(principal);

    select.classList.toggle("selected");

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

   select.classList.toggle("selected");

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

   select.classList.toggle("selected");


   if(document.querySelectorAll('.selected').length === 3){

    document.querySelector(".botao").classList.add("finalizar")
    document.querySelector(".botao").removeAttribute("disabled");
    document.querySelector(".botao").innerHTML = "Finalizar Pedido";
   }
}

function confirmarPedido(hidden, central, header, footer){

    const pedidoP = document.querySelector('.nomeP');
    const textoP = document.querySelector('.principal .selected h2').innerHTML;

    const totalP = document.querySelector('.valorP').innerHTML;
    const valorP = document.querySelector('.principal .selected .valor').innerHTML;

    const pedidoB = document.querySelector('.nomeB');
    const textoB = document.querySelector('.bebida .selected h2').innerHTML;

    const pedidoS = document.querySelector('.nomeS');
    const textoS = document.querySelector('.sobremesa .selected h2').innerHTML;

    pedidoP.innerHTML = `${textoP}`;
    totalP.innerHTML = `${valorP}`;
    pedidoB.innerHTML = `${textoB}`;
    pedidoS.innerHTML = `${textoS}`;

    const aside = document.querySelector('aside');

    aside.classList.remove('hidden');

    const blurcentral = document.querySelector('.central');

    blurcentral.classList.add('blurout');

    const blurheader = document.querySelector('header');

    blurheader.classList.add('blurout');

    const blurfooter = document.querySelector('footer');

    blurfooter.classList.add('blurout');

    
}


function setHidden(){
    const toHide = document.querySelector('aside'); 

    toHide.classList.add('hidden');

    const unblurcentral = document.querySelector('.central');

    unblurcentral.classList.remove('blurout');

    const unblurheader = document.querySelector('header')

    unblurheader.classList.remove('blurout');

    const unblurfooter = document.querySelector('footer')

    unblurfooter.classList.remove('blurout')
}

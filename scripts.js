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
    document.querySelector(".botao").innerHTML = "Fechar Pedido";
   }
}

function confirmarPedido(){

    const pedidoP = document.querySelector('.nomeP');
    const textoP = document.querySelector('.principal .selected h2').innerHTML;

    const totalP = document.querySelector('.valorP');
    const valorP = document.querySelector('.principal .selected .valor').innerHTML;

    const pedidoB = document.querySelector('.nomeB');
    const textoB = document.querySelector('.bebida .selected h2').innerHTML;

    const totalB = document.querySelector('.valorB');
    const valorB = document.querySelector('.bebida .selected .valor').innerHTML;

    const pedidoS = document.querySelector('.nomeS');
    const textoS = document.querySelector('.sobremesa .selected h2').innerHTML;

    const totalS = document.querySelector('.valorS');
    const valorS = document.querySelector('.sobremesa .selected .valor').innerHTML;

    const totalTotal = document.querySelector('.valorT');

    const precoP = valorP;
    const precoP2 = precoP.split(" ");
    const precoP3 = precoP2.pop();
    const precoP4 = precoP3;toString();
    const precoPF = +parseFloat(precoP4, 10);

    const precoB = valorB;
    const precoB2 = precoB.split(" ");
    const precoB3 = precoB2.pop();
    const precoB4 = precoB3.toString();
    const precoBF = +parseFloat(precoB4, 10);

    const precoS = valorS;
    const precoS2 = precoS.split(" ");
    const precoS3 = precoS2.pop();
    const precoS4 = precoS3.toString();
    const precoSF = +parseFloat(precoS4, 10);

    pedidoP.innerHTML = `${textoP}`;
    totalP.innerHTML = `${valorP}`;
    pedidoB.innerHTML = `${textoB}`;
    totalB.innerHTML = `${valorB}`;
    pedidoS.innerHTML = `${textoS}`;
    totalS.innerHTML = `${valorS}`;
    const emNumeros = (precoPF+precoBF+precoSF);
    totalTotal.innerHTML = emNumeros.toFixed(2);

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

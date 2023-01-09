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
   // transpoe dados para a tabela:
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
   // calcula o preço total   
    const fixed = 2;
    const decimal = 10;
    const precoP = valorP;
    const precoP2 = precoP.split(" ");
    const precoP3 = precoP2.pop();
    const precoP4 = precoP3.toString();
    const precoPF = +parseFloat(precoP4, decimal);

    const precoB = valorB;
    const precoB2 = precoB.split(" ");
    const precoB3 = precoB2.pop();
    const precoB4 = precoB3.toString();
    const precoBF = +parseFloat(precoB4, decimal);

    const precoS = valorS;
    const precoS2 = precoS.split(" ");
    const precoS3 = precoS2.pop();
    const precoS4 = precoS3.toString();
    const precoSF = +parseFloat(precoS4, decimal);

         pedidoP.innerHTML = `${textoP}`;
         totalP.innerHTML = `R$ ${valorP}`;
         pedidoB.innerHTML = `${textoB}`;
         totalB.innerHTML = `R$ ${valorB}`;
         pedidoS.innerHTML = `${textoS}`;
         totalS.innerHTML = `R$ ${valorS}`;
      const emNumeros = (precoPF+precoBF+precoSF);
         totalTotal.innerHTML = emNumeros.toFixed(fixed);
   // coleta os dados do cliente
      const nomeCliente = prompt('Seu nome completo, por favor.');

         document.querySelector('.nomeC').innerHTML = nomeCliente;

      const endCliente = prompt('Endereço de entrega, por favor.');

         document.querySelector('.enderecoC').innerHTML = endCliente;

   //faz o resumo parecer e esmaece o fundo
    const aside = document.querySelector('aside');

      aside.classList.remove('hidden');

    const blurcentral = document.querySelector('.central');

      blurcentral.classList.add('blurout');

    const blurheader = document.querySelector('header');

      blurheader.classList.add('blurout');

    const blurfooter = document.querySelector('footer');

      blurfooter.classList.add('blurout');

    //prepara o link de envio

    const prato = document.querySelector('.nomeP').innerHTML;
    const bebida = document.querySelector('.nomeB').innerHTML;
    const sobremesa = document.querySelector('.nomeS').innerHTML;
    const totalValor = document.querySelector('.valorT').innerHTML;
 
    const mensagemPadrao = encodeURIComponent(
   `Olá, gostaria de fazer o pedido:
   - Prato: ${prato}
   - Bebida: ${bebida}
   - Sobremesa: ${sobremesa}
   - Nome: ${nomeCliente}
   - Endereço: ${endCliente}
   Total: R$ ${totalValor}`
   );

   document.querySelector('a').setAttribute("href", `https://wa.me/5514998430701?text=${mensagemPadrao}`);
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
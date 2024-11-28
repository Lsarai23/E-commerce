import { catalogo,salvarLocalStorage,lerLocalStorage } from "./utilidades";

const idQtdProdutos= lerLocalStorage("carrinho") ?? {};

function abrirCarrinho(){
    document.getElementById("carrinho").classList.remove("right-[-360px]");
    document.getElementById("carrinho").classList.add("right-[0px]");
    renderizarPT();
}
function fecharCarrinho(){
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-360px]");
}

function irParaCheckout(){
    if(Object.keys(idQtdProdutos).length===0){
        alert("Insira algum produto antes de finalizar a compra.")
        return;
    }
    window.location.href=window.location.origin+"/checkout.html";
}

export function inicializarCarrinho(){
    const botaoFechar=document.getElementById("fechar-carrinho");
    const botaoAbrir=document.getElementById("abrir-carrinho");
    const botaoFinalizar=document.getElementById("finalizar-compra");

    botaoFechar.addEventListener("click",fecharCarrinho);
    botaoAbrir.addEventListener("click",abrirCarrinho);
    botaoFinalizar.addEventListener("click",irParaCheckout);
}

function atualizarQtd(idProduto){
    document.getElementById(`quantidade-${idProduto}`).innerText=idQtdProdutos[idProduto];
}

function incrementarQtd(idProduto){
    idQtdProdutos[idProduto]++;
    salvarLocalStorage("carrinho",idQtdProdutos);
    renderizarPT();
    atualizarQtd(idProduto);
}

function decrementarQtd(idProduto){
    if(idQtdProdutos[idProduto]===1){
        removerDoCarrinho(idProduto);
        return;
    }
    idQtdProdutos[idProduto]--;
    salvarLocalStorage("carrinho",idQtdProdutos);
    renderizarPT();
    atualizarQtd(idProduto);
}

function removerDoCarrinho(idProduto){
    delete idQtdProdutos[idProduto];
    salvarLocalStorage("carrinho",idQtdProdutos);
    renderizarPT();
    renderizarCarrinho();
}

function desenharCarrinho(idProduto){
    const produto=catalogo.find(p => p.id===idProduto);
    const containerProdCarrinho=document.getElementById("produtos-carrinho");

    const elementoArticle=document.createElement("article");
    const articleClasses=["flex","bg-orange-100", "rounded-lg", "p-1", "relative"];

    for(const classes of articleClasses){
        elementoArticle.classList.add(classes);
    }

    const cartaoCarrinho=`
    <button id="remover-produto-${produto.id}" class="text-slate-600 p-1 hover:text-red-900"><i class="fa-solid fa-circle-xmark"></i></button>
    <img src="./assets/img/${produto.imgArquivo}" class="h-24 rounded-lg" alt="${produto.alt}">
    <div class="p-1 flex flex-col justify-between">
    <p class="text-slate-900 text-sm"> ${produto.nome}</p>
    <p class="text-slate-400 text-xs">${produto.tipo}</p>
    <p class="text-green-600 text-lg">$${produto.preco}</p>
  </div>
  <div class="flex text-slate-900 items-end absolute bottom-0 right-2">
  <button id="decrementar-produto-${produto.id}"><i class="fa-solid fa-square-minus"></i></button>
  <p id="quantidade-${produto.id}" class="ml-2">${idQtdProdutos[produto.id]}</p>
  <button id="incrementar-produto-${produto.id}" class="ml-2"><i class="fa-solid fa-square-plus"></i></button>
     
  </div>
  `;
  elementoArticle.innerHTML=cartaoCarrinho;
  containerProdCarrinho.appendChild(elementoArticle); 

  document.getElementById(`decrementar-produto-${produto.id}`).addEventListener("click",()=>decrementarQtd(produto.id));
  document.getElementById(`incrementar-produto-${produto.id}`).addEventListener("click",()=>incrementarQtd(produto.id));
  document.getElementById(`remover-produto-${produto.id}`).addEventListener("click",()=>removerDoCarrinho(produto.id));
}

export function renderizarCarrinho(){
    const containerProdutosCarrinho=document.getElementById("produtos-carrinho");
    containerProdutosCarrinho.innerHTML="";
    for(const id in idQtdProdutos){
        desenharCarrinho(id);

    }
}
export function renderizarPT(){
    const precoT=document.getElementById("preco-total");
    let somaPT=0;
    for(const idAdd in idQtdProdutos){
        somaPT+=catalogo.find((p)=>p.id===idAdd).preco*idQtdProdutos[idAdd];
    }
    document.getElementById("preco-total").innerHTML=`<strong>Preço Total: $${somaPT}</strong>`;
}

export function adicionarCarrinho(idProduto){
    if(idProduto in idQtdProdutos){
        incrementarQtd(idProduto);
        return;
    }
    idQtdProdutos[idProduto]=1;
    salvarLocalStorage("carrinho",idQtdProdutos);
    renderizarPT();
    desenharCarrinho(idProduto);
    
}

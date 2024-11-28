export const catalogo=[{
    id:"1",
    nome:"EA FC 24",
    tipo:["Futebol"],
    classe:"futebol",
    alt:"EA FC 24",
    preco:120,
    imgArquivo:"ea-sports-fc-24-capa.webp",
},
{
    id:"2",
    nome:"Valorant",
    tipo:["PVP","Tiro"],
    classe:"pvp tiro",
    alt:"Valorant",
    preco:5,
    imgArquivo:"9316-valorant-pc-capa-1.jpg",
},{
    id:"3",
    nome:"Fortnite",
    tipo:["Tiro","Battle Royale"],
    classe:"tiro battleroyale",
    alt:"Fortnite",
    preco:10,
    imgArquivo:"fortnite.jpg",
},{
    id:"4",
    nome:"Rocket League",
    tipo:["PVP","Futebol"],
    classe:"pvp futebol",
    alt:"Rocket League",
    preco:40,
    imgArquivo:"Rocket_League.jpg",
},{
    id:"5",
    nome:"GTA V",
    tipo:["Mundo Aberto","Tiro"],
    classe:"mundoaberto tiro",
    alt:"GTA V",
    preco:100,
    imgArquivo:"gta.webp",
},
{
    id:"6",
    nome:"Battlefield V",
    tipo:["Tiro","Futurismo"],
    classe:"tiro futurismo",
    alt:"Battlefield V",
    preco:230,
    imgArquivo:"bf.jpeg",
},
{
    id:"7",
    nome:"Final Fantasy",
    tipo:["RPG","Anime"],
    classe:"rpg anime",
    alt:"FF",
    preco:210,
    imgArquivo:"ff.webp",
},{
    id:"8",
    nome:"God Of War",
    tipo:["Guerra","Deuses"],
    classe:"guerra deuses",
    alt:"GOW",
    preco:250,
    imgArquivo:"gow.webp",
},{
    id:"9",
    nome:"Spider Man: Miles Morales",
    tipo:["Luta","Heróis"],
    classe:"luta herois",
    alt:"SPD-MM",
    preco:179,
    imgArquivo:"mm.webp",
},{
    id:"10",
    nome:"Red Dead Redemption 2",
    tipo:["Mundo Aberto","Tiro"],
    classe:"mundoaberto tiro",
    alt:"RDR 2",
    preco:160,
    imgArquivo:"rdr2.jpeg",
},
{
    id:"11",
    nome:"TitanFall 2",
    tipo:["Tiro","Máquinas","Futurismo"],
    classe:"tiro maquinas futurismo",
    alt:"TF2",
    preco:120,
    imgArquivo:"tf.avif",
},
{
    id:"12",
    nome:"Uncharted 4",
    tipo:["Tiro","Aventura"],
    classe:"tiro aventura",
    alt:"Uncharted 4",
    preco:130,
    imgArquivo:"unc.jpeg",
},
]

export function salvarLocalStorage(chave,info){
    localStorage.setItem(chave,JSON.stringify(info));
}

export function lerLocalStorage(chave){
    return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave){
    localStorage.removeItem(chave);
}

export function desenharCarrinhoComprar(idProduto,idContainer,quantidadeProd){
    const produto=catalogo.find(p => p.id===idProduto);
    const containerProdCarrinho=document.getElementById(idContainer);

    const elementoArticle=document.createElement("article");
    const articleClasses=["flex","bg-orange-100", "rounded-lg", "p-1", "relative","mb-2","w-96"];

    for(const classes of articleClasses){
        elementoArticle.classList.add(classes);
    }

    const cartaoCarrinho=`

    <img src="./assets/img/${produto.imgArquivo}" class="h-24 rounded-lg" alt="${produto.alt}">
    <div class="p-1 flex flex-col justify-between">
    <p class="text-slate-900 text-sm"> ${produto.nome}</p>
    <p class="text-slate-400 text-xs">${produto.tipo}</p>
    <p class="text-green-600 text-lg">$${produto.preco}</p>
  </div>
  <div class="flex text-slate-900 items-end absolute bottom-0 right-2">
  
  <p id="quantidade-${produto.id}" class="ml-2">${quantidadeProd}</p>
 
     
  </div>
  `;
  elementoArticle.innerHTML=cartaoCarrinho;
  containerProdCarrinho.appendChild(elementoArticle); 
}
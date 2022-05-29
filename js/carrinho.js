products = [
  { 
    id: 0, 
    name: "Naruto Shippuden: Ultimate Ninja Storm 2",  
    photo: "produto-1.png", 
    price: 20,
    quant: 1,
  },
  {
    id: 1,
    name: "Horizon Zero Dawn",
    photo: "produto-2.png",
    price: 45,
    quant: 1,
  },
  {
    id: 2,
    name: "Minecraft",
    photo: "produto-3.png",
    price: 15,
    quant: 1,
  },
  {
    id: 3,
    name: "dragon ball z kakarot",
    photo: "produto-4.png",
    price: 35,
    quant: 1,
  },
  {
    id: 4,
    name: "the elder scrolls v skyrim",
    photo: "produto-5.png",
    price: 30,
    quant: 1,
  },
  {
    id: 5,
    name: "Camiseta da DC",
    photo: "produto-6.png",
    price: 12,
    quant: 1,
  },
  {
    id: 6,
    name: "Camiseta do naruto",
    photo: "produto-7.png",
    price: 12,
    quant: 1,
  },
  {
    id: 7,
    name: "Camiseta",
    photo: "produto-8.png",
    price: 12,
    quant: 1,
  },
  {
    id: 8,
    name: "Camiseta",
    photo: "produto-9.png",
    price: 12,
    quant: 1,
  },
  {
    id: 9,
    name: "Camiseta do mario",
    photo: "produto-10.png",
    price: 12,
    quant: 1,
  },
  {
    id: 10,
    name: "",
    photo: "produto-11.png",
    price: 0,
    quant: 1,
  },
  {
    id: 11,
    name: "",
    photo: "produto-12.png",
    price: 0,
    quant: 1,
  },
  {
    id: 12,
    name: "",
    photo: "produto-13.png",
    price: 0,
    quant: 1,
  },
  {
    id: 13,
    name: "",
    photo: "produto-14.png",
    price: 0,
    quant: 1,
  },
  {
    id: 14,
    name: "",
    photo: "produto-15.png",
    price: 0,
    quant: 1,
  },
];

cart = [];
cartObj = [];

function addCart(n) {
  cart.push(n);
  cartObj = cart.map((e) => products.find((g) => g.id == e));
}

function li(txt) {
  el = document.createElement("li");
  el.innerHTML = txt;
  cartList.appendChild(el);
}

function liObj(n) {
  let prodFind = products.find((e) => e.id == n);
  li(prodFind.name + " - " + "R$" + prodFind.price + ",00");
}

function somar() {
  S = 0;
  let resultado = cartObj.map((a, b) => (S += a.price));
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").innerHTML =
    "<b>Total:</b> R$ " + S.toFixed() + ",00";
}

function quantidade() {
  Q = 0;
  let resultado1 = cartObj.map((a, b) => (Q += a.quant));
  document.getElementById("demo").innerHTML = "";
  document.getElementById("demo").innerHTML =
    "" +  Q.toFixed();
    
}

function limpar() {
  cartObj = [];
  cartList.innerHTML = "";
  somar();
  quantidade();
}

function adicionar(photo, name, price, id) {
  estrutura = `
        <div>
        
                <img src="${photo}" class="hvr-grow" >
                <div class="card-body">
                    <div class="card-names">
                    <h6 class="card-name">${name}</h6>
                    </div>
                <p class="card-price">R$${price}</p>
                <button onclick="liObj(${id}); addCart(${id});somar(); quantidade()" class="button">Comprar</button>
                </div>
        </div>
    `;

  div_produtos.innerHTML += estrutura;
}

products.map((products) =>
  adicionar(
    "imagens/Produtos/" + products.photo,
    products.name ,
    " " + products.price + ",00",
    products.id
  )
);
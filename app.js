const products = [
  {name:"Petek Bal", img:"Petek Bal.jpeg"},
  {name:"Süzme Bal", img:"Süzme bal.jpeg"},
  {name:"Kara Kovan Balı", img:"Kara Kovan Balı.jpeg"},
  {name:"Doğal Kaya Balı", img:"Doğal Kaya Balı.jpeg"},
  {name:"Yayla Kasnak Balı", img:"Yayla Kasnak Balı.jpeg"}
];

let selectedProduct="";
let selectedKG="";

const container = document.getElementById("products");

products.forEach(p=>{
  const card = document.createElement("div");
  card.className="card";

  card.innerHTML = `
    <img src="${p.img}">
    <h3>${p.name}</h3>
    <select onchange="selectProduct('${p.name}', this.value)">
      <option value="">KG Seç</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  `;

  container.appendChild(card);
});

function selectProduct(name,kg){
  selectedProduct = name;
  selectedKG = kg;
}

function orderNow(){
  if(!selectedProduct || !selectedKG){
    alert("Ürün ve KG seç!");
    return;
  }

  const msg = Merhaba, ${selectedKG} KG ${selectedProduct} siparişi vermek istiyorum.;
  window.open("https://wa.me/905449250253?text="+encodeURIComponent(msg));
}

function scrollToProducts(){
  document.getElementById("products").scrollIntoView({behavior:"smooth"});
}
const PRODUCTS = [
  { name: "Sweater Korea 1", price: 150000, img: "assets/svg/sweater1.svg" },
  { name: "Sweater Korea 2", price: 160000, img: "assets/svg/sweater2.svg" },
  { name: "Sweater Korea 3", price: 170000, img: "assets/svg/sweater3.svg" },
  { name: "Sweater Korea 4", price: 180000, img: "assets/svg/sweater4.svg" },
  { name: "Sweater Korea 5", price: 190000, img: "assets/svg/sweater5.svg" }
];

const container = document.getElementById("products");

PRODUCTS.forEach(item => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>Rp ${item.price.toLocaleString("id-ID")}</p>
    <button>+ Keranjang</button>
  `;
  container.appendChild(card);
});

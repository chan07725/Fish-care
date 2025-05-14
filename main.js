// Dog Care Products Data
const products = [
    { id: 1, name: "Imported Fish Tank", price: "Rs.5,000", img: "./tank.jpg" },
    { id: 2, name: "Internal Air Filter ", price: "Rs.800", img: "./intfilter.jpg" },
    { id: 3, name: "Aquariam Water Heater", price: "Rs.700", img: "./heater.jpg" },
    { id: 4, name: "Aquarium Light Set", price: "Rs.500", img: "./light.jpg" },
    { id: 5, name: "External Filter Set", price: "Rs.3,000", img: "./extfilter.jpg"},
    { id: 6, name: "Filter Media Set", price: "Rs.1,400 per kg", img: "./filtermedia.jpg"},
    { id: 7, name: "Decoration Rocks", price: "Rs.750 per pcs", img: "./decrock.jpg"},
    { id: 8, name: "Gravel For Aquarium", price: "Rs.100 per Kg", img: "./gravel.jpg"},
    { id: 9, name: "Aquarium Sand", price: "Rs.85 per kg", img: "./sand.jpg"},
    { id: 10, name: "Water Suction Pump ", price: "Rs.120", img: "./suction.jpg"},
    { id: 11, name: "Fishes Food", price: "Rs.200", img: "./food.jpg"},
    { id: 12, name: "Artificial Plants", price: "Rs.130 per pcs", img: "./plant.jpg"},
];

// Display Products
function displayProducts() {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";
    products.forEach(product => {
        const card = `
            <div class="col-md-3 mb-4">
                <div class="card shadow">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <button class="btn btn-custom" onclick="buyItem('${product.name}')">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function buyItem(itemName) {
    alert(`Thank you for buying ${itemName}! 🎉`);
}

// Show Thank You Alert & Reset Form
function showThankYou(event) {
    event.preventDefault();
    alert("Thank you for contacting us! 😊");
    document.querySelector("form").reset();
}

// Show Sections Dynamically
function showSection(section) {
    ["landing", "products", "about", "contact"].forEach(id => document.getElementById(id).classList.add("d-none"));
    document.getElementById(section).classList.remove("d-none");
    if (section === "products") displayProducts();
}

document.addEventListener("DOMContentLoaded", () => showSection('landing'));
// ===============================
// CAR EXPRESS CYPRUS
// EDIT THIS FILE TO ADD YOUR CARS
// ===============================

const WHATSAPP_NUMBER = "35796666511", "35797797907"; // <-- CHANGE THIS to your real WhatsApp number, digits only.

const cars = [
  {
    id: 1,
    make: "Mercedes-Benz",
    model: "Vito",
    year: 2015,
    price: "€25.500",
    mileage: "200,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "2.1 V6",
    power: "245 HP",
    drive: "RWD",
    image: "src/12c8c66d-16f6-4062-9a1b-fae0b22f2336.jpg",
    description: "Full white Mercedes Vito Premium class"
  },
  {
    id: 2,
    make: "Mercedes-Benz",
    model: "C63 S AMG",
    year: 2021,
    price: "€59,900",
    mileage: "36,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "4.0L V8",
    power: "510 HP",
    drive: "RWD",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
    description: "A powerful AMG performance car. Replace this with the actual specification and history."
  },
  {
    id: 3,
    make: "Range Rover",
    model: "Autobiography",
    year: 2020,
    price: "€69,900",
    mileage: "58,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "3.0L",
    power: "300 HP",
    drive: "AWD",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85",
    description: "Luxury Range Rover with premium specification. Replace this demo data with your actual vehicle."
  },
  {
    id: 4,
    make: "Porsche",
    model: "911 Carrera",
    year: 2021,
    price: "€109,900",
    mileage: "19,800 km",
    fuel: "Petrol",
    transmission: "PDK",
    engine: "3.0L",
    power: "385 HP",
    drive: "RWD",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
    description: "A premium Porsche 911. Replace the demo description and image with your own vehicle information."
  },
  {
    id: 5,
    make: "BMW",
    model: "X5 M Competition",
    year: 2023,
    price: "€96,500",
    mileage: "21,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "4.4L V8",
    power: "625 HP",
    drive: "AWD",
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=85",
    description: "High-performance luxury SUV. Replace the demo information with the real car."
  },
  {
    id: 6,
    make: "Mercedes-Benz",
    model: "G 63 AMG",
    year: 2022,
    price: "€159,900",
    mileage: "28,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "4.0L V8",
    power: "585 HP",
    drive: "AWD",
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=85",
    description: "Luxury performance SUV. Replace the demo information with the real vehicle."
  }
];

const grid = document.getElementById("carsGrid");
const emptyState = document.getElementById("emptyState");

function renderCars(filter = "all") {
  const filtered = filter === "all" ? cars : cars.filter(car => car.make === filter);
  grid.innerHTML = filtered.map(car => `
    <article class="car-card" data-id="${car.id}">
      <div class="car-img">
        <img src="${car.image}" alt="${car.make} ${car.model}" loading="lazy">
        <span class="car-tag">AVAILABLE</span>
      </div>
      <div class="car-info">
        <div class="car-make">${car.make} • ${car.year}</div>
        <div class="car-title">${car.model}</div>
        <div class="car-specs">
          <span>${car.mileage}</span><span>•</span><span>${car.fuel}</span><span>•</span><span>${car.transmission}</span>
        </div>
        <div class="car-bottom">
          <div class="car-price">${car.price}</div>
          <div class="view">VIEW DETAILS ↗</div>
        </div>
      </div>
    </article>
  `).join("");
  emptyState.style.display = filtered.length ? "none" : "block";
  document.querySelectorAll(".car-card").forEach(card => {
    card.addEventListener("click", () => openModal(Number(card.dataset.id)));
  });
}

function openModal(id) {
  const car = cars.find(c => c.id === id);
  if (!car) return;
  document.getElementById("modalImage").src = car.image;
  document.getElementById("modalImage").alt = `${car.make} ${car.model}`;
  document.getElementById("modalMake").textContent = `${car.make} • ${car.year}`;
  document.getElementById("modalTitle").textContent = car.model;
  document.getElementById("modalPrice").textContent = car.price;
  document.getElementById("modalDescription").textContent = car.description;
  document.getElementById("modalSpecs").innerHTML = [
    ["Mileage", car.mileage], ["Fuel", car.fuel], ["Transmission", car.transmission],
    ["Engine", car.engine], ["Power", car.power], ["Drive", car.drive]
  ].map(([k,v]) => `<div><b>${k}</b><br>${v}</div>`).join("");
  const text = `Hello CAR EXPRESS CYPRUS, I'm interested in the ${car.year} ${car.make} ${car.model} listed at ${car.price}.`;
  document.getElementById("modalWhatsApp").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  document.getElementById("carModal").classList.add("open");
  document.getElementById("carModal").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("carModal").classList.remove("open");
  document.getElementById("carModal").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderCars(button.dataset.filter);
  });
});

document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => document.querySelector(".nav-links").classList.remove("open"));
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const text = `Hello CAR EXPRESS CYPRUS!\n\nName: ${name}\nPhone: ${phone}\nRequest: ${message}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
});

document.getElementById("year").textContent = new Date().getFullYear();
renderCars();

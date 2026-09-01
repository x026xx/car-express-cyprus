const WHATSAPP_NUMBER = "35796666511";

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
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85"
],
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
  },
  { 
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
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
    id: 36,
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
    id: 37,
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
    id: 38,
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
    id: 39,
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
    id: 40,
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
    id: 41,
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
  }
];

const grid = document.getElementById("carsGrid");
const emptyState = document.getElementById("emptyState");

const CARS_PER_PAGE = 9;
let currentPage = 1;
let currentFilter = "all";

function renderCars(filter = currentFilter) {
  currentFilter = filter;

  const filtered = filter === "all"
    ? cars
    : cars.filter(car => car.make === filter);

  const totalPages = Math.ceil(filtered.length / CARS_PER_PAGE);

  if (currentPage > totalPages) {
    currentPage = totalPages || 1;
  }

  const start = (currentPage - 1) * CARS_PER_PAGE;
  const end = start + CARS_PER_PAGE;

  const pageCars = filtered.slice(start, end);

  grid.innerHTML = pageCars.map(car => `
    <article class="car-card" data-id="${car.id}">
      <div class="car-img">
        <img src="${car.image}" alt="${car.make} ${car.model}" loading="lazy">
        <span class="car-tag">AVAILABLE</span>
      </div>

      <div class="car-info">
        <div class="car-make">${car.make} • ${car.year}</div>

        <div class="car-title">${car.model}</div>

        <div class="car-specs">
          <span>${car.mileage}</span>
          <span>•</span>
          <span>${car.fuel}</span>
          <span>•</span>
          <span>${car.transmission}</span>
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
    card.addEventListener("click", () => {
      openModal(Number(card.dataset.id));
    });
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const pagination = document.getElementById("pagination");

  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }

  let html = "";

  html += `
    <button
      onclick="changePage(${currentPage - 1})"
      ${currentPage === 1 ? "disabled" : ""}
    >
      ←
    </button>
  `;

  for (let i = 1; i <= totalPages; i++) {
    html += `
      <button
        class="${i === currentPage ? "active" : ""}"
        onclick="changePage(${i})"
      >
        ${i}
      </button>
    `;
  }

  html += `
    <button
      onclick="changePage(${currentPage + 1})"
      ${currentPage === totalPages ? "disabled" : ""}
    >
      →
    </button>
  `;

  html += `
    <button
      onclick="changePage(${totalPages})"
      ${currentPage === totalPages ? "disabled" : ""}
    >
      Last
    </button>
  `;

  pagination.innerHTML = html;
}


function changePage(page) {
  currentPage = page;

  renderCars(currentFilter);

  document.getElementById("cars").scrollIntoView({
    behavior: "smooth",
    block: "start"
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

    document.querySelectorAll(".filter").forEach(b => {
      b.classList.remove("active");
    });

    button.classList.add("active");

    currentPage = 1;
    currentFilter = button.dataset.filter;

    renderCars(currentFilter);
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

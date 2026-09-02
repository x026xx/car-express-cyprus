const WHATSAPP_NUMBER = "35796666511";

const cars = [
  {
    id: 1,
    make: "Mercedes-Benz",
    model: "Vito",
    year: 2018,
    price: "€27.900",
    mileage: "180,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "2.1 V6",
    power: "245 HP",
    drive: "RWD",
    images: [
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788302841/photo_2026-09-02_00-39-15.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788345203/photo_2026-09-02_00-39-17.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788345299/photo_2026-09-02_00-39-18_2.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788345317/photo_2026-09-02_00-39-18.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788345342/photo_2026-09-02_00-39-19.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788345360/photo_2026-09-02_00-39-20.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788345391/photo_2026-09-02_00-39-21.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788345413/photo_2026-09-02_00-39-22.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788350054/photo_2026-09-02_13-53-59.jpg"
],
    description: "Full white Mercedes Vito Premium class"
  },
  {
    id: 2,
    make: "Mercedes-Benz",
    model: "E 220 AMG",
    year: 2015,
    price: "€17,900",
    mileage: "94,500 km",
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "2.1L",
    power: "175 HP",
    drive: "RWD",
    images: [
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788346775/photo_2026-09-02_12-55-40.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788346802/photo_2026-09-02_12-55-42.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788346821/photo_2026-09-02_12-55-44.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788346843/photo_2026-09-02_12-55-45.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788346867/photo_2026-09-02_12-55-46.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788346888/photo_2026-09-02_12-55-48.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788346915/photo_2026-09-02_12-55-49.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788346954/photo_2026-09-02_12-55-50.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788350054/photo_2026-09-02_13-53-59.jpg"
],
    description: "A powerful AMG performance car. Replace this with the actual specification and history."
  },
  {
    id: 3,
    make: "Mercedes-Benz",
    model: "Vito",
    year: 2015,
    price: "€24.900",
    mileage: "200,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "2.1 V6",
    power: "245 HP",
    drive: "RWD",
    images: [
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788349584/photo_2026-09-02_13-45-02.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788349707/photo_2026-09-02_13-45-03.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788349725/photo_2026-09-02_13-45-04.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788349745/photo_2026-09-02_13-45-05.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788349767/photo_2026-09-02_13-45-06.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788349787/photo_2026-09-02_13-45-07.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788349808/photo_2026-09-02_13-45-08.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788349827/photo_2026-09-02_13-45-09.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788349852/photo_2026-09-02_13-45-10.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788349899/photo_2026-09-02_13-45-11.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788349922/photo_2026-09-02_13-45-16.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788349947/photo_2026-09-02_13-45-17.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788349974/photo_2026-09-02_13-45-18.jpg",
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788350054/photo_2026-09-02_13-53-59.jpg"
],
    description: `Mercedes-Benz Vito 2.1119 Blue Tec SELECT Tourer G
Tronic+ RWD L2 Euro 6 LWB Auto

8 Seater, LWB, White, 7 Speed G Tronic Gearbox, Full Mercedes Benz Service History, 240k Miles, MOT Till March 2027, 2 Keys, 17 Inch Alloy Wheels, Cloth Interior, Advance On Board Computer with AM/FM Radio, AUX/Bluetooth Media Connectivity, Cruise Control, A/ C Climate Control, Front & Rear Electric Windows, Electric Folding Mirrors, Tyre Pressure Monitor, Reverse Camera.

A Very Rare To Find In Colour & Spec Being The SELECT
Model.

This Is The LONG WHEEL BASE So Very SPACIOUS & COMFORTABLE.

This Van Come Equipped With The Following:
FULL MB SERVICE HISTORY
LED/XENON FRONT & REAR LIGHTS
REVERSE CAMERA
FRONT & REAR DASH CAM (HARDWIRED)
FRONT & REAR PARKING SENSORS
17 INCH LOAD RATED WHEELS
AM/FM RADIO WITH BLUETOOTH
CONNECTIVITY
PIONEER AMP & SUBWOOFER
CRUISE CONTROL
A/C (AIR CONDITION)
REMOVABLE SEATS
ELECTRIC SLIDING DOORS
PLUS MORE`
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
    images: [
      "https://res.cloudinary.com/jvcb5pej/image/upload/v1788352674/placeholder.jpg"
],
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
    images: [
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=85",
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
    images: [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=85",
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
    images: [
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=85",
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
    images: [
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=85",
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
    images: [
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=85",
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
    drive: "RWD",
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
    drive: "RWD",
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
    description: "A powerful AMG performance car. Replace this with the actual specification and history."
  }
];

const grid = document.getElementById("carsGrid");
const emptyState = document.getElementById("emptyState");

const CARS_PER_PAGE = 9;
let currentPage = 1;
let currentFilter = "all";

let currentCar = null;
let currentImageIndex = 0;


// ===============================
// CARS
// ===============================

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
        <img
          src="${car.images[0]}"
          alt="${car.make} ${car.model}"
          loading="lazy"
        >
        <span class="car-tag">AVAILABLE</span>
      </div>

      <div class="car-info">

        <div class="car-make">
          ${car.make} • ${car.year}
        </div>

        <div class="car-title">
          ${car.model}
        </div>

        <div class="car-specs">
          <span>${car.mileage}</span>
          <span>•</span>
          <span>${car.fuel}</span>
          <span>•</span>
          <span>${car.transmission}</span>
        </div>

        <div class="car-bottom">
          <div class="car-price">
            ${car.price}
          </div>

          <div class="view">
            VIEW DETAILS ↗
          </div>
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


// ===============================
// PAGINATION
// ===============================

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


// ===============================
// GALLERY
// ===============================

function showGalleryImage() {
  if (!currentCar) return;

  const image = document.getElementById("modalImage");
  const counter = document.getElementById("galleryCounter");

  image.src = currentCar.images[currentImageIndex];

  image.alt =
    `${currentCar.make} ${currentCar.model}`;

  counter.textContent =
    `${currentImageIndex + 1} / ${currentCar.images.length}`;
}


function nextImage() {
  if (!currentCar) return;

  currentImageIndex++;

  if (currentImageIndex >= currentCar.images.length) {
    currentImageIndex = 0;
  }

  showGalleryImage();
}


function previousImage() {
  if (!currentCar) return;

  currentImageIndex--;

  if (currentImageIndex < 0) {
    currentImageIndex = currentCar.images.length - 1;
  }

  showGalleryImage();
}


// ===============================
// MODAL
// ===============================

function openModal(id) {
  const car = cars.find(c => c.id === id);

  if (!car) return;

  currentCar = car;
  currentImageIndex = 0;

  showGalleryImage();

  document.getElementById("modalMake").textContent =
    `${car.make} • ${car.year}`;

  document.getElementById("modalTitle").textContent =
    car.model;

  document.getElementById("modalPrice").textContent =
    car.price;

  document.getElementById("modalDescription").textContent =
    car.description;

  document.getElementById("modalSpecs").innerHTML = [
    ["Mileage", car.mileage],
    ["Fuel", car.fuel],
    ["Transmission", car.transmission],
    ["Engine", car.engine],
    ["Power", car.power],
    ["Drive", car.drive]
  ]
    .map(([k, v]) => `
      <div>
        <b>${k}</b><br>
        ${v}
      </div>
    `)
    .join("");

  const text =
    `Hello CAR EXPRESS CYPRUS, I'm interested in the ${car.year} ${car.make} ${car.model} listed at ${car.price}.`;

  document.getElementById("modalWhatsApp").href =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  document.getElementById("carModal").classList.add("open");

  document.getElementById("carModal")
    .setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}


function closeModal() {
  document.getElementById("carModal").classList.remove("open");

  document.getElementById("carModal")
    .setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}


// ===============================
// FILTERS
// ===============================

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


// ===============================
// CLOSE MODAL
// ===============================

document.querySelectorAll("[data-close]")
  .forEach(el => {
    el.addEventListener("click", closeModal);
  });


document.addEventListener("keydown", e => {

  if (e.key === "Escape") {
    closeModal();
  }

  if (e.key === "ArrowRight") {
    nextImage();
  }

  if (e.key === "ArrowLeft") {
    previousImage();
  }

});


// ===============================
// GALLERY BUTTONS
// ===============================

document.getElementById("galleryNext")
  .addEventListener("click", nextImage);

document.getElementById("galleryPrev")
  .addEventListener("click", previousImage);


// ===============================
// MOBILE MENU
// ===============================

document.querySelector(".menu-toggle")
  .addEventListener("click", () => {

    document.querySelector(".nav-links")
      .classList.toggle("open");

  });


document.querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener("click", () => {

      document.querySelector(".nav-links")
        .classList.remove("open");

    });

  });


// ===============================
// CONTACT FORM
// ===============================

document.getElementById("contactForm")
  .addEventListener("submit", e => {

    e.preventDefault();

    const name =
      document.getElementById("name").value.trim();

    const phone =
      document.getElementById("phone").value.trim();

    const message =
      document.getElementById("message").value.trim();

    const text =
      `Hello CAR EXPRESS CYPRUS!\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Request: ${message}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );

  });


// ===============================
// START
// ===============================

document.getElementById("year").textContent =
  new Date().getFullYear();

renderCars();

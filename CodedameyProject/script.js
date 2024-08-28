const foodItemsData = [
  {
    url: "https://content.codecademy.com/courses/freelance-1/unit-4/img-berryblitz.jpg",
    alt: "berryblitz",
    name: "Fall Berry Blitz Tea",
  },
  {
    url: "https://content.codecademy.com/courses/freelance-1/unit-4/img-spiced-rum.jpg",
    alt: "spiced rum",
    name: "Spiced Rum Tea",
  },
  {
    url: "https://content.codecademy.com/courses/freelance-1/unit-4/img-donut.jpg",
    alt: "donut",
    name: "Seasonal Donuts",
  },
  {
    url: "https://content.codecademy.com/courses/freelance-1/unit-4/img-donut.jpg",
    alt: "donut",
    name: "Myrite Ave Tea",
  },
  {
    url: "https://content.codecademy.com/courses/freelance-1/unit-4/img-bedford-bizarre.jpg",
    alt: "bedford",
    name: "Bedford bizarre Tea",
  },
];

let foodCourt = document.getElementById("food-court");

foodItemsData.map((items) => {
  let div = document.createElement("div");
  div.className = "food-items";
  div.innerHTML = `<img
    src=${items.url}
    alt=${items.alt}
    />
    <p>${items.name}</p>`;
  foodCourt.appendChild(div);
});

const address = [
  {
    main: "Downtown",
    locate: {
      line1: "384 West 4th St",
      line2: "Suite 108",
      line3: "Portland, Maine",
    },
  },
  {
    main: "East Bayside",
    locate: {
      line1: "3433 Phishermanis Avenue",
      line2: "(Northwest Corner)",
      line3: "Portland, Maine",
    },
  },
  {
    main: "Downtown",
    locate: {
      line1: "515 Crescent Avenue",
      line2: "Second Floor",
      line3: "Portland, Maine",
    },
  },
];

const locationAddress = document.getElementById("location-address");

address.map((item) => {
  let div = document.createElement("div");
  div.className = "address";
  div.innerHTML = `<h3>${item.main}</h3>
  <p>${item.locate.line1}</p>
  <p>${item.locate.line2}</p>
  <p>${item.locate.line3}</p>`;
  locationAddress.appendChild(div);
});

let button = document.getElementById("hello");

button.onclick = (e) => {
  console.log(e.timeStamp);
};

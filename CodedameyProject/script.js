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

console.log(foodCourt);

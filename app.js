// const heading = document.getElementById("main-heading");
// const header = document.getElementById("header");
// const basketHeading = document.getElementById("basket-heading");
// const thanks = document.getElementById("thanks");

// heading.textContent = "Fruit World";
// heading.style.color = "orange";

// header.style.backgroundColor = "green";
// header.style.borderBottom = "2px solid orange";

// basketHeading.style.color = "green";

// thanks.innerHTML = "<p>Please visit us again</p>";

// Task - 2
// const fruit = document.getElementsByClassName("fruit");
// fruit[2].style.backgroundColor = "yellow";

// fruit[0].style.fontWeight = "bold";
// fruit[1].style.fontWeight = "bold";
// fruit[2].style.fontWeight = "bold";
// fruit[3].style.fontWeight = "bold";

// Task - 3
// const fruits = document.getElementsByTagName("li");
// fruits[4].style.color = "blue";

// fruits[0].style.fontStyle = "italic";
// fruits[1].style.fontStyle = "italic";
// fruits[2].style.fontStyle = "italic";
// fruits[3].style.fontStyle = "italic";
// fruits[4].style.fontStyle = "italic";

// Task - 4
const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "center";

const fruitsList = document.querySelector(".fruits");
fruitsList.style.backgroundColor = "gray";
fruitsList.style.padding = "30px";
fruitsList.style.margin = "30px";
fruitsList.style.width = "50%";
fruitsList.style.borderRadius = "5px";
fruitsList.style.listStyle = "none";

const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.marginLeft = "30px";

const fruits = document.querySelectorAll(".fruit");
for (const fruit of fruits) {
  fruit.style.padding = "10px";
  fruit.style.margin = "10px";
  fruit.style.borderRadius = "5px";
}

const oddFruits = document.querySelectorAll(".fruit:nth-child(odd)");

for (const fruit of oddFruits) {
  fruit.style.backgroundColor = "lightgray";
}
// Write answer to the questions asked below:
basketHeading.style.color = "brown";

fruits[1].style.backgroundColor = "brown";
fruits[1].style.color = "white";

fruits[3].style.backgroundColor = "brown";
fruits[3].style.color = "white";

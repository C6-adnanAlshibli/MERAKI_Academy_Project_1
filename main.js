// at the start we must show the letters buttons

//
const body = document.querySelector("body");
// first div
const Sdiv = document.querySelector(".container");
const start = document.querySelector("#start");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const chooseBtn = document.querySelector(".chooseBtn");
const try1 = document.querySelector(".try");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let imgArr = [
  { step: "./images/1.png", id: 1 },
  { step: "./images/2.png", id: 2 },
  { step: "./images/3.png", id: 3 },
  { step: "./images/4.png", id: 4 },
  { step: "./images/5.png", id: 5 },
  { step: "./images/6.png", id: 6 },
];

const array = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let count = 0;
let count2 = 0;
array.forEach((element, index) => {
  const buttons = document.createElement("button");
  buttons.innerText = element;
  Sdiv.append(container2);
  container2.append(left);
  left.append(right);
  right.append(chooseBtn);
  chooseBtn.append(buttons);
  buttons.id = element;
  buttons.addEventListener("click", (e) => {
    if (choose.indexOf(e.target.id) !== -1) {
      buttons.style.backgroundColor = "blue";
      const span = document.querySelectorAll("span");
      // console.log("span",span.length)
      // span[word.indexOf(e.target.id)].innerText=(e.target.id);
      for (let i = 0; i < choose.length; i++) {
        if (e.target.id === choose[i]) {
          // console.log("span[i]",span[i],span)
          span[i].innerText = e.target.id;
          count2++;
        }
      }
      if (count2 === choose.length) {
        one.innerText = "";
        const image1 = document.createElement("img");
        image1.src = "./images/win.png";
        one.append(image1);
        con3.style.display = "block";
      }
    } else {
      one.innerText = "";
      const image = document.createElement("img");
      image.src = imgArr[count].step;
      one.append(image);
      count++;
    }
  });
});

const countries = ["SYRIA", "JORDAN"];
const random = () => {
  return countries[Math.floor(Math.random() * countries.length)];
};
const choose = random();


const play = () => {
  console.log(choose, "aaa");
  container1.style.display = "none";
  container2.style.display = "block";
  choose.split("").forEach((element, index) => {
    if (element !== " ") {
      const lines = document.createElement("span");
      lines.innerText = " __ ";
      lines.id = index;
      Sdiv.append(lines);
    }
  });
};
start.addEventListener("click", play);

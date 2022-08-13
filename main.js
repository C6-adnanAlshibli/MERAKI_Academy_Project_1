// at the start we must show the letters buttons

//

const array = [
  "A",
  "B",
  " C",
  " D",
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

array.forEach((e) => {
  const button = document.createElement("button");
  button.innerText = e;
  const body = document.querySelector("body");
  body.append(button);
});

const teams = ["barcelona", "madrid"];

const random = Math.floor(Math.random() * teams.length);
console.log(random);

teams.forEach((element) => {
  element.split("");
  const p = document.createElement("p");
  const body = document.querySelector("body");
  body.append(p);
//   for test
  console.log(p);
  // for test
  p.innerText = element;

  for(let i=0; i<element.length; i++){
    const lines=document.createElement('border');
    const body = document.queryCommandIndeterm('body');
    lines.innerText="__ "
    body.append(lines);
  }
});
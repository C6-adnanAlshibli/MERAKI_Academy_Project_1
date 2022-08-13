// at the start we must show the letters buttons

//
const body = document.querySelector("body");

const Sdiv = document.createElement('div');
const startDiv=document.querySelector('startDiv');
Sdiv.innerHTML='<h1>welcome for this game</h1>'

Sdiv.className='startDiv'
body.append(Sdiv);
const Sbtn= document.createElement('button');
Sbtn.className="startButton"
Sbtn.innerText='START';
start1=document.querySelector("startButton")
Sdiv.append(Sbtn)


console.log(start1,'adn',Sbtn);

// make another div and show it when click start button
const Giv = document.createElement('div');
Giv.innerHTML='<h1>choose from letters</h1> <div class="secondDiv"</div>'
Giv.style.display='none';
Giv.className='gameDiv'
body.append(Giv)
const gameDiv=document.querySelector('gameDiv')

Sbtn.addEventListener("click", () => {
  console.log("Profile picture has been hovered");
  Sdiv.style.display='none'
  Giv.style.display='block'
});

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
  p.innerText = element;
  
  for(let i=0; i<element.length; i++){
    const lines=document.createElement('border');
    const body = document.querySelector('body');
    lines.innerText="__ "
    body.append(lines);
  }
});



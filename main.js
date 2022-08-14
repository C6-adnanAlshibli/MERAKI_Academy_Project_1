// at the start we must show the letters buttons

//
const body = document.querySelector("body");
// first div
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

// console.log(start1,'adn',Sbtn);
// end of first div


// make another div and show it when click start button
// second div which name is Giv 
const Giv = document.createElement('div');
Giv.className='gameDiv';
Giv.innerHTML='<h1>ARAB COUNTRIES</h1> <div class="secondDiv" </div> <div class="buttonsChoose"> </div>'
Giv.style.display='none';
body.append(Giv)
const gameDiv=document.querySelector('gameDiv')
// end of second div
// third div to reload the page to try again the game
const thDiv = document.createElement('div');

Sbtn.addEventListener("click", () => {
  // console.log("Profile picture has been hovered");
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

const countries = ["syria", "jordan"];



const random = ()=>{
  return countries[Math.floor(Math.random()* countries.length)];
}
const choose=random();



countries.forEach((element) => {
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



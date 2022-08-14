// at the start we must show the letters buttons

//
const body = document.querySelector("body");
// first div
const Sdiv = document.querySelector('.container');
const start = document.querySelector('#start')
const container1 =document.querySelector('.container1')
const container2 =document.querySelector('.container2')
const chooseBtn = document.querySelector("#chooseBtn");
const try1 = document.querySelector(".try");
const one = document.querySelector('.one')
const two= document.querySelector('.two')
const left = document.querySelector(".left");
const right = document.querySelector(".right");





// Sdiv.className='startDiv'
// const startDiv=document.querySelector('.startDiv');
// Sdiv.innerHTML='<h1>welcome for this game</h1>'
// body.append(Sdiv);
// const Sbtn= document.createElement('button');
// Sbtn.className="startButton"
// Sbtn.innerText='START';
// start1=document.querySelector(".startButton")
// Sdiv.append(Sbtn)

// console.log(start1,'adn',Sbtn);
// end of first div
// const secondDiv=document.querySelector('.secondDiv');

// make another div and show it when click start button
// second div which name is Giv 
// const Giv = document.createElement('div');
// Giv.className='gameDiv';
// Giv.innerHTML='<h1>ARAB COUNTRIES</h1> <div class="secondDiv" </div> <div class="buttonsChoose"> </div>'
// Giv.style.display='none';
// body.append(Giv)
// const gameDiv=document.querySelector('.gameDiv')
// const buttonsChoose=document.querySelector('.buttonsChoose');
// end of second div

let imgArr = [ 
  {step: './images/1.png', id:1},
  {step: './images/2.png', id:2},
  {step: './images/3.png', id:3},
  {step: './images/4.png', id:4},
  {step: './images/5.png', id:5},
  {step: './images/6.png', id:6}

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
let count = 0
let count2 =0
array.forEach((ele,i) => {
  const button = document.createElement("button");
  button.innerText = ele;
  right.append(buttonsChoose)
  buttonsChoose.append(button);
  button.id=ele;
  button.addEventListener('click',(e)=>{
    if(choose.indexOf(e.target.id) !== -1){
      // change later 
      button.style.backgroundColor='red';
      const line=document.querySelectorAll('span');

      // i hate < & > 
      for(let i=0; i<choose.length; i++){
        if(e.target.id ===choose[i]){
          console.log(line);
          line[i].innerText=e.target.id;
          count2++;
        }
      }
      if(count2===choose.length){
        secondDiv.innerText='';
        const image=document.createElement('img');
        image.src='./images/win.png';
        secondDiv.append(image);
        Giv.style.display='block';
      }
    }else{
      container2.innerText='';
      const imges=document.createElement('img');
      imges.src=imgArr[count].step;
      secondDiv.append(imges);
      count++;
      gameDiv.style.display='block';
    }
    
  })
});

const countries = ["SYRIA", "JORDAN"];
const random = ()=>{
  return countries[Math.floor(Math.random()* countries.length)];
}
const choose=random();
//  third div

// const thDiv = document.createElement('div');
// const tryA= document.createElement('button');
// tryA.innerText='TRY AGAIN'
// thDiv.className='thirdDiv'
// thDiv.append(tryA);
// body.append(thDiv);
// const thirdDiv=document.querySelector('thirdDiv');

const play = ()=>{
  console.log(choose,'aaa');
  container1.style.display='none'
    container2.style.display='block'
choose.split('').forEach((element,index)=>{
  if(element !== " "){
    const lines = document.createElement('span');
    lines.innerText=" __ "
    lines.id=index;
    Sdiv.append(lines);
  }
})

}
start.addEventListener('click',play);
// Sbtn.addEventListener("click", () => {
//   // console.log("Profile picture has been hovered");
//   Sdiv.style.display='none'
//   Giv.style.display='block'
// });







// -----------------------------------------------------------------
// third div to reload the page to try again the game





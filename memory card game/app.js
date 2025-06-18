//creating simon game:
let gameseq = [];
let userseq = [];

let gamestart = false;
let level = 0;
let btn = ["red", "palvio", "aqua", "yellow"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (gamestart == false) {
    console.log("game started");
    gamestart = true;
    levelup();
  }
});
// making flash function to flash box/btn: bcoz user will also click the btn then box will reflash thats why we are making flash function to that task repetadly
function gameflash(btnele) {
  btnele.classList.add("flash");
  setTimeout(function () {
    btnele.classList.remove("flash");
  }, 250);
}
function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;
  //creat rand no. upto 3 for btn classes
  let randbtnindx = Math.floor(Math.random() * 4);
  let randbtncolor = btn[randbtnindx];
  let randbtn = document.querySelector(`.${randbtncolor}`);
  
  gameseq.push(randbtncolor);
  // console.log("game sequence",gameseq);
  gameflash(randbtn);
  // userclick();
  // checkans();
}
//STEP 2: user will click in the button and flash will occur
function userflash(btnele) {//this function is flash the button
  btnele.classList.add("user_flash");
  setTimeout(function () {
    btnele.classList.remove("user_flash");
  }, 250);
}
function checkans(indx){//this function checking that gamesequence flash and usersequence flash is equal or not
  // let indx = level - 1;
  if(gameseq[indx] === userseq[indx]){
    //game will 
    if(gameseq.length == userseq.length){
      
      setTimeout(() => {
        levelup();
        
      }, 1000);
    }
  }
  else{
    h2.innerHTML = `Game Over! your score is: ${level} <br>Press any to start the game`;
    restart();
    let body = document.querySelector('#body');
    body.classList.add('documentcolor');
    setTimeout(()=>{
      body.classList.remove('documentcolor');
    },250);
    
  }
}
//when ever user press the button this function will start 
function btnpress(){
  let clickbtn = this;
  userflash(clickbtn);

  let btncolor = clickbtn.getAttribute('id');
  userseq.push(btncolor);
  console.log(userseq);
  checkans(userseq.length - 1);//checking answer 
  // checkans();
}
let allbtn = document.querySelectorAll(".btn");//this variable store all buttons which have btn class
for (btns of allbtn) {//if we click on any button then eventlistener will happen
  btns.addEventListener("click",btnpress);
}
//fuction to restart the game
function restart(){
  gamestart = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
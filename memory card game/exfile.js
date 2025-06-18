function userflash(btnel) {
  btnel.classList.add("user_flash");
  setTimeout(() => {
    btnel.classList.remove("user_flash");
  }, 125);
}
// step 2:  click button then flash will ocur

function checkans(idx) {
  // let idx = level - 1;
  if ( userseq[idx]=== gameseq[idx] ) {
    if ( userseq.length == gameseq.length) {
      levelup();
    }
  } else {
    h2.innerText = "Game over";
  }
}
// user will click the button amoung four of them
function btnclick() {
      let clickbtn = this;
      userflash(clickbtn);

      clickbtncolor = clickbtn.getAttribute("id");
      userseq.push(clickbtncolor); //adding color to userseq array to compare
      console.log(userseq);
      checkans(userseq.length -1);
};
  let allbtn = document.querySelectorAll(".btn");
  for (btn of allbtn) {
    // console.log(btn);
    btn.addEventListener("click", btnclick);
  }
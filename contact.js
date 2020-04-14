function myLogic() {
  var myFname = document.getElementById("fnameTxt")
  var myLname = document.getElementById("lnameTxt")
  var myEmail = document.getElementById("emailTxt")


  if ((myEmail) && (myFname) && (myLname)) {
     if (sendEmail(myEmail.value)) {
        return `We can\'t wait to meet you ${myFname.value}!`;
     }
  }
  return `We can\'t wait to meet you ${myFname.value}!`;
}

//  Add listeners on page load
function onLoadPage() {
// document.querySelector("#start").innerText = "";

//  add enter-key listener
//
var stubKey = document.querySelector("input");
stubKey.addEventListener("keyup", (event)  => {
  if ( event.keyCode === 13 )
    document.querySelector("#result").innerText = myLogic();
  return false;
  });

//  add button listener
//
var stubBtn = document.querySelector("#go-stub");

stubBtn.addEventListener("click", (event)  => {
  document.querySelector("#result").innerText = myLogic();
  });
}

//  send the new contact information to the membership store
//
function sendEmail(w) {
                  
  return true; 
}



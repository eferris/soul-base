function myLogic() {
  var myCandidate = document.getElementById("inText")
  if (myCandidate) {
     if (isPalindrome(myCandidate.value)) {
        return `We can\'t wait to meet you ${myCandidate.value}!`;
     }
  }
  return `We can\'t wait to meet you ${myCandidate.value}!`;
}

//  Add listeners on page load
function onLoadPage() {
// document.querySelector("#start").innerText = "";

//  add enter-key listener
var stubKey = document.querySelector("input");

stubKey.addEventListener("keyup", (event)  => {
  if ( event.keyCode === 13 )
    document.querySelector("#result").innerText = myLogic();
  return false;
  });

//
//  add button listener
//
var stubBtn = document.querySelector("#go-stub");

stubBtn.addEventListener("click", (event)  => {
  document.querySelector("#result").innerText = myLogic();
  });
}

//
//
function isPalindrome(w) {
                  
  return true; 
}



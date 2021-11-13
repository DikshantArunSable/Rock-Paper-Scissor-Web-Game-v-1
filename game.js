alert('Win 5 consecutive times to be the WINNER ')
    
    var Tie="Its A Tie 🤝";
    var cwin="Computer Wins 🤖";
    var uwin="You win 😀"

    
    const options = document.querySelectorAll(".options");
    let pScore = 0;
    let cScore = 0;

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const pInput = this.textContent;
        navigator.vibrate(50);

        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        compareInputs(pInput, cInput);
        updateScore();
        if (checkWinner()) {
          pScore = cScore = 0;
          updateScore();
        }
      });
    });

    function compareInputs(pInput, cInput) {
      const currentMatch = `${pInput} vs ${cInput}`;

      // Tie check
      if (pInput === cInput) {
        //alert(`${currentMatch} is a Tie`);

        return        document.getElementById('status').innerHTML= Tie;
      }

      // Rock
      if (pInput === "Rock") {
        if (cInput === "Scissors") {
         // alert(`${currentMatch} = You Win`);
                  document.getElementById('status').innerHTML="You Win 😃";
                  pScore++;
        } else {
         // alert(`${currentMatch} = Computer Wins`); 
         
        document.getElementById('status').innerHTML= cwin;cScore++;
        }
      }
      // Paper
      else if (pInput === "Paper") {
        if (cInput === "Rock") {
         // alert(`${currentMatch} = You Win`); 
         document.getElementById('status').innerHTML= uwin;
                  pScore++;
        } else {
          //alert(`${currentMatch} = Computer Wins`);
          document.getElementById('status').innerHTML= cwin;cScore++;
        }
      }
      // Scissors
      else if (pInput === "Scissors") {
        if (cInput === "Paper") {
         // alert(`${currentMatch} = You Win`);
         document.getElementById('status').innerHTML= uwin;
                  pScore++;
        } else {
         // alert(`${currentMatch} = Computer Wins`); 
         document.getElementById('status').innerHTML= cwin;cScore++;
        }
      }
    }
    function updateScore() {
      document.getElementById("p-score").textContent = pScore;
      document.getElementById("c-score").textContent = cScore;
    }

    function checkWinner() {
      if (pScore === 5 || cScore === 5) {
        const winner =
          pScore === 5
            ? "You win the game! Congratulations! 🎉"
            : "Computer wins the game!🚫 Try again next time!";
        alert(winner);
        return true;
      }
      return false;
    }
    
    function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
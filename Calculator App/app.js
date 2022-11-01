// Grab text on screen display

const screenDisplay = document.getElementById("text");

// Grab all buttons

const btns = Array.from(document.querySelectorAll(".btn"));

// Using the map method to edit initial mark up

btns.map(function (btn) {
  // Adding click events to each buttons

  btn.addEventListener("click", function (e) {
    // Using the switch statement to focus on button area.

    switch (e.target.innerHTML) {
      // if button contains C, the screen should be returned to blank

      case "C":
        screenDisplay.innerHTML = "";

        // Break statement to prevent button from appearing on the screen

        break;

      // If button contains DEL, the last item should be removed.

      case "DEL":
        screenDisplay.innerHTML = screenDisplay.innerHTML.slice(0, -1);

        break;

      //Percentage calculation

      case "%":

        percentageCalculation()

        break;

      // Mathematical evaluation of items displayed on the screen

      case "=":
        screenDisplay.innerHTML = eval(screenDisplay.innerHTML);

        break;

      // Keep adding current item to the screen
 

      default:
        screenDisplay.innerHTML += e.target.innerHTML;
    }
  });
});

function percentageCalculation(){

  screenDisplay.innerHTML = screenDisplay.innerHTML/100

}



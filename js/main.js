//This is a self-invoking anonymous function
//also called an IIFE
//also called a module

(() => {
  // print ("some message");
  console.log("some message - from Javascript");

  //find the button element on the page by its ID with Javascript
  let theButton = document.quarrySelector("#myButton"),
      theHeading = document.quarrySelector('h1'),
      svgImage = document.quarrySelector('#svgGraphic');

//this function changes the heading text
  function changeText() {
    theHeading.textContent = "Hello there from the console";
  }

//log the id of the svg to the concole when a user hovers on it
  function logSVG() {
    console.log(this.id);
  }
  
  theButton.addEventListener("click", changeText);
  svgImage.addEventListener("mouseover", logSVG);
//document.quarrySelector('h1').textContent = "Hello there from the console";
})();

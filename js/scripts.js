$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    // Declare the variables
    let person1Input = "";
    let person2Input = "";
    let animalInput = "";
    let exclamationInput = "";
    let verbInput = "";
    let nounInput = ""; 

    // Put all the inputs into an array called inputs
    const inputs = ["#person1", "#person2", "#animal", "#exclamation", "#verb", "#noun"];

    // Use a for loop to grab the inputted value for each of the variables
    inputs.forEach(function(input) {
      let testResult = $(("input" + input)).val();
      console.log(testResult)
    });

    // What we're trying to do
    // Each one of the inputs are put into the spans

    // const words = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];

    // words.forEach(function(word) {
    //   $(".person1").text(word);
    // });

    // // $(".person1").text(person1Input);
    // // $(".person2").text(person2Input);
    // // $(".animal").text(animalInput);
    // // $(".exclamation").text(exclamationInput);
    // // $(".verb").text(verbInput);
    // // $(".noun").text(nounInput);

    // $("#story").show();
  });
});
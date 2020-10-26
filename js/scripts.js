$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const inputs = ["#person1", "#person2", "#animal", "#exclamation", "#verb", "#noun"];

    let newInputs = [];

    // For each input the user wrote down, grab its value
    inputs.forEach(function(input) {
      let userInput = $(("input" + input)).val();
      newInputs.push(userInput);
      // console.log(testResult)
    });

    let person1Input = newInputs[0];
    let person2Input = newInputs[1];
    let animalInput = newInputs[2];
    let exclamationInput = newInputs[3];
    let verbInput = newInputs[4];
    let nounInput = newInputs[5]; 

    // const words = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];

    const outputs = [".person1", ".person2", ".animal", ".exclamation", ".verb", ".noun"];
    outputs.forEach(function(output) {
      // $(".person1").text(newInput);
      $(output).text(person1Input);
    });

    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    $("#story").show();
  });
});
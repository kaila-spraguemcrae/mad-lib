$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const inputs = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    let newInputs = [];

    inputs.forEach(function(input) {
      let userInput = $(("input#" + input)).val();
      newInputs.push(userInput);
    });

    let indexNum = 0;

    inputs.forEach(function(input){
      $("." + input).text(newInputs[indexNum]);
      indexNum += 1;
    });

    $("#story").show();
  });
});
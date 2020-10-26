$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const inputs = ["#person1", "#person2", "#animal", "#exclamation", "#verb", "#noun"];

    let newInputs = [];

    inputs.forEach(function(input) {
      let userInput = $(("input" + input)).val();
      newInputs.push(userInput);
    });

    $(".person1").text(newInputs[0]);
    $(".person2").text(newInputs[1]);
    $(".animal").text(newInputs[2]);
    $(".exclamation").text(newInputs[3]);
    $(".verb").text(newInputs[4]);
    $(".noun").text(newInputs[5]);

    $("#story").show();
  });
});
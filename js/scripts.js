//FRONT END
$(document).ready(function() {
  var favoriteThings = [];
  var newArray = [];
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var thingOne = $("#thing1").val();
    favoriteThings.push(thingOne);
    var thingTwo = $("#thing2").val();
    favoriteThings.push(thingTwo);
    var thingThree = $("#thing3").val();
    favoriteThings.push(thingThree);
    var thingFour = $("#thing4").val();
    favoriteThings.push(thingFour);
    var thingFive = $("#thing5").val();
    favoriteThings[4] = thingFive;
    $(".thingOne").text(favoriteThings[0]);
    $(".thingTwo").text(favoriteThings[1]);
    $(".thingThree").text(favoriteThings[2]);
    $(".thingFour").text(favoriteThings[3]);
    $(".thingFive").text(favoriteThings[4]);

    newArray.push(favoriteThings[1]);
    newArray.push(favoriteThings[0]);
    newArray.push(favoriteThings[2]);

    $(".newArrayTwo").text(newArray[0]);
    $(".newArrayOne").text(newArray[1]);
    $(".newArrayThree").text(newArray[2]);

  });
});

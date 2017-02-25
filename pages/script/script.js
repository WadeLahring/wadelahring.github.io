

$(document).ready(function() {

  function changeScreen(fromID) {
    // remove all the clip art //
    $('#about_screen_container').show();



    //if (fromID == "home") {
      //$('#home_layout').hide();
    //  $('#about_screen_container').show();
    //} else {
    //  $('#about_screen_container').hide();
    //  $('#home_layout').show();
  });




});

}
$(document).ready(function() {
  alert("My First Jquery Test");

  $('#about').click(changeScreen('home') {
    alert("About click has been confirmed");
  });
});


function changeScreen(fromId) {
  // remove all the clip art //
  alert("My First Jquery Test");

  if (fromID === 'home') {
    $('#home_layout').hide();
    $('#about_screen_container').show();
  } else {
    $('#about_screen_container').hide();
    $('#home_layout').show();

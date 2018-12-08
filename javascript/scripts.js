$(document).ready(function(){
  $("#frontal-lobe-image").hide();
  $("#temporal-lobe-image").hide();
  $("#parietal-lobe-image").hide();
  $("#occipital-lobe-image").hide();

  $("#frontal-lobe-button").hover(function(){
    $("#frontal-lobe-image").toggle()
    $("#four-lobes").toggle()
  });

  $("#parietal-lobe-button").hover(function(){
      $("#parietal-lobe-image").toggle()
      $("#four-lobes").toggle();
});

$("#temporal-lobe-button").hover(function(){
    $("#temporal-lobe-image").toggle()
    $("#four-lobes").toggle();
});

$("#occipital-lobe-button").hover(function(){
    $("#occipital-lobe-image").toggle()
    $("#four-lobes").toggle();
});

$(function () {
  $('#neuron').popover()
});

$(function () {
  $('#cerebral-cortex').popover()
});

$(function () {
  $('#corpus-collosum').popover()
});

$(function () {
  $('#epilepsy').popover()
});

$(function () {
  $('#cognitive-planning').popover()
});

$(function () {
  $('#lesions').popover()
});

$(function () {
  $('#Stimuli').popover()
});

$(function () {
  $('#primary-visual-cortex').popover()
});

$(function () {
  $('#V2').popover()
});

$(function () {
  $('#PET').popover()
});

$(function () {
  $('#V4').popover()
});

$(function () {
  $('#V5').popover()
});

$(function () {
  $('#limbic-system').popover()
});

$("#submit").click(function(){
        $("#submit").css("background-color", "#44d827");
    });

    $("#submit").click(function(){
            $("#submit").css("border", "1px solid #44d827");
        });

});

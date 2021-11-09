import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { stateControl, blueFood, hydrate, light, feed, superWater, shade, plant2 } from './js/plant.js';
import { updateStatus, updateStatus2 } from './../src/standalone.js';


$(document).ready(function() {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.
  
  $('#feed').click(function() {
    const newState = stateControl(feed);
    updateStatus(newState);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });
  
  $('#super-feed').click(function() {
    const newState = stateControl(blueFood);
    updateStatus(newState);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#water').click(function() {
    const newState = stateControl(hydrate);
    updateStatus(newState);
    $('#water-value').text(`Water: ${newState.water}`);
  });
  $('#super-water').click(function() {
    const newState = stateControl(superWater);
    updateStatus(newState);
    $('#water-value').text(`Water: ${newState.water}`);
  });
  
  $('#light').click(function() {
    const newState = stateControl(light);
    updateStatus(newState);
    $('#light-value').text(`Light: ${newState.light}`);
  });
  $('#shade').click(function() {
    const newState = stateControl(shade);
    updateStatus(newState);
    $('#light-value').text(`Light: ${newState.light}`);
  });
  $('#feed2').click(function() {
    const newState = plant2(feed);
    updateStatus2(newState);
    $('#soil-value2').text(`Soil: ${newState.soil}`);
  });
  
  $('#super-feed2').click(function() {
    const newState = plant2(blueFood);
    updateStatus2(newState);
    $('#soil-value2').text(`Soil: ${newState.soil}`);
  });

  $('#water2').click(function() {
    const newState = plant2(hydrate);
    updateStatus2(newState);
    $('#water-value2').text(`Water: ${newState.water}`);
  });
  $('#super-water2').click(function() {
    const newState = plant2(superWater);
    updateStatus2(newState);
    $('#water-value2').text(`Water: ${newState.water}`);
  });
  
  $('#light2').click(function() {
    const newState = plant2(light);
    updateStatus2(newState);
    $('#light-value2').text(`Light: ${newState.light}`);
  });
  $('#shade2').click(function() {
    const newState = plant2(shade);
    updateStatus2(newState);
    $('#light-value2').text(`Light: ${newState.light}`);
  });

  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
    $('#water-value').text(`Water: ${currentState.water}`);
  });

  $("#form-name").submit(function (event) {
    event.preventDefault();
    let inputName = $("#name").val();
    $("#name-display").text(` ${inputName}`);
    $(".name-results").show();
    $("#form-name").hide();
  });
  $("#form-name2").submit(function (event) {
    event.preventDefault();
    let inputName = $("#name2").val();
    $("#name-display2").text(` ${inputName}`);
    $(".name-results2").show();
    $("#form-name2").hide();

    // *** WIP ADD NEW PLANT *** //
    // $("input#new-plant").val("")
    // let newPlant = new Plant();
    // logPowerPlant.addPlant(newPlant);
    // displayPlantDetails(logPowerPlant);
    // *** END WIP ADD NEW PLANT *** //
  });
});
import $ from 'jquery';

export function updateStatus(plant) {

  if(plant.water < 15) {
    $("#waterLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.water >= 15 && plant.water < 25){
    $("#waterLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.water > 25) {
    $("#waterLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }

  if(plant.light < 15) {
    $("#lightLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.light >= 15 && plant.light < 25) {
    $("#lightLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.light > 25) {
    $("#lightLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }

  if(plant.soil < 15) {
    $("#soilLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.soil >= 15 && plant.soil < 25) {
    $("#soilLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.soil > 25) {
    $("#soilLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }

  $("#waterLevel1 .progress-bar").attr('style', `width: ${plant.water*2}%`);
  $("#lightLevel1 .progress-bar").attr('style', `width: ${plant.light*2}%`);
  $("#soilLevel1 .progress-bar").attr('style', `width: ${plant.soil*2}%`);
}
export function updateStatus2(plant) {

  if(plant.water < 15) {
    $("#waterLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.water >= 15 && plant.water < 25) {
    $("#waterLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.water > 25) {
    $("#waterLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }

  if (plant.light < 15) {
    $("#lightLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.light >= 15 && plant.light < 25) {
    $("#lightLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.light > 25) {
    $("#lightLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }

  if (plant.soil < 15) {
    $("#soilLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.soil >= 15 && plant.soil < 25) {
    $("#soilLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.soil > 25) {
    $("#soilLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }

  $("#waterLevel2 .progress-bar").attr('style', `width: ${plant.water*2}%`);
  $("#lightLevel2 .progress-bar").attr('style', `width: ${plant.light*2}%`);
  $("#soilLevel2 .progress-bar").attr('style', `width: ${plant.soil*2}%`);
}
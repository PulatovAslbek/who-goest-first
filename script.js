const elForm = document.querySelector('#form');
const elInput = document.querySelector('#input');
const elBtn = document.querySelector('#btn');
const elPersonScore = document.querySelector('#personScore');
const elBicycleScore = document.querySelector('#bicycleScore');
const elCarScore = document.querySelector('#carScore');
const elAirScore = document.querySelector('#airScore');

let personScore = 3.6;
let bicycleScore = 20.1;
let carScore = 70;
let airScore = 800;

function timeScore(distance, speed) {
  let hour = Math.floor(distance / speed);
  let minute = Math.floor((distance / speed - hour) * 60);
  let second = Math.floor(((distance / speed - hour) * 60 - minute) * 60);
  return hour + ' hour ' + minute + ' minute ' + second + ' second ';
}

elForm.addEventListener('submit', function (evn) {
  evn.preventDefault();

  let inputValue = Number(elInput.value.trim());

  if (inputValue <= 0 || isNaN(inputValue)) {
    elInput.classList.add('error_alert');
  } else {
    elInput.classList.remove('done_alert');
    elPersonScore.textContent = timeScore(inputValue, personScore);
    elBicycleScore.textContent = timeScore(inputValue, bicycleScore);
    elCarScore.textContent = timeScore(inputValue, carScore);
    elAirScore.textContent = timeScore(inputValue, airScore);
  }
});

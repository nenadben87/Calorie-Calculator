
const form = document.querySelector('#my-form');
const calculateBtn = document.querySelector('#calculate-btn');
const caloriesInput = document.querySelector('#calorie-input');
const kilogramsInput = document.querySelector('#weight-input');
const walkingInput = document.querySelector('#walk-input');
const runningInput = document.querySelector('#run-input');
const cyclingInput = document.querySelector('#cycle-input');
const swimmingInput = document.querySelector('#swim-input');
const loadingDiv = document.querySelector('#loading-div');
const outputDiv = document.querySelector('#output-div');
const againBtn = document.querySelector('#again-btn');
const caloriesH3 = document.querySelector('#calories-h3');
const weightH3 = document.querySelector('#weight-h3');

form.addEventListener('submit',calculateResults);
againBtn.addEventListener('click',reloadPage);

function calculateResults(e) {

  let calories = caloriesInput.value;
  let kilograms = kilogramsInput.value;

  if(calories === '' || kilograms === ''){
    showError();
  } else {
  
  loading();

  setTimeout(loadResults,2000);
}

  e.preventDefault();
}

function showError() {

    const container = document.querySelector('#container');

    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode('Please enter your values'));

    container.insertBefore(errorDiv,form);

    setTimeout(removeErrorDiv,3000);

}

function removeErrorDiv() {
  document.querySelector('.alert').remove();
}

function loading() {
  
  loadingDiv.style.display = 'block';

  setTimeout(removeLoadingDiv,2000);
}

function removeLoadingDiv() {
  loadingDiv.style.display = 'none';
}

function loadResults() {
  let calories = caloriesInput.value;
  let kilograms = kilogramsInput.value;

  let walking = walkingInput.value
  let running = runningInput.value;
  let cycling = cyclingInput.value;
  let swimming = swimmingInput.value;
  
  let metWalk = 3.8 * kilograms / 200 * walking;
  let metRun = 7.5 * kilograms / 200 * running;
  let metCycle = 8 * kilograms / 200 * cycling;
  let metSwim = 8 * kilograms / 200 * swimming;
  let caloriesBurned = (metWalk + metRun + metCycle + metSwim).toFixed(1);
  
  let caloriesRemained = calories - caloriesBurned;
  let weightLoss = (caloriesBurned / 7700).toFixed(2);

  outputDiv.style.display = 'block';

  caloriesH3.innerHTML = `<h3>Calories Burned: ${caloriesBurned}</h3>`;
  weightH3.innerHTML = `<h3>Weight Loss: ${weightLoss} kg</h3>`;

  againBtn.style.display = 'block';

  caloriesInput.disabled = true;
  kilogramsInput.disabled = true;
  calculateBtn.disabled = true;

}

function reloadPage() {
  window.location.reload();
}


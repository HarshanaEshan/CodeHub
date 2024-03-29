const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
const steps = document.querySelectorAll('.step');
const form_steps = document.querySelectorAll('.form-step');
let active = 1;

const updateProgress = () => {
    console.log('steps.length =>' + steps.length);
    console.log('active =>' + active);

    // toglle .active class for each list item
    steps.forEach((step, i) => {
        if (i == (active-1)) {
            step.classList.add('active');
            form_steps[i].classList.add('active');
            console.log('i =>' +i);
        } else {
            step.classList.remove('active');
            form_steps[i].classList.remove('active');
        }
    });

    // enable or disale prev and next button
    if (active === 1) {
        prevButton.disabled = true;
    } else if (active === steps.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}

nextButton.addEventListener('click', () => {
    active++;
    if (active > steps.length) {
        active = steps.length;
    }
    updateProgress();
})

prevButton.addEventListener('click', () =>{
    active--;
    if(active < 1){
        active = 1;
    }
    updateProgress();
})

function updateEndYear(year) {
    startYear = parseInt(year);
    var age = document.getElementById('age');
    age.value = 2024 - startYear;
}
console.log('hello');


const nameInput = document.querySelector('#name');
const otherInput = document.querySelector('#other-title');
const jobRoleSelect = document.querySelector('#title');
const tShirtDesign = document.querySelector('#design');
const colorSelect = document.querySelector('#color');
const colorSelectPunsOpts = document.querySelectorAll('#color option:nth-child(-n+4):not(:first-child)');
const colorSelectHeartOpts = document.querySelectorAll('#color option:nth-child(n+5)');
const activitiesFS = document.querySelector('.activities');
const activitiesLabels = activitiesFS.querySelectorAll('label');
const activitiesInputs = activitiesFS.querySelectorAll('input');






nameInput.focus();
otherInput.style.display = 'none';
jobRoleSelect.value = 'full-stack js developer';
tShirtDesign.value = 'Select Theme';
colorSelect.value = 'Pick Color';


jobRoleSelect.addEventListener('change', function(e){
  if(this.value === 'other'){
    otherInput.style.display = 'inline';
    otherInput.focus();
  } else {
    otherInput.style.display = 'none';
  }
});

tShirtDesign.addEventListener('change', function(e){
  console.log(e);
  if(this.value === 'js puns'){
    colorSelectPunsOpts.forEach(o => o.removeAttribute('hidden'));
    colorSelectHeartOpts.forEach(o => o.setAttribute('hidden', ''));
    colorSelect.value = 'cornflowerblue';
  } else {
    colorSelectHeartOpts.forEach(o => o.removeAttribute('hidden'));
    colorSelectPunsOpts.forEach(o => o.setAttribute('hidden', ''));
    colorSelect.value = 'tomato';
  }

});

activitiesFS.addEventListener('change', function(e){

    console.log(e.target.parentNode.textContent);
    let act = e.target.parentNode.textContent.match(/\w+(day).+(?=(, \$\d{3})$)/gi);
    console.log(act);
    activitiesLabels.forEach((l) => {

      if (act !== null && l.textContent.includes(act[0] )) {
        console.log(l.textContent);
      } else {

      }



    })



});


















// lplp

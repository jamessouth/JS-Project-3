console.log('hello');


const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#mail');
const otherInput = document.querySelector('#other-title');
const jobRoleSelect = document.querySelector('#title');
const tShirtDesign = document.querySelector('#design');
const colorSelect = document.querySelector('#color');
const colorSelectPunsOpts = document.querySelectorAll('#color option:nth-child(-n+4):not(:first-child)');
const colorSelectHeartOpts = document.querySelectorAll('#color option:nth-child(n+5)');
const activitiesFS = document.querySelector('.activities');
const activitiesLabels = activitiesFS.querySelectorAll('label');
const activitiesInputs = activitiesFS.querySelectorAll('input');
const totalP = document.createElement('p');
const payment = document.querySelector('#payment');
const creditCard = document.querySelector('#credit-card');
const payPal = document.querySelector('#paypal');
const bitCoin = document.querySelector('#bitcoin');
const button = document.querySelector('button');



// nameInput.focus();
otherInput.style.display = 'none';
jobRoleSelect.value = 'full-stack js developer';
tShirtDesign.value = 'Select Theme';
colorSelect.value = 'Pick Color';
payment.value = 'credit card';
payPal.style.display = 'none';
bitCoin.style.display = 'none';




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
    let total = 0;
    let inp = e.target;
    let lab = e.target.parentNode.textContent;
    // console.log(lab, inp);
    let time = e.target.parentNode.textContent.match(/\w+(day).+(?=(, \$\d{3})$)/gi);
    // console.log(time);

      activitiesLabels.forEach(l => {
        if(time !== null){
          if(l.textContent.includes(time[0]) && l.textContent !== lab){
            if(inp.checked){
              // console.log(l.textContent);
              l.firstElementChild.setAttribute('disabled', '');
              l.style.color = 'grey';
              l.style.textDecoration = 'line-through wavy';
              l.style.filter = 'blur(1px)';
            } else {
              l.firstElementChild.removeAttribute('disabled');
              l.style.color = '#000';
              l.style.textDecoration = 'none';
              l.style.filter = 'none';
            }
          }
        }
        if (l.firstElementChild.checked) {
          // console.log(l.textContent.match(/\d{3}$/)[0]);
          total += parseInt(l.textContent.match(/\d{3}$/)[0], 10);
          // console.log(total);
        }

      })

      if(total > 0){
        totalP.textContent = `Total: $${total}`;
        if(activitiesFS.lastElementChild.tagName === 'LABEL'){
          activitiesFS.appendChild(totalP);
        }
      } else {
        activitiesFS.removeChild(activitiesFS.lastElementChild);
      }


});

payment.addEventListener('change', function(e){
  [creditCard, payPal, bitCoin].forEach(p => {
    // p.style.display = 'none';
    // console.log(this.value[0], p.id[0]);
    p.style.display = this.value[0] === p.id[0] ? 'block' : 'none';

  });


});

emailInput.addEventListener('input', function (e) {
  console.log(e);
  if(!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(emailInput.value)){
    this.style.border = '4px black dashed';
  } else {
    this.style.border = 'none';
  }
});


button.addEventListener('click', function (e) {
  console.log(e);
  if(nameInput.value === ''){
    e.preventDefault();
  }
  if(!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(emailInput.value)){
    e.preventDefault();
  }
  if(activitiesFS.lastElementChild.tagName === 'LABEL'){
    e.preventDefault();
  }


});













// lplp

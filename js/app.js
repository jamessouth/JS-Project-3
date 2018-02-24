const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#mail');
const otherInput = document.querySelector('#other-title');
const jobRoleSelect = document.querySelector('#title');
const tShirtDesign = document.querySelector('#design');
const colorSelect = document.querySelector('#color');
const colorSelectDiv = document.querySelector('#colors-js-puns');
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
const ccNum = document.querySelector('#cc-num');
const zip = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
const ccMsgDiv = document.createElement('div');
const zpMsgDiv = document.createElement('div');
const cvvMsgDiv = document.createElement('div');
const pmtFS = document.querySelector('fieldset:last-of-type');

// nameInput.focus();
otherInput.style.display = 'none';
jobRoleSelect.value = 'full-stack js developer';
tShirtDesign.value = 'Select Theme';
colorSelect.value = 'Pick Color';
colorSelectDiv.style.display = 'none';
payment.value = 'credit card';
payPal.style.display = 'none';
bitCoin.style.display = 'none';
pmtFS.insertBefore(ccMsgDiv, creditCard);
pmtFS.insertBefore(zpMsgDiv, creditCard);
pmtFS.insertBefore(cvvMsgDiv, creditCard);



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
  colorSelectDiv.style.display = 'block';
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

let modal = document.createElement('div');
let text = document.createElement('p');
modal.className = 'modal invalid';
modal.appendChild(text);


function realTimeValidator(e){
  // if(this === document.activeElement){
  //   document.body.appendChild(modal);
  // } else {
  //   document.body.removeChild(modal);
  // }

  modal.style.top = `${this.offsetTop - this.offsetHeight * 1.6}px`;

  if(this.value === ''){
    console.log(e);
    text.textContent = 'Cannot be blank';
    modal.className = 'modal invalid';
  } else {

    console.log(this.id);

    switch (this.id){
      case 'name':
        // text.textContent = ` format ${this.id} as "firstname lastname", with no numbers`;
        if(/\d+/.test(this.value)){
          text.textContent = 'Name cannot contain numbers';
          modal.className = 'modal invalid';
        } else if(!/^[a-zA-Z]+[-']?[a-zA-Z]* [a-zA-Z]*(?:[-']?[a-zA-Z-'][ ]?)*[a-zA-Z]$/.test(this.value)){
          text.textContent = 'Name must include a first name, a space, and a last name';
          modal.className = 'modal invalid';
        } else {
          text.textContent = 'Looks valid to me!';
          modal.className = 'modal valid';
        }
        break;
      case 'mail':
        // text.textContent = ` format ${this.id} as "myEmail@myDomain.com"`;
        if(/ +/.test(this.value)){
          text.textContent = 'Email address cannot contain any spaces';
          modal.className = 'modal invalid';
        } else if(!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.value)){
          text.textContent = 'Format as myEmail@myDomain.com';
          modal.className = 'modal invalid';
        } else {
          text.textContent = 'Looks valid to me!';
          modal.className = 'modal valid';
        }

        break;
      case 'cc-num':
        // text.textContent = ` format ${this.id} as a number with 13 to 16 digits`;
        if(/\D+/.test(this.value)){
          text.textContent = 'Card number can only contain numbers';
          modal.className = 'modal invalid';
        } else if(!/^.{13,16}$/.test(this.value)){
          text.textContent = 'Card number must be at least 13 and no more than 16 digits long';
          modal.className = 'modal invalid';
        } else {
          text.textContent = 'Looks valid to me!';
          modal.className = 'modal valid';
        }

        break;
      case 'zip':
        if(/\D+/.test(this.value)){
          text.textContent = 'Zip code can only contain numbers';
          modal.className = 'modal invalid';
        } else if(!/^.{5}$/.test(this.value)){
          text.textContent = 'Zip code must be 5 digits long';
          modal.className = 'modal invalid';
        } else {
          text.textContent = 'Looks valid to me!';
          modal.className = 'modal valid';
        }
        break;
      case 'cvv':
        if(/\D+/.test(this.value)){
          text.textContent = 'CVV can only contain numbers';
          modal.className = 'modal invalid';
        } else if(!/^.{3}$/.test(this.value)){
          text.textContent = 'CVV must be 3 digits long';
          modal.className = 'modal invalid';
        } else {
          text.textContent = 'Looks valid to me!';
          modal.className = 'modal valid';
        }
        break;

    }

  }
  document.body.appendChild(modal);

}

[nameInput, emailInput, ccNum, zip, cvv].forEach(x => {
  x.addEventListener('input', realTimeValidator);
});

[nameInput, emailInput, ccNum, zip, cvv].forEach(x => {
  x.addEventListener('blur', e => {
    console.log(e);
    if(document.body.lastElementChild.classList.contains('modal')){
      console.log('has modal');
      document.body.removeChild(document.body.lastElementChild);
    }
  });
});



function makeSpan(field, label){

  let span = document.createElement('span');


  switch (label){
    case 'Name':
      span.textContent = ` format ${label} as "firstname lastname", with no numbers`;
      break;
    case 'Email':
      span.textContent = ` format ${label} as "myEmail@myDomain.com"`;
      break;
    case 'Card Number':
      span.textContent = ` format ${label} as a number with 13 to 16 digits`;
      break;
    case 'Zip Code':
      span.textContent = ` format ${label} as a number with 5 digits`;
      break;
    case 'CVV':
      span.textContent = ` format ${label} as a number with 3 digits`;
      break;

  }

  if(window.innerWidth < 680 || ['Name', 'Email'].includes(label)){
    let lab = field.previousElementSibling;
    if(!!lab.firstElementChild){
      lab.removeChild(lab.firstElementChild);
    }
    lab.appendChild(span);
  } else {
    // if(['Card Number', 'Zip Code', 'CVV'].includes(label)){
    // let lab = field.previousElementSibling;
    if(ccMsgDiv.children.length > 2){
      lab.removeChild(lab.firstElementChild);
    }
    lab.appendChild(span);


    // }
  }
}



function errorMsg(field, label){
  field.classList.add('failed');
  if(field.value === ''){
    field.setAttribute('placeholder', `${label} cannot be empty.`);
  } else {
    makeSpan(field, label);
  }
}


button.addEventListener('click', function (e) {
  console.log(e);
  if (payment.value === 'credit card') {

    if (!/^\d{3}$/.test(cvv.value)) {
      e.preventDefault();
      creditCard.scrollIntoView();
      cvv.focus();
      errorMsg(cvv, 'CVV');
    }
    if (!/^\d{5}$/.test(zip.value)) {
      e.preventDefault();
      creditCard.scrollIntoView();
      zip.focus();
      errorMsg(zip, 'Zip Code');
    }
    if (!/^\d{13,16}$/.test(ccNum.value)) {
      e.preventDefault();
      creditCard.scrollIntoView();
      ccNum.focus();
      errorMsg(ccNum, 'Card Number');
    }

  }

  if(activitiesFS.lastElementChild.tagName === 'LABEL'){
    e.preventDefault();
    activitiesFS.scrollIntoView();
    activitiesFS.children[1].firstElementChild.focus();


    let leg = activitiesFS.firstElementChild;
    if(!!leg.firstElementChild){
      leg.removeChild(leg.firstElementChild);
    }
    let span = document.createElement('span');
    span.textContent = ` please select at least one activity`;
    leg.appendChild(span);
  }


  if(emailInput.value === '' || !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(emailInput.value)){
    e.preventDefault();
    emailInput.scrollIntoView();
    window.scrollByLines(-3);
    emailInput.focus();
    errorMsg(emailInput, 'Email');
  }

  if(nameInput.value === '' || !/^[a-zA-Z]+[-']?[a-zA-Z]* [a-zA-Z]*(?:[-']?[a-zA-Z-'][ ]?)*[a-zA-Z]$/.test(nameInput.value)){
    e.preventDefault();
    nameInput.scrollIntoView();
    window.scrollByLines(-3);
    nameInput.focus();
    errorMsg(nameInput, 'Name');
  }


});













// lplp

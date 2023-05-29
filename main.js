const inputAmount = document.getElementById('inputAmount');
const inputData = document.getElementById('inputData');
const numPeople = document.getElementById('numPeople');
const divNumPeople = document.getElementById('divNumPeople');
const customTip = document.getElementById('customTip');
const numPeopleMsg = document.getElementById('numPeopleMsg');
const btnReset = document.getElementById('btnReset');
const total1 = document.getElementById('tota1');
const total2 = document.getElementById('tota2');
const btn5p = document.getElementById('btn5p');
const btn10p = document.getElementById('btn10p');
const btn15p = document.getElementById('btn15p');
const btn25p = document.getElementById('btn25p');
const btn50p = document.getElementById('btn50p');

let amount = 0;
let people = 0;
let custom_tip = 0;
let tip_person = 0;
let total_person = 0;

function splitter(tip_percent) {
    if (people > 0) {
        let total_tip = amount * (tip_percent/100);
        tip_person = total_tip / people;
        let grand_total = amount + total_tip;
        total_person = grand_total / people;        
    } else {
        tip_person = 0;
        total_person = 0;
    }
}

function containsOnlyNumbers(str) {
    return /^(\d+.)*(\d+)$/.test(str);
  }

inputAmount.addEventListener('input', () => {
    if (containsOnlyNumbers(inputAmount.value)) { 
        inputData.className = 'input-data-active';
        amount = parseFloat(inputAmount.value, 10);
    } else {
        inputData.className = 'input-data-error';
    } 
});

inputAmount.addEventListener('click', () => {    
    inputData.className = 'input-data-active';    
});

customTip.addEventListener('input', () => {    
    if (containsOnlyNumbers(customTip.value)) { 
        customTip.style.border = '1px solid green';     
        custom_tip = parseFloat(customTip.value, 10); 
        splitter(custom_tip);  
        if (isNaN(tip_person)) {
            total1.textContent = "$0.00";
        } else {
            total1.textContent = "$" + tip_person.toFixed(2).toString();
        }
        if (isNaN(total_person)) {
            total2.textContent = "$0.00";
        } else {
            total2.textContent = "$" + total_person.toFixed(2).toString();
        }                     
        btn5p.className = "tips-button";
        btn10p.className = "tips-button";
        btn15p.className = "tips-button";
        btn25p.className = "tips-button";
        btn50p.className = "tips-button";        
        btnReset.className = "reset-button-active";        
    } else if (customTip.value == "") {
        customTip.style.border = 'none'; 
    } else {
        customTip.style.border = '1px solid red'; 
    } 
});

numPeople.addEventListener('input', () => {    
    if (containsOnlyNumbers(numPeople.value)) {
        people = parseFloat(numPeople.value, 10);
        if (people > 0) {
            numPeopleMsg.className = 'validatePeople';
            divNumPeople.className = 'input-data-active';
        } else {
            divNumPeople.className = 'input-data-error';
            numPeopleMsg.className = 'validatePeople-error';            
        }
    } else {
        divNumPeople.className = 'input-data-error';
        numPeopleMsg.className = 'validatePeople-error';
    }
});

numPeople.addEventListener('click', () => {    
    divNumPeople.className = 'input-data-active';    
});

btnReset.addEventListener('click', () => {
    btnReset.className = "reset-button";
    btn5p.className = "tips-button";
    btn10p.className = "tips-button";
    btn15p.className = "tips-button";
    btn25p.className = "tips-button";
    btn50p.className = "tips-button";
    total1.textContent = "$0.00";
    total2.textContent = "$0.00";
    inputData.style.border = "none";
    divNumPeople.style.border = "none";
    numPeopleMsg.style.color = "white";
    customTip.style.border = 'none'; 
    inputAmount.value = "";
    numPeople.value = "";
    customTip.value = "";
    amount = 0;
    people = 0;
    custom_tip = 0;
    tip_person = 0;
    total_person = 0;   
});

btn5p.addEventListener('click', () => {   
    splitter(5);
    btn5p.className = "tips-button-active";
    btn10p.className = "tips-button";
    btn15p.className = "tips-button";
    btn25p.className = "tips-button";
    btn50p.className = "tips-button";
    customTip.value = "";
    if (isNaN(tip_person)) {
        total1.textContent = "$0.00";
    } else {
        total1.textContent = "$" + tip_person.toFixed(2).toString();
    }
    if (isNaN(total_person)) {
        total2.textContent = "$0.00";
    } else {
        total2.textContent = "$" + total_person.toFixed(2).toString();
    }
    btnReset.className = "reset-button-active";
});

btn10p.addEventListener('click', () => {   
    splitter(10);
    btn5p.className = "tips-button";
    btn10p.className = "tips-button-active";
    btn15p.className = "tips-button";
    btn25p.className = "tips-button";
    btn50p.className = "tips-button";
    customTip.value = "";
    if (isNaN(tip_person)) {
        total1.textContent = "$0.00";
    } else {
        total1.textContent = "$" + tip_person.toFixed(2).toString();
    }
    if (isNaN(total_person)) {
        total2.textContent = "$0.00";
    } else {
        total2.textContent = "$" + total_person.toFixed(2).toString();
    }
    btnReset.className = "reset-button-active";
});

btn15p.addEventListener('click', () => {   
    splitter(15);
    btn5p.className = "tips-button";
    btn10p.className = "tips-button";
    btn15p.className = "tips-button-active";
    btn25p.className = "tips-button";
    btn50p.className = "tips-button";    
    customTip.value = "";
    if (isNaN(tip_person)) {
        total1.textContent = "$0.00";
    } else {
        total1.textContent = "$" + tip_person.toFixed(2).toString();
    }
    if (isNaN(total_person)) {
        total2.textContent = "$0.00";
    } else {
        total2.textContent = "$" + total_person.toFixed(2).toString();
    }
    btnReset.className = "reset-button-active";
});

btn25p.addEventListener('click', () => {   
    splitter(25);
    btn5p.className = "tips-button";
    btn10p.className = "tips-button";
    btn15p.className = "tips-button";
    btn25p.className = "tips-button-active";
    btn50p.className = "tips-button";   
    customTip.value = "";       
    if (isNaN(tip_person)) {
        total1.textContent = "$0.00";
    } else {
        total1.textContent = "$" + tip_person.toFixed(2).toString();
    }
    if (isNaN(total_person)) {
        total2.textContent = "$0.00";
    } else {
        total2.textContent = "$" + total_person.toFixed(2).toString();
    }
    btnReset.className = "reset-button-active";
});

btn50p.addEventListener('click', () => {   
    splitter(50);
    btn5p.className = "tips-button";
    btn10p.className = "tips-button";
    btn15p.className = "tips-button";
    btn25p.className = "tips-button";
    btn50p.className = "tips-button-active"; 
    customTip.value = "";
    if (isNaN(tip_person)) {
        total1.textContent = "$0.00";
    } else {
        total1.textContent = "$" + tip_person.toFixed(2).toString();
    }
    if (isNaN(total_person)) {
        total2.textContent = "$0.00";
    } else {
        total2.textContent = "$" + total_person.toFixed(2).toString();
    }
    btnReset.className = "reset-button-active";
});
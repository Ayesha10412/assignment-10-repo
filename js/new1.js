

document.getElementById('donate-btn').addEventListener('click', function(event){
event.preventDefault();


const inputsMoney = getInputFieldValue('input-box')
const mainMoney= getTextFieldValue('total-amount');


if((isNaN(inputsMoney)) || (inputsMoney<0) || (mainMoney<inputsMoney) ){
    return alert('Invalid Input');
}

else{

const mainMoney= getTextFieldValue('total-amount');

const sectionMoney= getMoneyFieldValue('noakhali');

const updateSectionMoney = inputsMoney + sectionMoney ;
const updateMainSectionMoney = mainMoney - inputsMoney ; 

document.getElementById('noakhali').innerText = updateSectionMoney;

document.getElementById('total-amount').innerText = updateMainSectionMoney;




}

})
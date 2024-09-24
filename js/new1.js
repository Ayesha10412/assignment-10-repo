

document.getElementById('donate-btn').addEventListener('click', function(event){
event.preventDefault();


const inputsMoney = getInputFieldValue('input-box');
const mainMoney= getMoneyFieldValue('total-amount');


if((isNaN(inputsMoney)) || (inputsMoney<0) || (mainMoney<inputsMoney) ){
    // document.getElementById('my_modal_1').classList.add('hidden');
    document.getElementById('my_modal_1').close() ;

    return alert('Invalid Input', );
    
}

else{

const mainMoney= getMoneyFieldValue('total-amount');

const sectionMoney= getMoneyFieldValue('noakhali');

const updateSectionMoney = inputsMoney + sectionMoney ;
const updateMainSectionMoney = mainMoney - inputsMoney ; 

document.getElementById('noakhali').innerText = updateSectionMoney;

document.getElementById('total-amount').innerText = updateMainSectionMoney;

// document.getElementById('my_modal_1').classList.remove('hidden');

document.getElementById('my_modal_1').showModal();


// history
const historyFromEl = document.getElementById('history-form');
 
const div= document.createElement('div');
div.innerHTML= `
<div class="bg-white border-2 border-[rgba(17, 17, 17, 0.10)] rounded-xl p-5 mt-14 mb-10 > <h4 class="text-text font-extrabold text-3xl mb-7">
${inputsMoney} Taka is Donated for Flood at Noakhali, Bangladesh
</h4>
<p class="text-xs text-texts font-normal mt-4">Date: ${new Date()}</p>

</div>

`;

// console.log(div);
historyFromEl.appendChild(div);


}

})
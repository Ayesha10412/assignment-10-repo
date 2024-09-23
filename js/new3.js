


document.getElementById('quota-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    
    const inputsMoney = getInputFieldValue('input-box-quota')
    
    if((isNaN(inputsMoney)) || (inputsMoney<0) || (mainMoney<inputsMoney) ){
        return alert('Invalid Input');
    }
    
    else{
    
    const mainMoney= getTextFieldValue('total-amount');
    
    const sectionMoney= getMoneyFieldValue('quota');
    
    const updateSectionMoney = inputsMoney + sectionMoney ;
    const updateMainSectionMoney = mainMoney - inputsMoney ; 
    
    document.getElementById('quota').innerText = updateSectionMoney;
    
    document.getElementById('total-amount').innerText = updateMainSectionMoney;
    
    }
    
    })
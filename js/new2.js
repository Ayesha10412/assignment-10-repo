


document.getElementById('feni-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    
    const inputsMoney = getInputFieldValue('input-box-feni')
    
    if((isNaN(inputsMoney)) || (inputsMoney<0) || (mainMoney<inputsMoney) ){
        return alert('Invalid Input');
    }

    else{
    
    const mainMoney= getTextFieldValue('total-amount');
    
    const sectionMoney= getMoneyFieldValue('feni');
    
    const updateSectionMoney = inputsMoney + sectionMoney ;
    const updateMainSectionMoney = mainMoney - inputsMoney ; 
    
    document.getElementById('feni').innerText = updateSectionMoney;
    
    document.getElementById('total-amount').innerText = updateMainSectionMoney;
    
    }
    
    })
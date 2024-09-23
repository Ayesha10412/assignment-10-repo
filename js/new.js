function getInputFieldValue(id){
    const val= document.getElementById(id).value ;
    const value = parseFloat(val);
    return value;
}

function getMoneyFieldValue(id){
    const num = document.getElementById(id).innerText ;
    const number =parseFloat(num) ;
    return number;
}
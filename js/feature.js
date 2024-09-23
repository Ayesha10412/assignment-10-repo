// const historyBtn= document.getElementById('history-btn');
document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('history-form').classList.remove('hidden');
    document.getElementById('donation-form').classList.add('hidden');

})
document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('history-form').classList.add('hidden');
    document.getElementById('donation-form').classList.remove('hidden');

})

const donationBtn= document.getElementById('donation-btn');
// function btnClicker(event){
//    event.classList.add('bg-primary');
//    event.classList.add('border-none');
//    event.classList.add('text-text');
//    event.classList.add('font-bold');


// }

let btn=null;
let color='';

function btnClicker(event){

if(btn && btn!== event){

    btn.style.backgroundColor=color;
}
color= event.style.backgroundColor || '';
event.style.backgroundColor='#B4F461';

btn=event;

event.classList.add('border-none');
 event.classList.add('text-text');
event.classList.add('font-bold');




}










function pageOn(click){
    if(click==='next'){
        window.location.href='./blog.html';
    }
    else if(click==='back'){
        window.history.back();
    }
}


const donationBtn= document.getElementById('donation-btn');
function btnClicker(even){
   even.classList.add('bg-primary');
   even.classList.add('border-none');
   even.classList.add('text-text');
   even.classList.add('font-bold');


}
function pageOn(click){
    if(click==='next'){
        window.location.href='./blog.html';
    }
    else if(click==='back'){
        window.history.back();
    }
}


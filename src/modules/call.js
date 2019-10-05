const call = () => {
    const head = document.querySelector('.head'),
    rightHead = head.querySelector('.right'), 
    callbackForm = document.getElementById('callback_form'),
    freeVisitForm = document.getElementById('free_visit_form');

    document.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains('close_icon') || target.classList.contains('overlay')){ 
            callbackForm.removeAttribute("style");
            freeVisitForm.removeAttribute("style");
        }
        if (target.classList.contains('open-popup')){
            callbackForm.style.display = "block";
        }
        if (target.classList.contains('callback-btn')){
            freeVisitForm.style.display = 'block';
        }
    });
};

export default call;
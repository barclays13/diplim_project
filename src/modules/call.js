const call = () => {
    const head = document.querySelector('.head'),
    rightHead = head.querySelector('.right'), 
    callbackForm = document.getElementById('callback_form'),
    freeVisitForm = document.getElementById('free_visit_form');

    head.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains('close_icon') || target.classList.contains('overlay')){ 
            callbackForm.removeAttribute("style");
            freeVisitForm.removeAttribute("style");
        }

        if (target.classList.contains('open-popup')){
            freeVisitForm.style.display = "block";
        }

        if (target.classList.contains('callback-btn')){
            callbackForm.style.display = 'block';
        }
    });
};

export default call;
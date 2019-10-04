const freeVisitForm = () => {
    const freeVisit = document.querySelector('.free-visit'),
    freeVisitForm = document.getElementById('free_visit_form'),
    closeIconFreeVisitForm = freeVisitForm.querySelector('.close_icon'),
    btnOkFreeVisit = freeVisitForm.querySelector('.btn'),
    fixedGift = document.querySelector('.fixed-gift'),
    formWrapper = document.querySelector('.form-wrapper');

    freeVisit.addEventListener('click', () => {
        freeVisitForm.style.display = 'block';
     });

     freeVisitForm.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('close_icon') || target.classList.contains('overlay')){ 
            freeVisitForm.removeAttribute("style");
        }
     });
};

export default freeVisitForm;
const freeVisitForm = () => {
    const freeVisit = document.querySelector('.free-visit'),
    freeVisitForm = document.getElementById('free_visit_form');

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
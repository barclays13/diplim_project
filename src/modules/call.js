const call = () => {
    const btnCall = document.querySelector('.call>.btn'),
    callbackForm = document.getElementById('callback_form'),
    closeIcon = callbackForm.querySelector('.close_icon'),
    formContent = callbackForm.querySelector('.form-content');

    btnCall.addEventListener("click", (event) => {
        callbackForm.style.display = "block";
    });

    callbackForm.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains('close_icon') || target.classList.contains('overlay')){ 
            callbackForm.removeAttribute("style");
        }
    });
};

export default call;
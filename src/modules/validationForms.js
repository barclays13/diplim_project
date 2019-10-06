const validationForms = () => {

    document.getElementsByName('name').forEach((element) => {
        element.addEventListener('input', () => {
            console.log(0);
            element.value = element.value.replace(/[^а-яё]/i, '');
        });
    });
    
    document.getElementsByName('phone').forEach((element) => {
        element.addEventListener('input', () => {
            console.log(1);
            element.value = element.value.replace(/[^+0-9]/, '');
            //element.value = element.value.replace(/[^\+375[0-9+]*]/, '');
        });
    });
};
export default validationForms;

const calc = () => {
    const cards = document.querySelector('#cards'),
    clubsInput = cards.querySelectorAll('.club>input'),
    priceTotal = cards.querySelector('#price-total'),
    priceInput = cards.querySelector('.price-message>input');

    cards.addEventListener('click', (event) => {
        const target = event.target;
        if (target.matches('#m1') && clubsInput[0].checked) {
            priceTotal.textContent = 1999;
        } 
        if (target.matches('#m2') && clubsInput[0].checked) {
            priceTotal.textContent = 9900;
        } 
        if (target.matches('#m3') && clubsInput[0].checked) {
            priceTotal.textContent = 13900;
        } 
        if (target.matches('#m4') && clubsInput[0].checked) {
            priceTotal.textContent = 19900;
        } 
        if (target.matches('#m1') && clubsInput[1].checked) {
            priceTotal.textContent = 2999;
        } 
        if (target.matches('#m2') && clubsInput[1].checked) {
            priceTotal.textContent = 14990;
        } 
        if (target.matches('#m3') && clubsInput[1].checked) {
            priceTotal.textContent = 21990;
        } 
        if (target.matches('#m4') && clubsInput[1].checked) {
            priceTotal.textContent = 24990;
        } 
        if ( priceInput.value == "ТЕЛО2019" ){
            priceTotal.textContent = Math.ceil(+priceTotal.innerText * 0.7);
        } 
    });

};
export default calc;
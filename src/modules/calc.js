
const calc = () => {
    const cards = document.querySelector('#cards'),
    cardOrder = cards.querySelector('#card_order'),
    clubsInput = cards.querySelectorAll('.club>input'),
    priceTotal = cards.querySelector('#price-total'),
    priceInput = cards.querySelector('.price-message>input');

    const countSum = (target) => {
        let total = 0,
        promoCode;
        if (target.matches('#m1') && clubsInput[0].hasAttribute('checked')) {
            total = 1999;
        } 
        if (target.matches('#m2') && clubsInput[0].hasAttribute('checked')) {
            total = 9900;
        } 
        if (target.matches('#m3') && clubsInput[0].hasAttribute('checked')) {
            total = 13900;
        } 
        if (target.matches('#m4') && clubsInput[0].hasAttribute('checked')) {
            total = 19900;
        } 
        if (target.matches('#m1') && clubsInput[1].hasAttribute('checked')) {
            total = 2999;
        } 
        if (target.matches('#m2') && clubsInput[1].hasAttribute('checked')) {
            total = 14990;
        } 
        if (target.matches('#m3') && clubsInput[1].hasAttribute('checked')) {
            total = 21990;
        } 
        if (target.matches('#m4') && clubsInput[1].hasAttribute('checked')) {
            total = 24990;
        } 

        if ( priceInput.value != "ТЕЛО2019" ){
            promoCode = 1;
        } else {
            promoCode = 0.7;
        }

        if (total &&  promoCode){
            priceTotal.textContent = total * promoCode;
        }

    };


    cardOrder.addEventListener('change', (event , checkNumber) => {
        const target = event.target;

        if (target.matches('#card_leto_mozaika')){
            clubsInput[1].removeAttribute('checked');
            clubsInput[0].setAttribute('checked','');
        } else if (target.matches('#card_leto_schelkovo')) {
            clubsInput[0].removeAttribute('checked');
            clubsInput[1].setAttribute('checked','');
        }

        if (target.matches('input') || target.matches('label')){
            console.log(target);
            countSum(target);
        }
    });

};
export default calc;
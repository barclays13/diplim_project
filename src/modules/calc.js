
const calc = () => {
    const cards = document.querySelector('#cards'),
    cardOrder = cards.querySelector('#card_order'),
    clubsInput = cards.querySelectorAll('.club>input'),
    priceTotal = cards.querySelector('#price-total'),
    priceInput = cards.querySelector('.price-message>input');




    cardOrder.addEventListener('change', (event) => {
        let total,
        promoCode;
        const target = event.target;


        if (target.matches('#m1') && clubsInput[0].hasAttribute('checked')) {
            total = 1999;
            target.classList.toggle('active');
        } 
        if (target.matches('#m2') && clubsInput[0].hasAttribute('checked')) {
            total = 9900;
            target.classList.toggle('active');
        } 
        if (target.matches('#m3') && clubsInput[0].hasAttribute('checked')) {
            total = 13900;
            target.classList.toggle('active');
        } 
        if (target.matches('#m4') && clubsInput[0].hasAttribute('checked')) {
            total = 19900;
            target.classList.toggle('active');
        } 
        if (target.matches('#m1') && clubsInput[1].hasAttribute('checked')) {
            total = 2999;
            target.classList.toggle('active');
        } 
        if (target.matches('#m2') && clubsInput[1].hasAttribute('checked')) {
            total = 14990;
            target.classList.toggle('active');
        } 
        if (target.matches('#m3') && clubsInput[1].hasAttribute('checked')) {
            total = 21990;
            target.classList.toggle('active');
        } 
        if (target.matches('#m4') && clubsInput[1].hasAttribute('checked')) {
            total = 24990;
            target.classList.toggle('active');
        } 

        if ( priceInput.value != "ТЕЛО2019" ){
            promoCode = 1;
        } else {
            promoCode = 0.7;
        }

        priceTotal.textContent = total * promoCode;
    });




/*
    cardOrder.addEventListener('change', (event) => {
        const target = event.target;
        if (target.matches('#card_leto_mozaika')){
            clubsInput[1].removeAttribute('checked');
            clubsInput[0].setAttribute('checked','');


        } else if (target.matches('#card_leto_schelkovo')) {
            clubsInput[0].removeAttribute('checked');
            clubsInput[1].setAttribute('checked','');

        }
        
        if (target.matches('input') || target.matches('label')){
            countSum(target);
        }

    });

    const countSum = (target) => {

        let total = 0,

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
*/
};
export default calc;
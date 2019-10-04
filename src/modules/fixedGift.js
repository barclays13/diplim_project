const fixedGift = () => {
    const fixedGift = document.querySelector('.fixed-gift'),
    gift = document.getElementById('gift');

    fixedGift.addEventListener('click', () => {
        fixedGift.style.display = 'none';
        gift.style.display = 'block';
    });

    gift.addEventListener('click', (event) => {
        const target = event.target; 
        if (target.classList.contains('close_icon') || target.classList.contains('overlay') ||
        target.classList.contains('btn')){ 
            gift.removeAttribute("style");
            //fixedGift.style.display = 'block';
        }
    });
};
export default fixedGift;
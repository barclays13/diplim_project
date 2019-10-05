const popupMenu = () => {
    const topMenu = document.querySelector('.top-menu'),
    popupMenu = document.querySelector('.popup-menu');

    if (document.documentElement.clientWidth < 768){
        topMenu.style.display = 'none';
        popupMenu.style.display = 'block';

        document.addEventListener('scroll', () => {
            console.log(topMenu);
            if (document.scrollY > 190){
                topMenu.style.positin = 'fixed';
            } 
    
        });
    }

};
export default popupMenu;

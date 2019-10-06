const servicesSlider = () => {
    const servicesSlider = document.querySelector('.services-slider'),
    slides = servicesSlider.querySelectorAll('.slide');

    servicesSlider.addEventListener('click', (event) => {
        const target = event.target;
        let sumSlide = [0,1,2,3,4];
    
        slides[sumSlide.length].style.display = 'block';

        slides[sumSlide[0]].style.display = 'none';
        
        console.log('sumSlide', sumSlide);

        slides.forEach((elem, index) => {
            if (elem.style.display == "block"){
                sumSlide.push(index);            
            }
        });
        
    });
/*
    slides.forEach((elem,index) => {
        if (index <= 4){
            elem.style.display = 'block';
            sumSlide.push(index, elem);
        } else {
            elem.style.display = 'none';
        }
    });
*/
};

export default servicesSlider;
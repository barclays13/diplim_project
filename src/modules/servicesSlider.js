const servicesSlider = () => {
    const servicesSlider = document.querySelector('.services-slider'),
    slides = servicesSlider.querySelectorAll('.slide-services'),
    prev = document.getElementById('services-left'),
    next = document.getElementById('services-right');





    const nextSlide = () => {
        let arrActivSlide = [];
        console.log('1',arrActivSlide);
        slides.forEach((elem,index) => {
            if (elem.classList.contains('active')){
                arrActivSlide.push(index);      
            }
        });
        console.log('2',arrActivSlide);
        
        slides[arrActivSlide[arrActivSlide.length-1] + 1].classList.add('active');
        
        slides[arrActivSlide[0]].classList.remove('active');
        
    };

    const prevSlide = () => {
        let arrActivSlide = [];
        console.log('1',arrActivSlide);
        slides.forEach((elem,index) => {
            if (elem.classList.contains('active')){
                arrActivSlide.push(index);      
            }
        });
        console.log('2',arrActivSlide);
        
        slides[arrActivSlide[arrActivSlide.length-1]].classList.remove('active');
        slides[arrActivSlide[0]-1].classList.add('active');
        
    };


    servicesSlider.addEventListener('click', (event) => {
        const target = event.target;
        event.preventDefault();

        if (!target.matches('#services-right, #services-left') )
        {
            return;
        }

        if (target.matches('#services-right')){

                nextSlide();
        }

        if (target.matches('#services-left')){
            prevSlide();
        }

    });
    
};

export default servicesSlider;
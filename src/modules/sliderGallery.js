const sliderGallery = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
    slides = gallerySlider.querySelectorAll('.slide');

    /*gallerySlider.insertAdjacentHTML("beforeend", `<ul class="slider-dots"></ul>`);
    const galleryoDots = document.createElement('ul');
    gallerySlider.appendChild(galleryoDots);
    galleryoDots.classList.add('gallery-dots');

    for (let i = 0; i < slides.length ; i++ ){
        if ( i === 0){
            galleryoDots.insertAdjacentHTML("afterbegin", `<li class="dot dot-active"></li>`);
        } if ( i > 0){
            galleryoDots.insertAdjacentHTML("beforeend", `<li class="dot"></li>`);
        }
    }
    */
    slides.forEach( (slide, index) => {
        if (index == 0) {
            slide.style.display = 'block';
        } else if (index !== 0) {
           slide.style.display = 'none';
        }
    });

    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const nextSlide = (elem, index) => {
        elem[index].style.display = 'block';
    };

    let currentSlide = 0;
    const autoPlay = () => {
        prevSlide(slides,currentSlide);
        currentSlide++;
        if ( currentSlide >= slides.length ){
            currentSlide = 0;
        } 
        nextSlide(slides,currentSlide);
    };

    const startSlide = () => {
        setInterval(autoPlay, 2500);
    };

    const stopSlide = () => {

    };

    const prevSlid = document.createElement('div');
    prevSlid.classList.add('prev');
    gallerySlider.before(prevSlid);

    const nextSlid = document.createElement('div');
    nextSlid.classList.add('next');
    gallerySlider.after(nextSlid);

    startSlide();
};
export default sliderGallery;
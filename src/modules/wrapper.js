const wrapper = () => {
    const wrapper = document.querySelector('.wrapper>a');
    window.addEventListener('scroll', () => {
        if (window.scrollY < 775){
            wrapper.style.display = 'none';
        } else {
            wrapper.style.display = 'block';
        }
    });
};
export default wrapper;
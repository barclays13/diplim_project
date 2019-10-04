const wrapper = () => {
    const wrapper = document.querySelector('.wrapper>a');
    const checkScrollY = () => {
        if (window.scrollY < 775){
            wrapper.style.display = 'none';
        } else {
            wrapper.style.display = 'block';
        }
    };
    setInterval(checkScrollY,100);

};
export default wrapper;
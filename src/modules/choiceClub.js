const choiceClub = () => {
    const clubsList = document.querySelector('.clubs-list'),
    nameClubs = clubsList.querySelector('ul'),
    club = nameClubs.querySelectorAll('li');

    clubsList.addEventListener('click', () => {
        if (nameClubs.hasAttribute("style") ){
            nameClubs.removeAttribute("style");
            return;
        } 
        if (nameClubs.style.display = "none") {
            nameClubs.style.display = "block";
        }
    });
};
export default choiceClub;
const choiceClub = () => {
    const clubsList = document.querySelector('.clubs-list'),
    nameClubs = clubsList.querySelector('ul'),
    club = nameClubs.querySelectorAll('li');

    document.addEventListener('click', () => {

        if (nameClubs.style.display = "none" ){
            nameClubs.style.display = "block";
        } else {
            console.log(2);
            nameClubs.style.display = "none";
            console.log(2,1);
        }
    });
};

export default choiceClub;
const sendForm = () => {
    const errorMessage = 'Ошибка, что-то пошло не так...',
    loadMessage = 'Идет отправка...',
    successMessasge = 'Запрос отправлен!',
    consentMessage = 'Необходимо подвердить согласие!',
    forms = document.querySelectorAll('.form-content>form'),
    bannerForm = document.querySelector('#banner-form'),
    thanks = document.querySelector('#thanks'),
    checkBannerForm = document.querySelector('#check1');
    /*
    //чек баннер форм
    checkBannerForm.addEventListener('change', (event) => {
        const target = event.target;
        console.log('1',target.name);
        if ( target.name == "checked"){
            target.setAttribute("name", "noChecked");
            console.log('2',target.name);
            return;
        }
        if (target.name == "noChecked"){
            target.setAttribute("name", "checked");
            console.log('3',target.name);
            return;
        } 

    });
    */

    bannerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'color:white; font-size: 2rem';
        bannerForm.append(statusMessage);

        if( !checkBannerForm.checked){
            statusMessage.style.cssText = 'color:red; font-size: 1rem';
            if ( statusMessage.previousSibling.textContent == 'Необходимо подвердить согласие!' || statusMessage.previousSibling.name == 'checkbox'){
                statusMessage.name = 'checkbox';
                return;
            } else {
                statusMessage.textContent = consentMessage;
                statusMessage.name = 'checkbox';
                return;
            }
        }

        statusMessage.textContent = loadMessage;
        const target = event.target;
        const formData = new FormData(bannerForm);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
    
        postData(body)
            .then(()=> {
                bannerForm.parentNode.remove();
                statusMessage.textContent = successMessasge;
                thanks.style.display = 'block';
                const formInput = bannerForm.querySelectorAll('input').forEach((bannerForm)=> bannerForm.value = '');
            })
            .catch((error) => {
                bannerForm.parentNode.remove();
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
        

      
        

    });

    // модальные окна
    forms.forEach((elem)=> {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.style.cssText = 'color:white; font-size: 2rem';
            elem.parentNode.parentNode.append(statusMessage);
            statusMessage.textContent = loadMessage;

            const formData = new FormData(elem);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body)
                .then(()=> {
                elem.parentNode.remove();
                statusMessage.textContent = successMessasge;
                const formInput = elem.querySelectorAll('input').forEach((elem)=> elem.value = '');
                })
                .catch((error) => {
                elem.parentNode.remove();
                statusMessage.textContent = errorMessage;
                console.error(error);
                });
        });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};










    /*
    forms.forEach((elem)=> {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.style.cssText = 'color:white; font-size: 2rem';
            elem.parentNode.parentNode.append(statusMessage);
            statusMessage.textContent = loadMessage;

            const formData = new FormData(elem);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body)
                .then(()=> {
                elem.parentNode.remove();
                statusMessage.textContent = successMessasge;
                const formInput = elem.querySelectorAll('input').forEach((elem)=> elem.value = '');
                })
                .catch((error) => {
                elem.parentNode.remove();
                statusMessage.textContent = errorMessage;
                console.error(error);
                });
        });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};
*/
export default sendForm;
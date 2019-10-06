const sendForm = () => {
    const errorMessage = 'Ошибка, что-то пошло не так...',
    loadMessage = 'Идет отправка...',
    successMessasge = 'Отправлено!',
    forms = document.querySelectorAll('.form-content>form');

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
export default sendForm;
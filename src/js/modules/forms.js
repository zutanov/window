function forms() {
    const form = document.querySelectorAll('form'),       // получаем все формы на странице
          inputs = document.querySelectorAll('input'),    // получаем все инпуты, чтобы очищать после отправки
          phoneInput = document.querySelectorAll('input[name="user_phone"]');
          
    phoneInput.forEach(el => {
        el.addEventListener('input', () => {
            el.value = el.value.replace(/\D/, '');
        });
    });

    const message = {
        loading: 'Загрузка...',
        success: 'Отправлено',
        fail: 'Что-то пошло не так...'
        };

    const postData = async(url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(el => el.value = '');
    };

    form.forEach(el => {
        el.addEventListener('submit', e => {
            e.preventDefault();
            
            let info = document.createElement('div');
            info.classList.add('status');
            el.appendChild(info);
            
            const formData = new FormData(el);

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    info.textContent = message.success;
                })
                .catch(() => info.textContent = message.fail)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        info.remove();
                    },4000);
                });
            });
    })

};



export default forms;
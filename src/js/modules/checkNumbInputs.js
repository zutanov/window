const checkNumbInputs = (selector) => {
    const numbInputs = document.querySelectorAll(selector);

    numbInputs.forEach(el => {
        el.addEventListener('input', () => {
            el.value = el.value.replace(/\D/, '');
        });
    });

};

export default checkNumbInputs;
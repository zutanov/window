const modal = () => {    

function modalAutoOpen (modal, time) {
    setTimeout(function(){
        const modalWindow = document.querySelector(modal);
        modalWindow.style.display = 'block';
        document.body.style.overflow ='hidden';
        // document.body.classList.add('modal-open');
    },time)
}

function modalOpen (trigger, modal, close) {
    const modalTrigger = document.querySelectorAll(trigger);
    const modalWindow = document.querySelector(modal);
    const modalClose = document.querySelector(close);

    modalTrigger.forEach(el => {
        el.addEventListener('click', (e) => {
            if(e.target) {
                e.preventDefault();
            }
            modalWindow.style.display = 'block';
            document.body.style.overflow ='hidden';
            // document.body.classList.add('modal-open');
        });
    });

    modalClose.addEventListener('click', (e) => {
            modalWindow.style.display = 'none';
           document.body.style.overflow ='';
        //    document.body.classList.remove('modal-open');  
        });
    
    modalWindow.addEventListener('click', (e) => {
        if(e.target === modalWindow) {
            modalWindow.style.display = 'none';
           document.body.style.overflow ='';
        //    document.body.classList.remove('modal-open');
        }          
    });
}

modalOpen('.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
modalOpen('.phone_link', '.popup', '.popup .popup_close');
//modalAutoOpen('.popup', 60000);

// const res = fetch('POST', './src/server.php')
//     .then()

};

export default modal;
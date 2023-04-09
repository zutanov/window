const modal = () => {    

function modalAutoOpen (modal, time) {
    setTimeout(function(){
        const modalWindow = document.querySelector(modal);
        modalWindow.style.display = 'block';
        document.body.style.overflow ='hidden';
        // document.body.classList.add('modal-open');
    },time)
}

function modalOpen (trigger, modal, close, closeClickOverlay = true) {
    const modalTrigger = document.querySelectorAll(trigger);
    const modalWindow = document.querySelector(modal);
    const modalClose = document.querySelector(close);
    const windows = document.querySelectorAll('[data-modal]');
    const scroll = calcScroll();

    modalTrigger.forEach(el => {
        el.addEventListener('click', (e) => {
            if(e.target) {
                e.preventDefault();
            }

            windows.forEach(el => {
                el.style.display = 'none';
            });

            modalWindow.style.display = 'block';
            document.body.style.overflow ='hidden';
            document.body.style.marginRight = `${scroll}px`;
            // document.body.classList.add('modal-open');
        });
    });

    modalClose.addEventListener('click', (e) => {
        windows.forEach(el => {
            el.style.display = 'none';
        });

           modalWindow.style.display = 'none';
           document.body.style.overflow ='';
           document.body.style.marginRight = `0px`;
        //    document.body.classList.remove('modal-open');  
        });
    
    modalWindow.addEventListener('click', (e) => {
        if(e.target === modalWindow && closeClickOverlay) {
            windows.forEach(el => {
                el.style.display = 'none';
            });
            modalWindow.style.display = 'none';
            document.body.style.overflow ='';
            document.body.style.marginRight = `0px`;
        //    document.body.classList.remove('modal-open');
        }          
    });
}

function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

modalOpen('.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
modalOpen('.phone_link', '.popup', '.popup .popup_close');
modalOpen('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
modalOpen('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
modalOpen('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
//modalAutoOpen('.popup', 60000);

};

export default modal;
const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    // function hideTabContent() {
    //     tab.forEach(el => el.classList.remove(activeClass));

    //     content.forEach(el => el.style.display = 'none');
    // }
    
    // function showTabContent(i = 0) {
    //     content[i].style.display = 'block';
    //     tab[i].classList.add(activeClass);
    // }

    // header.addEventListener('click', (e) => {
    //     const target = e.target;
    //     if(target && target.classList.contains(tabSelector.slice(1)) ||
    //        target.parentNode.classList.contains(tabSelector.slice(1)) ) {
    //         tab.forEach((el,i) => {
    //             if(target == el || target.parentNode == el) {
    //                 hideTabContent();
    //                 showTabContent(i);
    //             }
    //         })
    //     }     
    // })

    // hideTabContent();
    // showTabContent()
                
};



export default tabs;
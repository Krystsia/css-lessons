document.addEventListener('DOMContentLoaded', () => {


    let isOpen;
    const menu = document.querySelector('.menu-list');
    const trigger = document.querySelector('.menu-icon');

    console.log(trigger)

    trigger.addEventListener('click', (e) => {
        console.log('helo')
        if (!isOpen) {
            menu.classList.add('menu-list_open');
            isOpen = true;
        } else {
            menu.classList.remove('menu-list_open');
            isOpen = false;
        }
    });

})
import materialize from "materialize-css/dist/css/materialize.css";
// ..

import materializeJs from "materialize-css/dist/js/materialize.js";
import Glide  from '@glidejs/glide';
import css from '../styles/styles.css';

document.addEventListener('DOMContentLoaded', function () {
    materializeJs.AutoInit();
    const navElement = document.querySelectorAll('.sidenav');
    const nav = M.Sidenav.init(navElement, {});

    const parallaxElement = document.querySelectorAll('.parallax');
    const parallax = M.Parallax.init(parallaxElement, {});


    document.addEventListener('scroll', timeline);

    function timeline(){
        const threshold_position = window.scrollY + window.innerHeight * 2/3;
        const timeline_events = document.querySelectorAll('.timeline li');

        Array.prototype.forEach.call(timeline_events, item => {
            if(item.offsetTop < threshold_position){
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        })
    }
    timeline();


    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {});


    const glide = new Glide('.glide', {
        type: 'carousel',
        perView: 4,
        focusAt: 'center',
        breakpoints: {
            800: {
                perView: 2
            },
            480: {
                perView: 1
            }
        }
    })

    glide.mount()


    glide.settings.animationDuration = 2000;
    glide.settings.gap = 0;
    glide.settings.rewindDuration = 2000;
});

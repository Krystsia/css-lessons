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

            console.log(window.scrollY, item.offsetTop)
            if(item.offsetTop < threshold_position){
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        })
    }
    timeline();
    const glide = new Glide('.glide').mount();
    // glide.settings.autoplay = true;
    glide.settings.animationDuration = 2000;
    glide.settings.gap = 0;
    glide.settings.rewindDuration = 2000;
});
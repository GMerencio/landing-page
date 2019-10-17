import smoothscroll from 'smoothscroll-polyfill';
import 'normalize.css';
import './../scss/main.scss';

/**
 * Smoothly scrolls to the anchor specified by the link to which this listener
 * is attached.
 */

let scrollToAnchor = function(e) {
  e.preventDefault();

  document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
}

window.onload = function() {
  smoothscroll.polyfill();
  
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', scrollToAnchor);
  });
};
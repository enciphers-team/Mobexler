/* 
  Template Name: Neloz - Responsive Bootstrap 4 Landing Page Template
   Author: Themesdesign
   Version: 1.0.0
   Created: Jan 2019
   File Description: animate-text init file
*/

// Wrap every letter in a span
var textWrapper = document.querySelector('.hero-7-title .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.hero-7-title .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.hero-7-title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
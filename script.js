document.documentElement.classList.add('js');
(function(){var els=document.querySelectorAll('.reveal');
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.12,rootMargin:'0px 0px -5% 0px'});
els.forEach(function(e,i){e.style.transitionDelay=(Math.min(i%4,3)*70)+'ms';io.observe(e)});})();

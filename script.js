// Update footer year
(function(){
  var yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }
})();

// Smooth scrolling for internal anchor links
(function(){
  var anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

// Theme toggle persistence and UI update
(function(){
  var root = document.documentElement;
  var key = 'theme';
  var saved = localStorage.getItem(key);
  if(saved === 'dark'){ root.setAttribute('data-theme','dark'); }
  var btn = document.getElementById('themeToggle');
  function render(){
    var isDark = root.getAttribute('data-theme') === 'dark';
    if(btn){ btn.textContent = isDark ? '🌙 Dark' : '🌞 Light'; }
  }
  render();
  if(btn){
    btn.addEventListener('click', function(){
      var isDark = root.getAttribute('data-theme') === 'dark';
      if(isDark){
        root.removeAttribute('data-theme');
        localStorage.setItem(key,'light');
      } else {
        root.setAttribute('data-theme','dark');
        localStorage.setItem(key,'dark');
      }
      render();
    });
  }
})();
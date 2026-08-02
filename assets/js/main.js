document.addEventListener('click', function (e) {
  document.querySelectorAll('.lang-dropdown[open]').forEach(function (menu) {
    if (!menu.contains(e.target)) menu.removeAttribute('open');
  });
});

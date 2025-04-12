fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu-container').innerHTML = data;
    
    // Somente após o menu ser inserido, inicializamos o script do menu
    const mobileNavbar = new MobileNavbar(
      ".mobile-menu",
      ".nav-list",
      ".nav-list li",
    );
    mobileNavbar.init();
  });

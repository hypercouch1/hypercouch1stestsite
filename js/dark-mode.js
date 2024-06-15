document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Check if dark mode was previously enabled
  if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
  }

  darkModeToggle.addEventListener('click', () => {
    if (localStorage.getItem('darkMode') !== 'enabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });

  function enableDarkMode() {
    body.classList.add('dark-mode');
    document.querySelectorAll('.details-button, .add-to-cart-button').forEach(button => {
      button.classList.add('dark-mode');
    });
    document.querySelectorAll('.product, .product-details').forEach(element => {
      element.classList.add('dark-mode');
    });
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.innerText = 'Toggle Light Mode';
  }

  function disableDarkMode() {
    body.classList.remove('dark-mode');
    document.querySelectorAll('.details-button, .add-to-cart-button').forEach(button => {
      button.classList.remove('dark-mode');
    });
    document.querySelectorAll('.product, .product-details').forEach(element => {
      element.classList.remove('dark-mode');
    });
    localStorage.setItem('darkMode', null);
    darkModeToggle.innerText = 'Toggle Dark Mode';
  }
});

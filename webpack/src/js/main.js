// Import our custom CSS
import '../scss/styles.scss';
// import "../scss/_hangman.scss";
// Import only the Bootstrap components we need
import { Util, Dropdown, Offcanvas, Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })

import './hangman.js';
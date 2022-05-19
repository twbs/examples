// Import only the Bootstrap components we need
// Alternatively, you could `import * as bootstrap from 'bootstrap'`.
import { Util, Dropdown, Offcanvas, Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })

// Import only the Bootstrap components we need
//
// Parcel's resolver can't currently follow the bare "bootstrap" specifier's
// package.json#exports entry, so import the dist file directly instead.
import { Popover } from 'bootstrap/js/dist/index.js';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })

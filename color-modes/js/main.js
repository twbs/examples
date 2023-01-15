//
// Place any custom JS here
//

import * as bootstrap from 'bootstrap'

document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })

// Import only the Bootstrap components we need
// import bootstrap from 'bootstrap';
import * as bootstrap from 'bootstrap';

  // add icons
import "bootstrap-icons/font/bootstrap-icons.css";

import "./_validateforms";

window.bootstrap = bootstrap;

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  });

document.getElementById("toastbtn").onclick = function() {
  var toastElList = [].slice.call(document.querySelectorAll('.liveToast'))
  var toastList = toastElList.map(function(toastEl) {
    return new bootstrap.Toast(toastEl)
  })
  toastList.forEach(toast => toast.show())
}

// Import jQuery
import jQuery from 'jquery';

// Import our custom CSS
import '../scss/styles.scss'

// Add jQuery to the Window (see https://getbootstrap.com/docs/5.2/getting-started/javascript/#optionally-using-jquery)
console.log('`window.jQuery = jQuery;` gets called here');
window.jQuery = jQuery;

// Import only the Bootstrap components we need
import { Popover } from 'bootstrap';

// Initialise the popover onload
jQuery(function() {
    console.log('.popover() gets called here');
    jQuery('[data-bs-toggle="popover"]').popover();
});

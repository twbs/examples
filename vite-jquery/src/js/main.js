// Import our custom CSS
import '../scss/styles.scss'


// Import jQuery
import jQuery from 'jquery';

// Add jQuery to the Window (see https://getbootstrap.com/docs/5.2/getting-started/javascript/#optionally-using-jquery)
window.jQuery = jQuery;

// Import only the Bootstrap components we need
import { Popover } from 'bootstrap';

// Initialise the popover onload
jQuery(function() {
    jQuery('[data-bs-toggle="popover"]').popover();
});

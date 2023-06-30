// Import our custom CSS
import '../scss/styles.scss'

// bring in Bootstrap
import('./bootstrap')

import('bootstrap').then(bs => {
  document.querySelector('.alert').classList.add('show')
  setTimeout(() => {
    bs.Alert.getOrCreateInstance('.alert').close()
  }, 3000)
})

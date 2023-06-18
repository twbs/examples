import('bootstrap').then(bs => {
  // Enable tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(tooltipTriggerEl => {
    new bs.Tooltip(tooltipTriggerEl)
  })

  // Enable popovers
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(popoverTriggerEl => {
    bs.Popover.getOrCreateInstance(popoverTriggerEl)
  })
})

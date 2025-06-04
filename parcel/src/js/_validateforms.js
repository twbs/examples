// Exemple de JavaScript de démarrage pour désactiver les soumissions de formulaires en cas de champs invalides

(() => {
  'use strict'

  // Récupérer tous les formulaires auxquels nous voulons appliquer des styles de validation Bootstrap personnalisés

  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

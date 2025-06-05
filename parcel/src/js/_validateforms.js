// Exemple de JavaScript de démarrage pour désactiver les soumissions de formulaires en cas de champs invalides

(() => {

  'use strict'

  // Récupérer tous les formulaires auxquels nous voulons appliquer des styles de validation Bootstrap personnalisés

  const forms = document.querySelectorAll('.needs-validation');
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
  // console.log(forms);

    form.addEventListener('submit', event => {

      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      // si le formulaire est vide alors on retire la class was-validated


      form.classList.add('was-validated')
    }, false)

    // On retire la class was-validated si le formulaire est réinitialisé
    form.addEventListener('reset', event => {
      // console.log('reset');
      form.classList.remove('was-validated')
    }, false)

  })
})()

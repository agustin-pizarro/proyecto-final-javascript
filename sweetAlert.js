/* SWEETALERT INDEX */
Swal.fire({
    title: '<strong>¡Nuestra tienda ya esta disponible!</strong>',
    icon: 'info',
    html:
      'Hace click ' +
      '<a href="./tienda.html">aca</a> ' +
      'para visitarla.',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i>',
    confirmButtonAriaLabel: 'Thumbs up,',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down',
  })
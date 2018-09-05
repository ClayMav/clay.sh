if($('#page-name').length) {
  $('#page-name').empty();
  $(document).ready(function() {
      // type the name
      var typed = new Typed('#page-name', {
          strings: ['^500' + $('#page-name').attr('label')],
          typeSpeed: 80,
      });
  });
}

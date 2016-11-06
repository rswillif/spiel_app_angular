$('body').on('click', '.newSpiel',  function () {
  $('#intro').hide();
});

// $("body").on('click', '.gimme', function () {
// });

var spielMe = null;

$("body").on('click', '.heart', function () {
   spielMe = $('#gameForm').html();
  console.log(spielMe);
});

$('body').on('click', '.inputs', function() {
  $(this).text('');
  $(this).toggleClass('acitve');

});

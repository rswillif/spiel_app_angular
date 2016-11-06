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



$('body').on('click', '#textChange', function () {

    var status = $('#btnLoginToRegister').text();

    if (status === 'LOGIN') {
        $('#btnLoginToRegister').text('REGISTER');
        $('#loginToRegister').text('Already registered?');
        $(this).text('Login');
        $('.register').fadeIn();

    } else if (status === 'REGISTER') {
        $('#btnLoginToRegister').text('LOGIN');
        $('#loginToRegister').text('Not registered?');
        $(this).text('Register');
        $('.register').fadeOut();
    }
console.log("het");
});

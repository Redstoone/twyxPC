$(function () {
  setTimeout(() => {
    $(function () {
      $('.page-preview').removeClass('page-loading');
      $('.loader').css({ opacity: 0 });
      $('.wrapper').css({ opacity: 1 });
    })
  }, 500);


  $('.menu-global').on('click', function(e) {
    if (e && e.preventDefault)
      e.preventDefault();
    else
      window.event.returnValue = false;
    $('.sidebar').addClass('open')
    e.stopPropagation();
  })

  $('body').on('click', function () {
    $('.sidebar.open').removeClass('open');
  });
})
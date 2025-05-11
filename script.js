  $(document).ready(function() {
    var btn = $('#backToTop');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.fadeIn();
      } else {
        btn.fadeOut();
      }
    });

    btn.click(function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 300);
    });
  });

$("#showButton").click(function() {
  $(".content1").show();
});
$("#hideButton").click(function() {
  $(".content1").hide();
});


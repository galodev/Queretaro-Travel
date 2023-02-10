$(document).ready(function() {
    $("a[href='#regions']").click(function(e) {
      e.preventDefault();
      var headerHeight = 125;
      $("html, body").animate({
        scrollTop: $("#regions").offset().top - headerHeight
      }, 10);
    });
  });

  $(document).ready(function() {
    $("a[href='#experiences']").click(function(e) {
      e.preventDefault();
      var headerHeight = 90;
      $("html, body").animate({
        scrollTop: $("#experiences").offset().top - headerHeight
      }, 10);
    });
  });

  $(document).ready(function() {
    $("a[href='#find-us']").click(function(e) {
      e.preventDefault();
      var headerHeight = 125;
      $("html, body").animate({
        scrollTop: $("#find-us").offset().top - headerHeight
      }, 10);
    });
  });

  $(document).ready(function() {
    $("a[href='#home']").click(function(e) {
      e.preventDefault();
      var headerHeight = 125;
      $("html, body").animate({
        scrollTop: $("#home").offset().top - headerHeight
      }, 10);
    });
  });
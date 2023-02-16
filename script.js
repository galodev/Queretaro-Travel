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

const element = document.querySelector('.fa-sun');

element.addEventListener('mouseenter', function() {
  element.classList.add('fa-spin');
});

element.addEventListener('mouseleave', function() {
  element.classList.remove('fa-spin');
});

const climateLi = document.getElementById("climate-li").firstElementChild;

fetch("https://api.openweathermap.org/data/2.5/weather?q=Queretaro,MX&appid=527de2423beb3aed9d1d6d64c95c3b05")
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const weather = data.weather[0].description;
    climateLi.innerHTML = `${temperature}°C ${weather}`;
  })
  .catch(error => {
    climateLi.innerHTML = "Failed to load climate data.";
  });
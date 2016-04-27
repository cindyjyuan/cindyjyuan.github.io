$(document).ready(function() {
  $("body").fadeIn(1000).removeClass('hidden');
  $("#intro-text2").click(function(){
    $("#highlights-section").show();
    $("#next-section").show(1000);
    $("#intro-text2").fadeOut("fast");

  });
  $("#intro-text2").hover(function(){
    $("#intro-text2").css( 'cursor', 'pointer' );
  });

  $("#intro-text2").hover(
       function () {
          $(this).css({"font-style": "italic"});
          $(this).css({"color": "pink"});
       },
       function () {
          $(this).css({"font-style": "normal"});
          $(this).css({"color": "white"});
       }
    );

  $('.alaska-pin').hover( function() {
      $('#alaska').fadeIn(50);
  }, function() {
      $('#alaska').fadeOut(50);
  });

  $('.home-pin').hover( function() {
      $('#home').fadeIn(50);
  }, function() {
      $('#home').fadeOut(50);
  });

  $('.la-pin').hover( function() {
      $('#la').fadeIn(50);
  }, function() {
      $('#la').fadeOut(50);
  });

  $('.ensenada-pin').hover( function() {
      $('#ensenada').fadeIn(50);
  }, function() {
      $('#ensenada').fadeOut(50);
  });

  $('.hawaii-pin').hover( function() {
      $('#hi').fadeIn(50);
  }, function() {
      $('#hi').fadeOut(50);
  });

  $('.ny-pin').hover( function() {
      $('#ny').fadeIn(50);
  }, function() {
      $('#ny').fadeOut(50);
  });

  $('.cancun-pin').hover( function() {
      $('#cancun').fadeIn(50);
  }, function() {
      $('#cancun').fadeOut(50);
  });

  $('.europe1-pin').hover( function() {
      $('#france').fadeIn(50);
  }, function() {
      $('#france').fadeOut(50);
  });

  $('.europe2-pin').hover( function() {
      $('#italy').fadeIn(50);
  }, function() {
      $('#italy').fadeOut(50);
  });

  $('.bj-pin').hover( function() {
      $('#bj').fadeIn(50);
  }, function() {
      $('#bj').fadeOut(50);
  });

  $('.hainan-pin').hover( function() {
      $('#hainan').fadeIn(50);
  }, function() {
      $('#hainan').fadeOut(50);
  });

  $('.china1-pin').hover( function() {
      $('#shanghai').fadeIn(50);
  }, function() {
      $('#shanghai').fadeOut(50);
  });

  $('.china2-pin').hover( function() {
      $('#others').fadeIn(50);
  }, function() {
      $('#others').fadeOut(50);
  });



  $(window).scroll(function() {
    if ($(this).scrollTop() > 4300) {
      $("#plane").fadeOut("slow")
      $("#pin-white1").fadeIn(2000)
      $("#pin-white2").fadeIn(1000)
      $("#pin-white3").fadeIn(5000)
      $("#pin-white4").fadeIn(4000)
      $("#pin-white5").fadeIn(1000)
      $("#pin-white6").fadeIn(3000)
      $("#pin-white7").fadeIn(2000)
      $("#pin-white8").fadeIn(1000)
      $("#pin-white9").fadeIn(3000)
      $("#next-text").fadeIn(3000)
    };
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
        $("#utah-text").fadeIn(500)
    }
    if ($(this).scrollTop() > 1500) {
        $("#alaska-text").fadeIn(500)
    }
    if ($(this).scrollTop() > 2200) {
        $("#ny-text").fadeIn(500)
    }
    if ($(this).scrollTop() > 2900) {
        $("#huangshan-text").fadeIn(500)
    }
    if ($(this).scrollTop() > 3500) {
        $("#cancun-text").fadeIn(500)
    }
    if ($(this).scrollTop() > 4400) {
        $("#next-section").css({"background-color": "#59b4e2"})
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 900) {
        $("#highlights-section").css({"background-color": "#86ceea"})
    }
  });
});

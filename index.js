$(document).ready(() => {
  // show/hide mobile side menu
  $(".menu-toggle").click(() => {
    $(".side-menu").addClass("show-menu");
    $(".menu-toggle").addClass("hide-with-opacity");
  });
  $(".x-wrapper").click(() => {
    $(".side-menu").removeClass("show-menu");
    $(".menu-toggle").removeClass("hide-with-opacity");
  });

  // change nav on scroll
  $(document).scroll(() => {
    if ($(document).scrollTop() > 95) {
      $(".nav").addClass("nav-beyond-landing");
      $("#logo").removeClass("logo");
      $("#logo").addClass("hide-with-width");
    } else {
      $(".nav").removeClass("nav-beyond-landing");
      $("#logo").addClass("logo");
      $("#logo").removeClass("hide-with-width");
    }
  });

  $(document).scroll(() => {
    if ($(document).scrollTop() > 230) {
      $(".mobile-logo").addClass("hide-with-opacity");
    } else {
      $(".mobile-logo").removeClass("hide-with-opacity");
    }
  });

  // NOT WORKING *********************************
  // Highlight nav links on scroll
  $(window).scroll(function() {
    if ($(document).scrollTop() < $('#about').offset().top) {
      console.log('above sections')
      $('li').removeClass('selected');
    } else {
      $("section").each(function() {
        if ($(document).scrollTop() > $(this).offset().top) {
          $('li').removeClass('selected');
          $(`a[href='#${$(this).attr("id")}']`).parent().addClass('selected')
        }
      })
    }
  });
  // *********************************************

  $(".nav-list li").click(function() {
    $(this).addClass("selected");
    $(".nav-list li")
      .not(this)
      .removeClass("selected");
  });

  // hides side menu when clicking outside
  $(window).click(function(e) {
    if (
      $(".side-menu").hasClass("show-menu") &&
      !e.target.classList.contains("fa-bars")
    ) {
      $(".side-menu").removeClass("show-menu");
      $(".menu-toggle").removeClass("hide-with-opacity");
    }
  });

  // form submission
  $("#contact-form").submit(e => {
    e.preventDefault();
    $.ajax({
      // url: "/email",
      url: "https://probable-eureka.herokuapp.com/email",
      type: "POST",
      dataType: "json",
      data: $("#contact-form").serialize(),
      success: function(response) {
        console.log("success.");
        $("#contact-form").html(
          "<div class='form-success'><h2>Your message has been sent! Thanks for getting in touch.</h2></div>"
        );
      },
      error: function(xhr, status, error) {
        $("#contact-form").html(
          "<div class='form-failure'><h2>Uh-oh! Something went horribly wrong. You can email me directly at <a href='mailto: thetruebriansmith@gmail.com'>thetruebriansmith@gmail.com</a></h2></div>"
        );
      }
    });
  });

  // show and hide project info
  $(".tile-icon").click(function(e) {
    console.log("info icon click");
    $(this)
      .siblings(".tile-tooltip")
      .removeClass("hide-tooltip");
    $(".menu-toggle").addClass("hidden");
  });
  $(".tile-tooltip-x-wrapper").click(function(e) {
    $(this)
      .parent()
      .parent()
      .addClass("hide-tooltip");
    $(".menu-toggle").removeClass("hidden");
  });

  // TYPEWRITER EFFECT
  var i = 0;
  var j = 0;
  var txt1 = '{ full-stack web developer }';
  let txt2 = '{ problem solver }';
  var speed = 75; /* The speed/duration of the effect in milliseconds */

  function typeWriter1() {
    if (i < txt1.length) {
      document.getElementById("typewriter1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter1, speed);
    }
  }

  function typeWriter2() {
    document.getElementById("typewriter1").classList.remove('caret');
    document.getElementById("typewriter2").classList.add('caret');
    if (j < txt2.length) {
      document.getElementById("typewriter2").innerHTML += txt2.charAt(j);
      j++;
      setTimeout(typeWriter2, speed);
    }
  }

  setTimeout(typeWriter1, 500)
  setTimeout(typeWriter2, 3000)
});



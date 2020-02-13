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

  $(document).scroll(() => {
    if ($(document).scrollTop() > 95) {
      $(".nav").addClass("nav-beyond-landing");
      $(".logo").addClass("hidden");
    } else {
      $(".nav").removeClass("nav-beyond-landing");
      $(".logo").removeClass("hidden");
    }
  });

  $(document).scroll(() => {
    if ($(document).scrollTop() > 250) {
      $(".mobile-logo").addClass("hide-with-opacity");
    } else {
      $(".mobile-logo").removeClass("hide-with-opacity");
    }
  });

  // NOT WORKING *********************************
  $(window).scroll(() => {
    $("section").each(function() {
      let sectionOffset = $(this).offset().top;
      console.log(sectionOffset);
      if (sectionOffset >= $(this).scrollTop()) {
        // $(this).addClass("selected");
      }
    });
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
});

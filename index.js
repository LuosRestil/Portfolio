$(document).ready(function() {
  $(".nav-list li").click(function() {
    $(this).addClass("selected");
    $(".nav-list li")
      .not(this)
      .removeClass("selected");
  });

  $(window).scroll(() => {
    $(".section").each(() => {
      let sectionOffset = $(this.hash).offset().top;
      if (sectionOffset <= $(this).scrollTop()) {
        $(this).addClass("selected");
      }
    });
  });

  $(document).scroll(() => {
    if ($(document).scrollTop > 95) {
      $(".nav-wrapper").addClass("nav-beyond-landing");
      $(".logo").addClass("hidden");
    } else {
      $(".nav-wrapper").removeClass("nav-beyond-landing");
      $(".logo").removeClass("hidden");
    }
  });

  $(".menu-toggle").click(() => {
    $(".side-menu").addClass("show-menu");
    $(".menu-toggle").addClass("no-opacity");
  });
  $(".x-wrapper").click(() => {
    $(".side-menu").removeClass("show-menu");
    $(".menu-toggle").removeClass("no-opacity");
  });

  $(document).scroll(function() {
    if ($(document).scrollTop() > 250) {
      $(".mobilelogo").addClass("hidden");
      $(".toggleMenu").css("padding", "9px 12px 9px 9px");
    } else {
      $(".mobilelogo").removeClass("hidden");
      $(".toggleMenu").css("padding", "15px 20px 15px 15px");
    }
  });
});

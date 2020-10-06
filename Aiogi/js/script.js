$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu,.header__profile").toggleClass("active");
    $("body").toggleClass("lock");
  });
  // проверить при любой ширине окна
  $(".search__input").focus(function (event) {
    $(".header__logo").addClass("hidden");
  });

  // $(".header__list").click(function (event) {
  $(".header__menu").click(function (event) {
    $(".header__burger,.header__menu,.header__profile").removeClass("active");
    $("body").removeClass("lock");
  });
  $(".search__input").blur(function (event) {
    $(".header__logo").removeClass("hidden");
  });
});

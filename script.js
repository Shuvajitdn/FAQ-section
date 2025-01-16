$(document).ready(function () {
    $('.accordion-title').click(function () {
      const content = $(this).next('.accordion-content');
      const icon = $(this).find('i');
      $('.accordion-content').not(content).slideUp();
      $('.accordion-title i').not(icon).removeClass('chevron-top');
      content.slideToggle();
      icon.toggleClass('chevron-top');
    });
  });
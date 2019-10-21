/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $('.navbar-brand').innerHeight()
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = "#" + modal.id;
	var title = $(modal).find('h2').text();

  var url = window.location.origin + window.location.pathname + hash;
  history.pushState({}, title, url);

});

$('.modal').on('click.hidden.bs.modal', function() {
  var url = window.location.origin + window.location.pathname;
  history.pushState({}, document.title, url);
});

$(function() {
    function openModalByHash(){
        var hash = window.location.hash;
        var anchor = hash.split(hash.indexOf('?'))[0];
        var modal = $(anchor+'.portfolio-modal');
        if(anchor && modal.length > 0) {
          $('.modal.in').not(modal).modal('hide');
          $(modal).modal('show');
        }
        else{
          $('.modal.in').modal('hide');
          $('.modal-backdrop').remove();
          var url = window.location.origin + window.location.pathname;
          history.pushState({}, document.title, url);
        }
    }
    openModalByHash();

    window.addEventListener("hashchange", openModalByHash);

});

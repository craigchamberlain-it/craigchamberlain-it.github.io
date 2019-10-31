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

$(function() {
    $('button[type=submit]').on('click',function(event){
      var form = this.closest(".ml-form-embedContainer");
      var interestGroup = $(form).find(".ml-form-interestGroupsRow");
      var radios = interestGroup.find(':checkbox');
      if  (radios.length > 0 && radios.filter(':checked').length == 0){
          event.preventDefault();
          interestGroup.addClass("ml-error");
          if ( $('.notice').length == 0){
            interestGroup.append('<p class="notice">Please select at least one course to subscribe to.</p>');

          }
      }
      else
      {
        interestGroup.children('p.notice').remove();
      }

    }

  );

  if(window.location.pathname == "/windows10/"){
    $('[value="66182084"]').attr('checked', true);
  }
  if(window.location.pathname == "/mac-os/"){
    $('[value="66212212"]').attr('checked', true);
  }
});

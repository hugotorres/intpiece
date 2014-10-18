var $ = jQuery;

/**
 * Sets a behavior for showing a lightbox on the homepage
 * 
 * 
 */
Drupal.behaviors.splashpage = {

  attach : function(context, settings) {
    $(document.body).once('splashpage', Drupal.behaviors.splashpage.init);
  },
  init: function() {
    $('#cboxClose').click(Drupal.behaviors.splashpage.close); 

    // Load the information, this is a around-the-cache solution.
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: '/splashpage.php',
      success: function (data, textStatus, jqXHR) {
        // SplashPage will show us if the country is SplashPaged and supplies
        // us with the flagged boolean.
        if (data.active && !data.flagged) {
          // Add the close link and show the content.
          $('#splashpage-container').after(data.close);
          Drupal.behaviors.splashpage.show(data.nid);
        }
      }
    });
  },
  show: function (nid) {
    var base = 'splashpage-container';
    var params = {};
    params.html = '<div id="colorboxNodeLoading"></div>';

    // Start the colorbox (it's empty for now).
    $.colorbox($.extend({}, params));

    // Setup the Drupal Ajax part.
    var element_settings = {};
    element_settings.progress = { 'type': 'none' };
    element_settings.url = '/colorbox/node/' + nid;
    element_settings.event = 'click';

    Drupal.ajax[base] = new Drupal.ajax(base, $('#splashpage-container')[0], element_settings);

    // Manually fire the Ajax request.
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: element_settings.url,
      success: function (data, textStatus, jqXHR) {
        Drupal.ajax[base].success(data, textStatus);
      }
    });
  },
  close: function() {
    // As the colorbox is closed, check the flag for this splashpage.
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: '/splashpage.php?check=1',
      success: function (data) {
        // done, no need to interpret the response.
      }
    });
  }
};;

// $Id: pathauto.js,v 1.8 2010/04/22 19:41:30 davereid Exp $
(function ($) {

Drupal.behaviors.pathFieldsetSummaries = {
  attach: function (context) {
    $('fieldset#edit-path', context).drupalSetSummary(function (context) {
      var path = $('#edit-path-alias').val();
      var automatic = $('#edit-path-pathauto-perform-alias').attr('checked');

      if (automatic) {
        return Drupal.t('Automatic alias');
      }
      if (path) {
        return Drupal.t('Alias: @alias', { '@alias': path });
      }
      else {
        return Drupal.t('No alias');
      }
    });
  }
};

})(jQuery);

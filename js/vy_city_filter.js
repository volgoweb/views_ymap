/**
 * 
 */


Drupal.behaviors.vy_city_filter = function (context) {
  var $form = $('#views-exposed-form-map-page-1'), 
      $city_input = $form.find('input[name="city"]');
  $city_input.bind('click', function() {
    if ($('.cities-links').length > 0) {
      $('.cities-links').remove();
    }
    else {
      show_cities_block();
    }
  });

  $city_input.bind('keydown', function() {
    $('.cities-links').remove();
  });


  function show_cities_block() {
    var block = Drupal.settings.views_ymap.cities_links_block;
    var top = $city_input.position().top;
    var height = $city_input.height();
    $city_input.after(block);
    $('.cities-links').css({
      position: 'absolute',
      top: (top + height) + 'px',
      'z-index': 1000,
    });

    $('.cities-links .close').bind('click', function() {
      $('.cities-links').remove();
    });
  }

  function get_current_country_name() {
    var $country_select = $form.find('select[name="country"]');
    return $country_select.find('option:selected').text();
  }

};

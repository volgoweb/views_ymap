Drupal.views_ymap = {};

Drupal.views_ymap.config = {
  base_zoom: 15,
};

Drupal.views_ymap.map = {};

Drupal.views_ymap.myCollection = {};

/**
 * Отображает на карте указанные объекты
 */
Drupal.views_ymap.show_objects = function(objects) {
	var map = Drupal.views_ymap.map;
	var myCollection = Drupal.views_ymap.myCollection;

  myCollection.removeAll();

  var number = 1;
  for (i in objects) {
    var placemark = new ymaps.Placemark([objects[i].lat,objects[i].lon], {
        iconContent: number,
        balloonContentHeader: '<div class="balloon__header">'+objects[i].title+'</div>',
        balloonContentBody: '<div class="balloon__body">'+objects[i].address + '</div>',
        nid: objects[i].nid,   
      }, {
        // Опции
        preset: 'twirl#nightStretchyIcon' // иконка растягивается под контент
      });

    myCollection.add(placemark);		

    number++;
  }
  map.geoObjects.add(myCollection);

  // Set center and zoom using collection bounds.
  map.setBounds(myCollection.getBounds());
  
  Drupal.views_ymap.correct_zoom();
};

/**
 * Переводит фокус карты на объект
 */
Drupal.views_ymap.go_to = function(lat, lon, nid) {
	var map          = Drupal.views_ymap.map,
      myCollection = Drupal.views_ymap.myCollection,
      config       = Drupal.views_ymap.config;

  map.setCenter([lat, lon], config.base_zoom);

  myCollection.each(function (item) {
    if (item.properties.get('nid') == nid) {
      item.balloon.open();
    }
  });
  return false;
};

/**
 * Вешает обработчики для списка объектов
 */
Drupal.views_ymap.bind_objects_items = function() {
  $('.map-object-item_js').bind('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var lat = $(this).attr('lat');
    var lon = $(this).attr('lon');
    var title = $(this).text();
    var nid = $(this).attr('nid');
    Drupal.views_ymap.go_to(lat, lon, nid);
  });
};

Drupal.behaviors.vy_map = function() {
  if (!Drupal.settings && !Drupal.settings.views_ymap) {
    return;
  }

  var config = Drupal.views_ymap.config;
	
	ymaps.ready(function () {
    Drupal.views_ymap.map = new ymaps.Map('services-ymap', {
        center: [56.326944, 44.0075],
        zoom: config.base_zoom,
        type: 'yandex#map',
        behaviors: ['default', 'scrollZoom']
    });
	
    //Добавляем элементы управления
     Drupal.views_ymap.map.controls                
              .add('zoomControl')                
              .add('typeSelector')                
              .add('mapTools');
        
    Drupal.views_ymap.myCollection = new ymaps.GeoObjectCollection();				

    Drupal.views_ymap.show_objects(Drupal.settings.views_ymap.map_objects);

    Drupal.views_ymap.bind_objects_items();
  })
};

/**
 * При слишком маленьком масштабе увеличивает его
 */
Drupal.views_ymap.correct_zoom = function() {
	var map    = Drupal.views_ymap.map,
      zoom   = map.getZoom();
      config = Drupal.views_ymap.config;

  if (zoom > config.base_zoom) {
    map.setZoom(config.base_zoom);
  }
};

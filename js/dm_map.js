Drupal.dfunc_map = {};

Drupal.dfunc_map.config = {
  base_zoom: 15,
};

Drupal.dfunc_map.map = {};

Drupal.dfunc_map.myCollection = {};

/**
 * Отображает на карте указанные объекты
 */
Drupal.dfunc_map.show_objects = function(objects) {
	var map = Drupal.dfunc_map.map;
	var myCollection = Drupal.dfunc_map.myCollection;

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
  
  Drupal.dfunc_map.correct_zoom();
};

/**
 * Переводит фокус карты на объект
 */
Drupal.dfunc_map.go_to = function(lat, lon, nid) {
	var map          = Drupal.dfunc_map.map,
      myCollection = Drupal.dfunc_map.myCollection,
      config       = Drupal.dfunc_map.config;

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
Drupal.dfunc_map.bind_objects_items = function() {
  $('.map-object-item_js').bind('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var lat = $(this).attr('lat');
    var lon = $(this).attr('lon');
    var title = $(this).text();
    var nid = $(this).attr('nid');
    Drupal.dfunc_map.go_to(lat, lon, nid);
  });
};

Drupal.behaviors.dm_map = function() {
  if (!Drupal.settings && !Drupal.settings.dfunc_map) {
    return;
  }

  var config = Drupal.dfunc_map.config;
	
	ymaps.ready(function () {
    Drupal.dfunc_map.map = new ymaps.Map('services-ymap', {
        center: [56.326944, 44.0075],
        zoom: config.base_zoom,
        type: 'yandex#map',
        behaviors: ['default', 'scrollZoom']
    });
	
    //Добавляем элементы управления
     Drupal.dfunc_map.map.controls                
              .add('zoomControl')                
              .add('typeSelector')                
              .add('mapTools');
        
    Drupal.dfunc_map.myCollection = new ymaps.GeoObjectCollection();				

    Drupal.dfunc_map.show_objects(Drupal.settings.dfunc_map.map_objects);

    Drupal.dfunc_map.bind_objects_items();
  })
};

/**
 * При слишком маленьком масштабе увеличивает его
 */
Drupal.dfunc_map.correct_zoom = function() {
	var map    = Drupal.dfunc_map.map,
      zoom   = map.getZoom();
      config = Drupal.dfunc_map.config;

  if (zoom > config.base_zoom) {
    map.setZoom(config.base_zoom);
  }
};

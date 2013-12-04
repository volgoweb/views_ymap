Drupal.dfunc_map = {};
Drupal.dfunc_map.map = {};
Drupal.dfunc_map.myCollection = {};
Drupal.dfunc_map.show_objects = function(objects) {
	var map = Drupal.dfunc_map.map;
	var myCollection = Drupal.dfunc_map.myCollection;

  myCollection.removeAll();

  // if (!(objects instanceof  Array)) {
  //   return;
  // }

  var number = 1;
  var src_res = '';
  for (i in objects) {
    var placemark = new ymaps.Placemark([objects[i].lon,objects[i].lat], {
      iconContent: number,
        balloonContentHeader: '<div style="color:#ff0303;font-weight:bold">'+objects[i].title+'</div>',
        balloonContentBody: '<div style="font-size:13px;"><div><strong>Адрес:</strong> '+objects[i].title + '</div></div>'   
            }, {
            // Опции
            preset: 'twirl#nightStretchyIcon' // иконка растягивается под контент
            });

    myCollection.add(placemark);		
    src_res=src_res+'<p>'+number+'. '+'<a href="#" onClick="return Drupal.dfunc_map.go_to('+objects[i].lat+', '+objects[i].lon+",'"+objects[i].title+"');"+'\">'+objects[i].title+'</a></p>';

    number++;
  }
  map.geoObjects.add(myCollection);

  // Set center and zoom using collection bounds.
  map.setBounds(myCollection.getBounds());

};

Drupal.dfunc_map.go_to = function(lat, lon, title) {
	var map = Drupal.dfunc_map.map;
	var myCollection = Drupal.dfunc_map.myCollection;

  map.setCenter([lon, lat], 16);

  myCollection.each(function (item) {
    if (item.properties.get('balloonContentHeader') == '<div style="color:#ff0303;font-weight:bold">'+title+'</div>') {
      item.balloon.open();
    }
  });
  return false;
};

Drupal.dfunc_map.bind_objects_items = function() {
  $('.map-object-item_js').bind('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var lat = $(this).attr('lat');
    var lon = $(this).attr('lon');
    var title = $(this).text();
    Drupal.dfunc_map.go_to(lat, lon, title)
  });
};

Drupal.behaviors.dm_map = function() {
  if (!Drupal.settings && !Drupal.settings.dfunc) {
    return;
  }

	
	ymaps.ready(function () {
    Drupal.dfunc_map.map = new ymaps.Map('ymap', {
        center: [56.326944, 44.0075],
        zoom: 15,
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

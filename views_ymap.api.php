<?php
  
/**
 * Implementation of hook_vy_add_js_vars_about_objects().
 *
 * Хук для изменения массива параметров объектов, которые будут отображаться на карте
 * Позволяет менять: 
 *  - заголовок баллуна (balloon_title)
 *  - содержимое баллуна (balloon_body)
 */
function hook_vy_add_js_vars_about_objects($objects, $view) {
  // пример изменения содержимого баллуна
  if (!empty($view->result)) {
    foreach ($view->result as $i => $row) {
      $address = $row->field_field_service_address[0][raw]['value'];
      $objects[$i]['balloon_body'] = $address;
    }
  }
  return $objects;
}


/**
 * Implementation of hook_vy_object_balloon().
 *
 * Хук для изменения массива параметров объектов, которые будут отображаться на карте
 * Позволяет менять: 
 *  - заголовок баллуна (balloon_title)
 *  - содержимое баллуна (balloon_body)
 *
 *  @param $balloon - массив параметров баллуна
 *  @param $view_result_row - объект строки результатов вьюса
 */
function hook_vy_object_balloon($balloon, $view_result_row) {
  $address = $row->field_field_service_address[0]['raw']['value'];
  $balloon['balloon_body'] = $address;

  return $balloon;
}

<?php
/**
 * @file
 * views_ymap_additional.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function views_ymap_additional_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function views_ymap_additional_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function views_ymap_additional_node_info() {
  $items = array(
    'views_ymap_objects' => array(
      'name' => t('Объект для карты'),
      'base' => 'node_content',
      'description' => t('Материалы данного типа служат примером отображения материалов на яндекс-карте с помощью модуля views_ymap (от веб-студии "Ruswebs").'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}

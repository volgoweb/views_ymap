<?php
/**
 * @file
 * views_ymap_additional.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function views_ymap_additional_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'node-views_ymap_objects-body'
  $field_instances['node-views_ymap_objects-body'] = array(
    'bundle' => 'views_ymap_objects',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(
          'peekaboo' => FALSE,
          'peekaboo_autoload' => FALSE,
          'peekaboo_autoload_delay' => 0,
          'peekaboo_link' => TRUE,
          'peekaboo_link_remove' => TRUE,
          'peekaboo_link_text' => 'Show field',
          'peekaboo_link_text_hide' => 'Hide field',
          'peekaboo_module' => 'text',
          'peekaboo_reload' => FALSE,
          'peekaboo_reload_delay' => 20,
          'peekaboo_type' => 'inline',
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(
          'peekaboo' => FALSE,
          'peekaboo_autoload' => FALSE,
          'peekaboo_autoload_delay' => 0,
          'peekaboo_link' => TRUE,
          'peekaboo_link_remove' => TRUE,
          'peekaboo_link_text' => 'Show field',
          'peekaboo_link_text_hide' => 'Hide field',
          'peekaboo_module' => 'text',
          'peekaboo_reload' => FALSE,
          'peekaboo_reload_delay' => 20,
          'peekaboo_type' => 'inline',
          'trim_length' => 600,
        ),
        'type' => 'text_summary_or_trimmed',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'field_name' => 'body',
    'label' => 'Body',
    'required' => FALSE,
    'settings' => array(
      'display_summary' => TRUE,
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'rows' => 20,
        'summary_rows' => 5,
      ),
      'type' => 'text_textarea_with_summary',
      'weight' => -4,
    ),
  );

  // Exported field_instance: 'node-views_ymap_objects-field_lat'
  $field_instances['node-views_ymap_objects-field_lat'] = array(
    'bundle' => 'views_ymap_objects',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Географическая широта, в виде числа вещественного типа.',
    'display' => array(
      'default' => array(
        'label' => 'inline',
        'module' => 'number',
        'settings' => array(
          'decimal_separator' => '.',
          'peekaboo' => FALSE,
          'peekaboo_autoload' => FALSE,
          'peekaboo_autoload_delay' => 0,
          'peekaboo_link' => TRUE,
          'peekaboo_link_remove' => TRUE,
          'peekaboo_link_text' => 'Show field',
          'peekaboo_link_text_hide' => 'Hide field',
          'peekaboo_module' => 'number',
          'peekaboo_reload' => FALSE,
          'peekaboo_reload_delay' => 20,
          'peekaboo_type' => 'inline',
          'prefix_suffix' => TRUE,
          'scale' => 2,
          'thousand_separator' => ' ',
        ),
        'type' => 'number_decimal',
        'weight' => 1,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'field_name' => 'field_lat',
    'label' => 'Широта',
    'required' => 0,
    'settings' => array(
      'max' => '',
      'min' => '',
      'prefix' => '',
      'suffix' => '',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'number',
      'settings' => array(),
      'type' => 'number',
      'weight' => -3,
    ),
  );

  // Exported field_instance: 'node-views_ymap_objects-field_lon'
  $field_instances['node-views_ymap_objects-field_lon'] = array(
    'bundle' => 'views_ymap_objects',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Географическая долгота, в виде числа вещественного типа.',
    'display' => array(
      'default' => array(
        'label' => 'inline',
        'module' => 'number',
        'settings' => array(
          'decimal_separator' => '.',
          'peekaboo' => FALSE,
          'peekaboo_autoload' => FALSE,
          'peekaboo_autoload_delay' => 0,
          'peekaboo_link' => TRUE,
          'peekaboo_link_remove' => TRUE,
          'peekaboo_link_text' => 'Show field',
          'peekaboo_link_text_hide' => 'Hide field',
          'peekaboo_module' => 'number',
          'peekaboo_reload' => FALSE,
          'peekaboo_reload_delay' => 20,
          'peekaboo_type' => 'inline',
          'prefix_suffix' => TRUE,
          'scale' => 2,
          'thousand_separator' => ' ',
        ),
        'type' => 'number_decimal',
        'weight' => 2,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'field_name' => 'field_lon',
    'label' => 'Долгота',
    'required' => 0,
    'settings' => array(
      'max' => '',
      'min' => '',
      'prefix' => '',
      'suffix' => '',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'number',
      'settings' => array(),
      'type' => 'number',
      'weight' => -2,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Body');
  t('Географическая долгота, в виде числа вещественного типа.');
  t('Географическая широта, в виде числа вещественного типа.');
  t('Долгота');
  t('Широта');

  return $field_instances;
}

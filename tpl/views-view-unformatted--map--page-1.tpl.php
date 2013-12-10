
<?php
// $Id: views-view-unformatted.tpl.php,v 1.6 2008/10/01 20:52:11 merlinofchaos Exp $
/**
 * @file views-view-unformatted.tpl.php
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php $eldorado_title_has_outputed = FALSE; ?>
<?php foreach ($rows as $id => $row): ?>
  <?php if (!empty($view->result[$id]->node_data_field_lon_field_eldorado_center_value) && !$eldorado_title_has_outputed): ?>
    <div class="services-list__title">Авторизованные сервисные центры "Эльдорадо"</div>
  <?php endif; ?>
  <div class="services-list__item <?php print $classes[$id]; ?>">
    <?php print $row; ?>
  </div>
<?php endforeach; ?>
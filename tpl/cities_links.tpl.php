<?php
$count_cols = 3;
$count_links = count($links);
$count_rows = round($count_links / $count_cols, 0);
if ($count_links % $count_cols != 0) {
  $count_rows += 1;
} 
?>
<div class="cities-links">
<div class="close">X</div>
  <ul>
    <?php $i = 1; ?>
    <?php foreach ($links as $link): ?>
      <li>
        <a href="<?php print $link['href']; ?>"><?php print $link['title']; ?></a>
      </li>
      <?php if ($i % $count_rows == 0): ?>
        </ul>
        <ul>
      <?php endif; ?>
      <?php $i++; ?>
    <?php endforeach; ?>
  </ul>
</div>

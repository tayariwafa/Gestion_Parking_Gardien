<?php
$date1=date_create("2017-03-15");
$date2=date_create("2017-03-12");
$diff=date_diff($date1,$date2);
echo $diff->format("%R%a days");
?>   
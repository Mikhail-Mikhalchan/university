<?php

if (!isset($_POST['check-year'])) return;

$year = $_POST['year'];

$message = (($year % 4 == 0 and $year % 100 != 0) or $year % 400 == 0)
    ? "Это високосный год" 
    : "Это обычный год";
<?php  header('Content-Type: text/html; charset=utf-8');

if (!isset($_POST['get-day'])) return;

$dayNumber = $_POST['dayNumber'];
$days = array(
      1 => 'Понедельник'
    , 2 => 'Вторник'
    , 3 => 'Среда'
    , 4 => 'Четверг'
    , 5 => 'Пятница'
    , 6 => 'Суббота'
    , 7 => 'Воскресенье'
);

$message = ($dayNumber >= 1 and $dayNumber <= 7)
    ? $days[$dayNumber]
    : 'Некоректное число';
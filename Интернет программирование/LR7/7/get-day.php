<?php  header('Content-Type: text/html; charset=utf-8');

if (!isset($_POST['get-day'])) return;

$dayNumber = $_POST['dayNumber'];
$lang = $_POST['lang'];

$days = array(
      1 => array('ru' => 'Понедельник', 'eng' => 'Monday')
    , 2 => array('ru' => 'Вторник', 'eng' => 'Tuesday')
    , 3 => array('ru' => 'Среда', 'eng' => 'Wednesday')
    , 4 => array('ru' => 'Четверг', 'eng' => 'Thursday')
    , 5 => array('ru' => 'Пятница', 'eng' => 'Friday')
    , 6 => array('ru' => 'Суббота', 'eng' => 'Saturday')
    , 7 => array('ru' => 'Воскресенье', 'eng' => 'Sunday')
);

$message = ($dayNumber >= 1 and $dayNumber <= 7)
    ? $days[$dayNumber][$lang]
    : 'Некоректное число';
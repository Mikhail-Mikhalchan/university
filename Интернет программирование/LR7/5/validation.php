<?php  header('Content-Type: text/html; charset=utf-8');

if (!isset($_POST['sign-in'])) return;

$login = $_POST['login'];
$password = $_POST['password'];

$loginMessage = "";
$passwordMessage = "";
$message = "";

if(empty($login)){
    $loginMessage = "<span class='failed'>Поле 'Логин' не должно быть пустым</span>";
}
else if (strlen($password) < 8 ) {
    $passwordMessage = "<span class='failed'>Поле 'Пароль' должно состоять не менее чем из 8 символов</span>";
}
else if(!preg_match("/([0-9]+)/", $password)) {
    $passwordMessage = "<span class='failed'>Поле 'Пароль' должно содержать цифры</span>";
}
else {
    $message = "<p class='success'>Данные введены верно</p>";
}
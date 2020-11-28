<?php  header('Content-Type: text/html; charset=utf-8');

if (!isset($_POST)) return;

$name = htmlspecialchars($_POST['name']);
$age = $_POST['age'];

if (empty($name) or empty($age)) {
    print("Заполните все поля");
    return;
}

$age = intval($age);
if(empty($age)) {
    print("Поле ввода <strong>Возраст</strong> должно быть числом");
    return;
}

$message = $age >= 18 
    ? "Добро пожаловать, <strong>$name</strong>!" 
    : "Сожалеем, <strong>$name</strong>, контент не предназначен для посетителей младше 18 лет";

print("<p>$message</p>");
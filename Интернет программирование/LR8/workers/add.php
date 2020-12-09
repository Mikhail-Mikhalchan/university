<?php header('Content-Type: text/html; charset=utf-8');

    if (!isset($_POST['add'])) return;

    $refererUri = $_SERVER['HTTP_REFERER'];

    $name = $_POST['name']; 
    $age = $_POST['age'];
    
    if(empty($name)) {
        
        print("<p>Поле 'Имя' не заполнено</p>");
        print("<p><a href='$refererUri'>Вернуться к форме</a></p>");
        return;
    }
    if(!empty($age) and ($age < 1 or $age > 150)) {
        
        print("<p>Поле 'Возраст' имеет некорректное значение</p>");
        print("<p><a href='$refererUri'>Вернуться к форме</a></p>");
        return;
    }
    
    $age = empty($age) ? "NULL" : $age;
    
    workers_add($name, $age);
    
    header("Location: $refererUri");
    
    /* --- Методы --- */
    
    function workers_add($name, $age) {
        
        $connection = connectToDb();
        if(!$connection) return null;
        
        $sql = "INSERT INTO workers (name, age) VALUES ('$name', $age)";
    
        $result = mysqli_query($connection, $sql);
        if(!$result) print(mysqli_error($connection));
        
        mysqli_close($connection);
        
        return $result;
    }
    
    function connectToDb() {
    
        include '../config.php';
        
        $connection = mysqli_connect($dbhost, $dbuser, $dbpassword, $db);
        if(!$connection) print(mysqli_error($connection));
        
        return $connection;
    }
?>
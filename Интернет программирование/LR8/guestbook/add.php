<?php header('Content-Type: text/html; charset=utf-8');

    if (!isset($_POST['add'])) return;
    
    $refererUri = $_SERVER['HTTP_REFERER'];

    $name = $_POST['name']; 
    $email = $_POST['email'];
    $message = $_POST['message'];
    $messageLimit = $_POST['messageLimit'];
    
    $affectedRows = guestbook_add($name, $email, $message);
    if(!$affectedRows) return;
    
    $rows = guestbook_list($messageLimit);
    
    if($rows == null || count($rows) == 0) {
        $tableContent = "<tr><td>Записей не найдено</td></tr>"; 
    }
    else {
        foreach ($rows as $row) {
            $user = $row['user'];
            $msg = $row['t'];
            
            $tableContent .= "<tr><td>$user: </td><td>$msg</td></tr>"; 
        }
    }
    
    print("
        <p>Запись успешно добавлена!</p>
        <p><a href='$refererUri'>Вернуться к форме</a></p>
        <table>
            <tbody>$tableContent</tbody>
        </table>
    ");
    
    /* --- Методы --- */
    
    function guestbook_add($name, $email, $message) {
        
        $connection = connectToDb();
        if(!$connection) return null;
        
        $sql = "INSERT INTO gb (user, user_email, t) VALUES ('$name', '$email', '$message')";
    
        $result = mysqli_query($connection, $sql);
        if(!$result) print(mysqli_error($connection));
        
        mysqli_close($connection);
        
        return $result;
    }
    
    function guestbook_list($messageLimit) {
        
        $connection = connectToDb();
        if(!$connection) return null;
        
        $sql = "SELECT * FROM gb";
        $sql .= !empty($messageLimit) ? " LIMIT $messageLimit" : "";
        
        $result = mysqli_query($connection, $sql);
        if(!$result) print(mysqli_error($connection));
        
        $list = mysqli_fetch_all($result, MYSQLI_ASSOC);
        
        mysqli_close($connection);
        
        return $list;
    }
    
    function connectToDb() {
    
        include '../config.php';
        
        $connection = mysqli_connect($dbhost, $dbuser, $dbpassword, $db);
        if(!$connection) print(mysqli_error($connection));
        
        return $connection;
    }
?>
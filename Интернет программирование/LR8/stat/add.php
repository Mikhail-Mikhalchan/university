<?php header('Content-Type: text/html; charset=utf-8');

    function stat_add($ip, $page) {
        
        $connection = connectToDb();
        if(!$connection) return null;
        
        $sql = "INSERT INTO stat (user_ip, page) VALUES ('$ip', '$page')";
    
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
<?php header('Content-Type: text/html; charset=utf-8');

    function products_search($searchValue) {
        
        $connection = connectToDb();
        if(!$connection) return null;
        
        $sql = "SELECT * FROM products 
                WHERE `name` LIKE '%$searchValue%' OR description LIKE '%$searchValue%';";
        
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
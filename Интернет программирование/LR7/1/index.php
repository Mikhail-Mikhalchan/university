<html>
    <head>
        <meta charset="utf-8">
        <title>Тестируем PHP</title>
    </head>
    <body>
        <?php 
            echo '<p>Привет, мир!</p>'; 
            
            $info = phpinfo();
            echo "<p>$info</p>";
        ?>
    </body>
</html>

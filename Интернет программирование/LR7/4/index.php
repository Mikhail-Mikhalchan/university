<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Високосный год</title>
        <?php include 'check-year.php'; ?>
    </head>
    <body>
        <form action="" method="post">
            <label for="year">Год</label>
            <input id="year" name="year" placeholder="Введите год" />
            
            <input type="submit" name="check-year" value="Проверить" />
        </form>
        
        <p><?php print($message); ?></p>
    </body>
</html>
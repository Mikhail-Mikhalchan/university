<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Вход</title>
        <?php include 'get-day.php'; ?>
    </head>
    <body>
        <form action="" method="post">
            <label for="dayNumber">Номер дня недели</label>
            <input id="dayNumber" name="dayNumber" placeholder="Введите число" />
            <select name="lang">
                <option value="ru" selected>Русский</option>
                <option value="eng">Английский</option>
            </select>
            <input type="submit" name="get-day" value="Получить день недели" />
        </form>
        
        <p><?php print($message); ?></p>
    </body>
</html>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Вход</title>
        <link type="text/css" rel="stylesheet" href="style.css">
        <?php include 'validation.php'; ?>
    </head>
    <body>
        <form action="" method="post">
            <p>
                <label for="login">Логин</label><br>
                <input id="login" name="login" placeholder="Введите логин" /><br>
                <?php print($loginMessage); ?>
            </p>
            <p>
                <label for="password">Пароль</label><br>
                <input id="password" type="password" name="password" placeholder="Введите пароль" /><br>
                <?php print($passwordMessage); ?>
            </p>
            
            <input type="submit" name="sign-in" value="Войти" />
        </form>
        <?php print($message); ?>
    </body>
</html>
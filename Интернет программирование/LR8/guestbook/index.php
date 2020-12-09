<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Гостевая книга | Добавление сообщений</title>
    </head>
    <body>
        <form action="add.php" method="post">
            <p>
                <label for="name">Имя</label><br>
                <input id="name" name="name" placeholder="Введите Ваше имя" />
            </p>
            <p>
                <label for="email">e-mail</label><br>
                <input id="email" name="email" placeholder="Введите e-mail" />
            </p>
            <p>
                <label for="message">Сообщение</label><br>
                <textarea id="message" name="message" placeholder="Придуймайте сообщение"></textarea>
            </p>
            <p>
                <label for="messageLimit">Количество выводимых сообщений</label><br>
                <input type="number" id="messageLimit" name="messageLimit" placeholder="Введите число" min="0" />
            </p>
            <p><input type="submit" name="add" value="Сохранить"/></p>
        </form>
    </body>
</html>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Галерея</title>
        <link type="text/css" rel="stylesheet" href="style.css">
        <?php include 'render-images.php'; ?>
    </head>
    <body>
        <div class="gallery"><?php renderImages(); ?></div>
    </body>
</html>
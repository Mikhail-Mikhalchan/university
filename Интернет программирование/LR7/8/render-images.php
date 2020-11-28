<?php  header('Content-Type: text/html; charset=utf-8');

function renderImages() {
    $imageNames = glob("images/*.jpg");
                    
    foreach ($imageNames as $imageName) {
        print("<img src='$imageName' />");
    }
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <h1 id="header">Home</h1>
    <h2 id="titleForList">Bank accounts</h2>
    <ul id="pages">
        <li><a href="bookEventsForm.php">Bank 1</a></li>
        <li><a href="eventList.php">Bank 2</a></li>
        <li><a href="updateEventForm.php">Bank 3</a></li>
    </ul>
    <aside id="offers">
    <?php
    require_once('function.php');
    ?>
        <h3 id="eventTitle"></h3>
        <p id ="catDesc"></p>
        <p id="price"></p>
    </aside>
    <script src="fetchOfferJson.js"></script>
</body>
</html>
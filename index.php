<?php

include('cache/top-cache.php');

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TravelGlobe</title>
    <link rel="icon" type="image/png" href="IMG/Asset 7.png" sizes="6x24">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="fontawesome/css/all.css">
    <link rel="stylesheet" href="CSS/index.css">
    <link rel="stylesheet" href="Header&Footer/header.css">
    <link rel="stylesheet" href="Header&Footer/footer.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script>
        window.jQuery || document.write('<script src="Javascript/jquery.js">\x3C/script>');
    </script>
    <style>

    </style>
</head>

<body>
    <!--Header-->
    <?php include_once 'Header&Footer/header.php' ?>

    <!--Container-->
    <div class="container">

        <?php include_once 'Widgets/hero.php' ?>

        <?php include_once 'Widgets/adventure.php' ?>

        <?php include_once 'Widgets/luxury.php' ?>

        <?php include_once 'Widgets/hundred.php' ?>

        <?php include_once 'Widgets/trendingcars.php' ?>

        <?php include_once 'Widgets/promotion.php' ?>

        <?php include_once 'Widgets/review.php' ?>

        <?php include_once 'Widgets/spotlight.php' ?>

        <?php include_once 'Widgets/faq.php' ?>

        <?php include_once 'Widgets/needmore.php' ?>

    </div>

    <!--Footer-->
    <?php include_once 'Header&Footer/footer.php' ?>

    <!--scripts-->
    <script src="Javascript/hero.js"></script>
    <script src="Javascript/adven.js"></script>
    <script src="Javascript/trendingcars.js"></script>
    <script src="Javascript/spotlight.js"></script>
    <script src="Javascript/hundred.js"></script>
    <script src="Javascript/faq.js"></script>
    <script src="Javascript/jquery.js"></script>
    <script src="Javascript/cur.js"></script>
    <script>
        const ans = document.querySelector('.ans');
        const plus = document.querySelector('.plus');
        const ques1 = document.querySelector('.ques1');
        const ques11 = document.querySelector('.ques11');
        const ques2 = document.querySelector('.ques2');
        const ques3 = document.querySelector('.ques3');
        const ques22 = document.querySelector('.ques22');
        const ques33 = document.querySelector('.ques33');
        const minus = document.querySelector('.minus');
        const ans1 = document.querySelector('.ans1');
        const plus1 = document.querySelector('.plus1');
        const minus1 = document.querySelector('.minus1');
        const ans2 = document.querySelector('.ans2');
        const plus2 = document.querySelector('.plus2');
        const minus2 = document.querySelector('.minus2');


        $(document).ready(function() {
            $(eur).click(function() {

                if (minus.style.display == "none") {
                    plus.classList.add("hide");
                    plus.classList.remove("show");
                    minus.classList.remove("hide");
                    minus.classList.add("show");
                    ans.classList.remove("hide");
                    ans.classList.add("show");
                } else {
                    ans.classList.remove("show");
                    ans.classList.add("hide");
                    plus.classList.add("show");
                    plus.classList.remove("hide");
                    minus.classList.remove("show");
                    minus.classList.add("hide");
                }
            });

            $(ques2).click(function() {

                if (minus1.style.display == "none") {
                    ans1.classList.remove("hide");
                    ans1.classList.add("show");
                    plus1.classList.add("hide");
                    plus1.classList.remove("show");
                    minus1.classList.remove("hide");
                    minus1.classList.add("show");
                } else {
                    ans1.classList.remove("show");
                    ans1.classList.add("hide");
                    plus1.classList.add("show");
                    plus1.classList.remove("hide");
                    minus1.classList.remove("show");
                    minus1.classList.add("hide");
                }
            });

            $(ques3).click(function() {

                if (minus2.style.display == "none") {
                    ans2.classList.remove("hide");
                    ans2.classList.add("show");
                    plus2.classList.add("hide");
                    plus2.classList.remove("show");
                    minus2.classList.remove("hide");
                    minus2.classList.add("show");
                } else {
                    ans2.classList.remove("show");
                    ans2.classList.add("hide");
                    plus2.classList.add("show");
                    plus2.classList.remove("hide");
                    minus2.classList.remove("show");
                    minus2.classList.add("hide");
                }
            });
        });
    </script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>

</body>

</html>
<?php

include('bottom-cache.php');

?>
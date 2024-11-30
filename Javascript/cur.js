const eur = document.querySelector('.eur');
const ngn = document.querySelector('.ngn');
const yen = document.querySelector('.yen');
const usd = document.querySelector('.usd');
const curr = document.querySelector('.curr');
const flag = document.querySelector('.flag');

$(document).ready(function(){
    $(eur).click(function(){
        $(curr).html('EUR');
        $(flag).html('<img src="IMG/uk.png" class="flg" alt="">');
    });
    $(yen).click(function(){
        $(curr).html('YEN');
        $(flag).html('<img src="IMG/ye.png" class="flg" alt="">');
    });
    $(usd).click(function(){
        $(curr).html('USD');
        $(flag).html('<img src="IMG/usd.jpeg" class="flg" alt="">');
    });
    $(ngn).click(function(){
        $(curr).html('NGN');
        $(flag).html('<img src="IMG/ng.png" class="flg" alt="">');
    });
})
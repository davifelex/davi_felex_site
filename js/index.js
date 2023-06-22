function show_navigation() {
    if (status_menu == true){
        navigation.style.display = 'none'
        arrow.style.transform = 'rotate(45deg)'
        status_menu = false
    }else{
        navigation.style.display = 'block'
        status_menu = true
        arrow.style.transform = 'rotate(223deg)'
    }
}

function show_menu() {
    var div = document.getElementById("mobile_menu");
    div.style.display = "block"; // Exibe a div

    var position = 0;
    var interval = setInterval(frame, 5);

    function frame() {
        if (position == 350) {
        clearInterval(interval);
        } else {
        position++;
        div.style.top = position + "px";
        div.style.left = position + "px";
        }
    }
}

var navigation = document.getElementById('navigation')
var header = document.getElementById
var status_menu = true
var arrow = document.getElementById('seta')
arrow.addEventListener('click', show_navigation)

var menu_bar = document.getElementById('menu')
menu_bar.addEventListener('click', show_menu)

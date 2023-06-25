var animationStartHandler = () => {
    if (navigation.style.display != 'none') {
    setTimeout(() => {
        alert(navigation.style.display)
        navigation.style.display = 'none';
    }, 1900);}else{
        navigation.style.display = 'block'
    }
};
function show_navigation() {
    navigation.classList.remove('go_to_right')
    navigation.classList.remove('go_to_back')
    if (status_menu == true){
        navigation.classList.add('go_to_right')
        arrow.style.transform = 'rotate(45deg)'
        status_menu = false
    }else {
        navigation.classList.add('go_to_back')
        
        status_menu = true
        arrow.style.transform = 'rotate(223deg)'
    }
}

function show_menu() {
    let mobile_menu = document.getElementById("mobile_menu");
    
    if (mobile_menu.classList.contains('show')){
        mobile_menu.classList.remove('show')
        mobile_menu.classList.add('hide')
        
    }else{
        mobile_menu.classList.add('show')
    }
    
}

var navigation = document.getElementById('navigation')
var header = document.getElementById
var status_menu = true
var arrow = document.getElementById('seta')
arrow.addEventListener('click', show_navigation)

var menu_bar = document.getElementById('menu')
menu_bar.addEventListener('click', show_menu)


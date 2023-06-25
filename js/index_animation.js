function exit_element(element, time) {
    
    element.addEventListener("animation", function() {
        element.style.animation = "";
    });
    element.style.animation = `exit ${time}s 1`
    
}
function show_element(element, time) {
    element.addEventListener("animationend", function() {
        element.style.animation = "";
    });
    element.style.animation = `show ${time}s 1`
    
}
function changed_text(exit_elements, show_elements) {
    for (var i = 0; i < exit_elements.length; i++) {
        setTimeout(function(index) {
            exit_element(exit_elements[index], 2);
        }, 100 * i, i); 
    }   
    setTimeout(function(){
        for (var a = 0; a < show_elements.length; a++) {
            show_elements[a].style.opacity = 0;
        }
        if (developer_animation.classList.contains('active_developer')){
            developer_animation.classList.remove('active_developer')
            developer_animation.classList.add('active_name')
        }else{
            developer_animation.classList.remove('active_name')
            developer_animation.classList.add('active_developer')
        }
        
        for (var n = 0; n < show_elements.length; n++) {
            
            setTimeout(function(index) {
                show_element(show_elements[index], 2);
                show_elements[index].style.opacity = 1;
            }, 100 * n, n); 
        }
    }, 1100)
}
    

var block = ['']
var text_is_name = false
var developer_animation = document.getElementById('developer_animation')
developer_animation.addEventListener('click', function() {
    var exit_elements = document.getElementsByClassName('name')
    var show_elements = document.getElementsByClassName('developer')
    
    if (text_is_name === false) {
        var exit_elements = document.getElementsByClassName('developer')
        var show_elements = document.getElementsByClassName('name')
        text_is_name = true
    }else {
        text_is_name = false
    }
    changed_text(exit_elements, show_elements)
})

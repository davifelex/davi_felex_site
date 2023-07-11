var menu_mobile = document.getElementById('menu_mobile');

function showMobileOptions() {
    let mobileOptions = document.getElementById('mobile_options');
    mobileOptions.style.display = 'block';
    mobileOptions.style.animation = 'none'; // Redefine a animação
    mobileOptions.offsetHeight; // Reinicia a renderização do elemento
    mobileOptions.addEventListener('animationend', function() {
        mobileOptions.style.display = 'block';
        mobileOptions.style.animation = ''; // Redefinir a animação
    });
    mobileOptions.style.animation = 'fadeIn 0.5s ease-in-out forwards'; // Adiciona a animação novamente
}
  
function hideMobileOptions() {
    let mobileOptions = document.getElementById('mobile_options');
    // Adicionar evento de escuta de animação
    mobileOptions.addEventListener('animationend', function() {
        mobileOptions.style.display = 'none';
        mobileOptions.style.animation = ''; // Redefinir a animação
    });
    mobileOptions.style.animation = 'fadeOut 0.5s ease-in-out forwards';
  

}
  
  
  
  

function show_or_hide_menu() {
    if (menu_mobile_show == false){
        showMobileOptions()
        menu_mobile_show = true
    }else{
        hideMobileOptions()
        menu_mobile_show = false
    }
}

menu_mobile_show = false
menu_mobile.addEventListener('click', show_or_hide_menu);
document.addEventListener('DOMContentLoaded', function() {
    let links = document.getElementsByClassName('mobile_option');
  
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', show_or_hide_menu);
    }
});

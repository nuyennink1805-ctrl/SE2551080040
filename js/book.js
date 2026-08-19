function openModalRegister(ojb){
    let id = ojb.getAttribute('rel');
    let e = document.getElementById(id);
    e.style.visibility = 'visible';
    e.style.opacity = 1;
}

function closeModalRegister(ojb){
    let id = ojb.getAttribute('rel');
    let e = document.getElementById(id);
    e.style.visibility = 'hidden';
    e.style.opacity = 0;
}
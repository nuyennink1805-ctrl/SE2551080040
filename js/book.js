function openModalRegister(obj){
    let id = obj.getAttribute('rel');
    let e = document.getElementById(id);
   
    e.style.visibility = 'visible';
    e.style.opacity= 1;
}
function closeModalRegister(obj){
    let id = obj.getAttribute('rel');
    let e = document.getElementById(id);
    e.style.visibility = 'hidden';
    e.style.opacity= 0;
}
let inputs = document.querySelectorAll('.control > input');
for(let inp of inputs){
    inp.addEventListener('blur', function(){
        if (!this.value || this.value==''){
            inp.classList.add('error');
        }else {
            inp.classList.remove('error');

        }
    })
}
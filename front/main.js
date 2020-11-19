let input = document.getElementsByClassName('input');
for (let index = 0; index < input.length; index++) {
    input[index].addEventListener("keyup", function(){
        if(this.value.length >= 1){
            this.nextElementSibling.classList.add('set');            
        } else {
            this.nextElementSibling.classList.remove('set');            
        }
    });    
}
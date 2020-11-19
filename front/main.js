let input = document.getElementsByClassName('input');
for (let index = 0; index < input.length; index++) {
    input[index].addEventListener("keyup", function () {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('set');
        } else {
            this.nextElementSibling.classList.remove('set');
        }
    });
}

$(document).ready(() => {
    $("#buttonJquery").click(getPeople);
    getPeople();
});

getPeople = () => {
    $.ajax({
        url: "http://localhost:3000/people",
        success: result => {
            $('#people').html("");

            result.forEach(person => {
                $("#people").append('<tr><td>' + person.name + '</td><td>' + person.age + '</td><td>' + person.phone + '</td><td>' + person.id + '</td></tr>');
            });
        }
    });
}

sendInfo = ()=>{
    let form = $('.formulario');
    $.ajax({
        url: "http://localhost:3000/people/add",
        type:'POST',
        data:form.serialize(),
        success: result => getPeople()
    });
}

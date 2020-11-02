
urlChronologyAPI = 'http://127.0.0.1:8000/api/funeral/chronology'

function deleteChronology(id){
    $.ajax({
        url: urlChronologyAPI + '/' + id,
        type: 'DELETE',
        success: function(result) {
            alert("Componente Excluído")
        }
    })
}

$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: urlChronologyAPI,
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
            if(data.length > 0) {
                console.log("data: " + data.values())
                $.each(data, function(index, value){
                    $('#chronology-table').append(
                        `<tr>
                            <td>${value.name}</td>
                            <td><input type=submit value=Excluir class = "delete-btn" onclick=deleteChronology(${value.id})></td>
                        </tr>`);
                });
            }
        },
    });

    $("#create-chronology").click(function() {

        let chronologyDict = {
            "name" : "Descrição",
        }

        let newChronology = {
            "name": $('#message').val(),
        }
        
        let keys = Object.keys(newChronology)

        for (var i = 0; i < keys.length; i++) {
            if (newChronology[keys[i]].trim() == "") {
                alert("Preencha o campo '" + chronologyDict[keys[i]] + "'.");
                return;
            }
            else if (newChronology[keys[i]].trim().length > 250) {
                alert("Máximo de caracteres permitidos: 250.");
                return;
            }
        } 

        $.ajax({
            type: 'POST',
            url: urlChronologyAPI,
            crossDomain: true,
            data: newChronology,
            dataType: 'json',
            success: function(data) {
                $('#chronology-table').append(
                `<tr>
                    <td>${newChronology.name}</td>
                </tr>`
                );
            },
        });
    });
});
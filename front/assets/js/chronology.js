
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
        let new_chronology = {
            "name": $('#message').val(),
        }

        $.ajax({
            type: 'POST',
            url: urlChronologyAPI,
            crossDomain: true,
            data: new_chronology,
            dataType: 'json',
            success: function(data) {
                $('#chronology-table').append(
                `<tr>
                    <td>${new_chronology.name}</td>
                </tr>`
                );
            },
        });
    });
});
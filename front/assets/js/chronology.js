//intocado

$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8000/api/funeral/chronology',
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
            if(data.length > 0) {
                console.log("data: " + data.values())
                $.each(data, function(index, value){
                    $('#chronology-table').append(
                        `<tr>
                            <td>${value.name}</td>
                        </tr>`
                        );
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
            url: 'http://127.0.0.1:8000/api/funeral/chronology',
            crossDomain: true,
            data: new_chronology,
            dataType: 'json',
            success: function(data) {
                $('#chronology-table').append(
                `<tr>
                    <td>${new_chronology.name}</td>
                </tr>`);
            },
        });
    });
});
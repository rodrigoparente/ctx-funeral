urlFuneralSytes= 'http://127.0.0.1:8000/api/funeral/funeral-sites'

$(document).ready(function() {
    $.ajax
    ({
        type: 'GET',
        url: urlFuneralSytes,
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
            if(data.length > 0) {
                $.each(data, function(index, response) {
                    $('#reg-funeral-sites')
                    .append(`<tr>
                                <td>${response.name}</td>
                                <td>${response.burial_type}</td>
                                <td>${response.burial}</td>
                                <td>${response.uf}</td>
                                <td>${response.county}</td>
                                <td>${response.dating}</td>
                                <td>${response.dated_material}</td>
                                <td>${response.site_type}</td>
                                <td>${response.chronology}</td>
                                <td>${response.references}</td>
                            </tr>`
                        );
                });
            }
        },
    });

    $("#create-funeral-site").click(function() {

        let new_funeral_site = {
            "name"              : $('#name').val(),
            "burial_type"       : $('#message').val(),
            "burial"            : $('#inumacao').val(),
            "uf"                : $('#distrito').val(),
            "county"            : $('#municipio').val(),
            "dating"            : $('#datacao').val(),
            "dated_material"    : $('#materialDatado').val(),
            "site_type"         : $('#tipoSitio').val(),
            "chronology"        : $('#cronologia').val(),
            "references"        : $('#referencias').val()
        }

        $.ajax
        ({
            type: 'POST',
            url: urlFuneralSytes,
            crossDomain: true,
            data: new_funeral_site,
            dataType: 'json',
            success: function(response) {

                $('#reg-funeral-sites').append(`
                <tr>
                    <td>${response.name}</td>
                    <td>${response.burial_type}</td>
                    <td>${response.burial}</td>
                    <td>${response.uf}</td>
                    <td>${response.county}</td>
                    <td>${response.dating}</td>
                    <td>${response.dated_material}</td>
                    <td>${response.site_type}</td>
                    <td>${response.chronology}</td>
                    <td>${response.references}</td>
                </tr>`);
               //$("#inserting").html(response);
            },
            error: function(err) {
                console.log(err)
            }
        });
    });
});
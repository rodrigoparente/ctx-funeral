urlFuneralSytes= 'http://127.0.0.1:8000/api/funeral/funeral-sites'


function deleteFuneralSite(id){
    $.ajax({
        url: urlFuneralSytes + '/' + id,
        type: 'DELETE',
        success: function(result) {
            alert("Componente Excluído")
        }
    })
}

$(document).ready(function() {
    $.ajax
    ({
        type: 'GET',
        url: urlFuneralSytes,
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
            if(data.length > 0) {
                $.each(data, function(index, value) {
                    $('#reg-funeral-sites')
                    .append(`<tr>
                                <td>${value.name}</td>
                                <td>${value.burial_type}</td>
                                <td>${value.burial}</td>
                                <td>${value.uf}</td>
                                <td>${value.county}</td>
                                <td>${value.dating}</td>
                                <td>${value.dated_material}</td>
                                <td>${value.site_type}</td>
                                <td>${value.chronology}</td>
                                <td>${value.references}</td>
                                <td class=table-delete-btn> <input type=submit class = "delete-btn" value=Excluir onclick=deleteFuneralSite(${value.id}) ></td>
                            </tr>`
                        );
                });
            }
        },
    });

    $("#create-funeral-site").click(function() {


        let funeralSiteDict = {
            "name"              : "Nome do Sítio",
            "burial_type"       : "Tipo / Número de enterramentos",
            "burial"            : "Tipo de Inumação",
            "uf"                : "Distrito",
            "county"            : "Município",
            "dating"            : "Datação",
            "dated_material"    : "Material datado",
            "site_type"         : "Tipo de sítio",
            "chronology"        : "Cronologia:",
            "references"        : "Referências"
        }

        let newFuneralSite = {
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

        let keys = Object.keys(newFuneralSite)

        for (var i = 0; i < keys.length; i++) {
            if (newFuneralSite[keys[i]].trim() == "") {
                alert("Preencha corretamente o campo '" + funeralSiteDict[keys[i]] + "'.");
                return;
            }
            else if (newFuneralSite[keys[i]].trim().length > 250) {
                alert("Máximo de caracteres permitidos: 250. ");
                return;
            }
            else if (newFuneralSite[keys[i]].trim() == -1 && ( (funeralSiteDict[keys[i]] == "Tipo de sítio") || (funeralSiteDict[keys[i]] == "Cronologia") || (funeralSiteDict[keys[i]] == "Referências")) ) {
                alert("Selecione o campo '" + funeralSiteDict[keys[i]] + "'.");
                return;
            }
        } 

        $.ajax
        ({
            type: 'POST',
            url: urlFuneralSytes,
            crossDomain: true,
            data: newFuneralSite,
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
            },
            error: function(err) {
                console.log(err)
            }
        });
    });
});
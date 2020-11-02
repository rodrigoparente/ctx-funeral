urlSiteTypesAPI = 'http://127.0.0.1:8000/api/funeral/site-types'

function deleteSiteType(id) {
    $.ajax({
        url: urlSiteTypesAPI + '/' + id,
        type: 'DELETE',
        success: function(result) {
            alert("Componente Excluído")
        }
    })
}

$(document).ready(function()
{
    $.ajax
    ({
        type: 'GET',
        url: urlSiteTypesAPI,
        crossDomain: true,
        dataType: 'json',
        success: function(data) 
        {
            if(data.length > 0) 
            {
                $.each(data, function(index, value) 
                {
                    $('#reg-sites').append(
                        `<tr>
                            <td> ${value.initials} </td>
                            <td> ${value.description} </td>
                            <td> <input type=submit class = "delete-btn" value=Excluir onclick=deleteSiteType(${value.id})> </td>
                        </tr>`);
                });
            }
        },
    });

    $("#create-site-type").click(function() 
    {
        let siteTypesDict = {
            "initials" : "Tipo de sítio",
            "description" : "Descrição" 
        }
        
        let newSiteType = {
            "initials": $('#initials').val(),
            "description": $('#description').val()
        }
        
        let keys = Object.keys(newSiteType)

        for (var i = 0; i < keys.length; i++) {
            if (newSiteType[keys[i]].trim() == "") {
                alert("Preencha o campo '" + siteTypesDict[keys[i]] + "'.");
                return;
            }
            else if (newSiteType[keys[i]].trim().length > 250) {
                alert("Máximo de caracteres permitidos: 250.");
                return;
            }
        }    
        
        $.ajax
        ({
            type: 'POST',
            url: urlSiteTypesAPI,
            crossDomain: true,
            data: newSiteType,
            dataType: 'json',
            success: function(data) {
                $('#reg-sites').append(`<tr><td>${newSiteType.initials}</td><td>${newSiteType.description}<td></tr>`);
            }
            
        });
    }); 

});
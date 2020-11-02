urlReferencesAPI = 'http://127.0.0.1:8000/api/funeral/references'

function deleteReference(id){
    $.ajax({
        url: urlReferencesAPI + '/' + id,
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
        url: urlReferencesAPI,
        crossDomain: true,
        dataType: 'json',
        success: function(data) 
        {
            if(data.length > 0) 
            {
                $.each(data, function(index, value) 
                {
                    $('#references-table').append(
                        `<tr>
                            <td>${value.name}</td>
                            <td><input type=submit class = "delete-btn" value=Excluir onclick=deleteReference(${value.id})></td>
                        </tr>`)
                    
                });
            }
        },
    });

    $("#create-references").click(function() 
    {
        let referencesDict = {
            "name" : "Descrição",
        }

        let newReferences = {
            "name": $('#message').val(),
        }
        
        let keys = Object.keys(newReferences)

        for (var i = 0; i < keys.length; i++) {
            if (newReferences[keys[i]].trim() == "" ) {
                alert("Preencha corretamente o campo '" + referencesDict[keys[i]] + "'.");
                return;
            }
            else if (newReferences[keys[i]].trim().length > 250) {
                alert("Máximo de caracteres permitidos: 250. ");
                return;
            }
        } 

        $.ajax
        ({
            type: 'POST',
            url: urlReferencesAPI,
            crossDomain: true,
            data: newReferences,
            dataType: 'json',
            success: function(data) {
                $('#references-table').append(`<tr><td>${newReferences.name}</td></tr>`);
            },
        });
    }); 

});
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
        let new_references = 
        {
            "name": $('#message').val(),
        }
        
        $.ajax
        ({
            type: 'POST',
            url: urlReferencesAPI,
            crossDomain: true,
            data: new_references,
            dataType: 'json',
            success: function(data) {
                $('#references-table').append(`<tr><td>${new_references.name}</td></tr>`);
            },
        });
    }); 

});
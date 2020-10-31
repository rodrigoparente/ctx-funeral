urlSiteTypesAPI = 'http://127.0.0.1:8000/api/funeral/site-types'

function deleteSiteType(id){
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
        let new_site_type = 
        {
            "initials": $('#initials').val(),
            "description": $('#description').val()
        }
        
        $.ajax
        ({
            type: 'POST',
            url: urlSiteTypesAPI,
            crossDomain: true,
            data: new_site_type,
            dataType: 'json',
            success: function(data) {
                $('#reg-sites').append(`<tr><td>${new_site_type.initials}</td><td>${new_site_type.description}<td></tr>`);
            },
        });
    }); 

});
$(document).ready(function()
{
    $.ajax
    ({
        type: 'GET',
        url: 'http://127.0.0.1:8000/api/funeral/references',
        crossDomain: true,
        dataType: 'json',
        success: function(data) 
        {
            if(data.length > 0) 
            {
                $.each(data, function(index, value) 
                {
                    $('#references-table').append(`<tr><td>${value.name}</td></tr>`)
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
            url: 'http://127.0.0.1:8000/api/funeral/references',
            crossDomain: true,
            data: new_references,
            dataType: 'json',
            success: function(data) {
                $('#references-table').append(`<tr><td>${new_references.name}</td></tr>`);
            },
        });
    }); 

});
$(document).ready(function()
{
    $.ajax
    ({
        type: 'GET',
        url: 'http://127.0.0.1:8000/api/funeral/site-types',
        crossDomain: true,
        dataType: 'json',
        success: function(data) 
        {
            if(data.length > 0) 
            {
                $.each(data, function(index, value) 
                {
                    $('#reg-sites').append(`<tr><td>${value.initials}</td><td>${value.description}<td></tr>`);
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
            url: 'http://127.0.0.1:8000/api/funeral/site-types',
            crossDomain: true,
            data: new_site_type,
            dataType: 'json',
            success: function(data) {
                $('#reg-sites').append(`<tr><td>${new_site_type.initials}</td><td>${new_site_type.description}<td></tr>`);
            },
        });
    }); 

});
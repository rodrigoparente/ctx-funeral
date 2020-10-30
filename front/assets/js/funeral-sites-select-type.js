

$(document).ready(function () {

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
                $.each(data, function (key, val) {
                    $("#tipoSitio").append(`<option value = ${val.id}> ${val.initials} </option>`);
                });

            }
        },
    });

    $.ajax
    ({
        type: 'GET',
        url: 'http://127.0.0.1:8000/api/funeral/chronology',
        crossDomain: true,
        dataType: 'json',
        success: function(data) 
        {
            if(data.length > 0) 
            {
                $.each(data, function (key, val) {
                    $("#cronologia").append(`<option value = ${val.id }> ${val.name} </option>`);
                });

            }
        },
    });

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
                $.each(data, function (key, val) {
                    $("#referencias").append(`<option value = ${val.id }> ${val.name} </option>`);
                });

            }
        }
    });
});
$(document).ready(function() {
    let url = window.location.href;

    let id = url.substring(url.lastIndexOf('=') + 1);

    let freq = 1000000;
    function startAJAX(){
        setTimeout( function (){
                getJSONProfessionals();
                startAJAX();
            },
            freq
        );
    }
    getJSONProfessionals();
    startAJAX();
    function getJSONProfessionals() {

        $.ajax({
            url: "https://doubledpetshop.herokuapp.com/get_items",
            success: function (items) {
                $('#items').empty()
                let htmlRep='';
                let count = 0;
                items.forEach(function (item) {
                    if(count < 3) {
                        htmlRep += '<div class="row featurette">'
                        if (count % 2 === 0) {
                            htmlRep += '<div class="col-md-7">'
                        } else {
                            htmlRep += '<div class="col-md-7 order-md-2">'
                        }
                        htmlRep += '<h2 class="featurette-heading">' + item.name + '</h2>' +
                            '<p class="lead">' + item.description + '</p>' +
                            '<a href="item.html#'+ item.id +'" class="btn btn-dark btn-lg">Ver Producto</a>' +
                            '<a href="items.html" style="margin-left: 10px;">Ver más</a>' +
                            '</div>'
                        if (count % 2 === 0) {
                            htmlRep += '<div class="col-md-5">'
                        } else {
                            htmlRep += '<div class="col-md-5 order-md-1">'
                        }
                        htmlRep += '<img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="' + item.image + '">' +
                            '</div>' +
                            '</div>' +
                            '<hr class="featurette-divider">'
                    }
                    count ++;
                });
                $('#items').append(htmlRep);
            }
        });
    }
});
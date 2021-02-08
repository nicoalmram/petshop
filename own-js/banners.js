$(document).ready(function() {
    let url = window.location.href;

    let id = url.substring(url.lastIndexOf('=') + 1);

    let freq = 100000;
    function startAJAX(){
        setTimeout( function (){
                getJSONBanners();
                startAJAX();
            },
            freq
        );
    }
    getJSONBanners();
    startAJAX();
    function getJSONBanners() {

        $.ajax({
            url: "https://doubledpetshop.herokuapp.com/get_animals",
            success: function (animals) {
                $('#myCarousel').empty()
                let htmlRep = '<ol class="carousel-indicators">'
                for (let i = 0; i < animals.length; i++){
                    if(i === 0){
                        htmlRep += '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'
                    } else {
                        htmlRep += '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>'
                    }
                }
                htmlRep += '</ol>' +
                    '<div class="carousel-inner">'
                let first = true
                animals.forEach( function (animal){
                    if(first){
                        htmlRep += '<div class="carousel-item active">'
                        first = false;
                    } else {
                        htmlRep += '<div class="carousel-item">'
                    }
                    htmlRep += '<img class="bd-placeholder-img" width="100%" height="100%"  src="' + animal.banner + '">'+
                        '</div>'
                });
                htmlRep +=
                    '</div>' +
                    '<a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">'+
                    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
                    //'<span class="sr-only">Previous</span>'+
                    '<span class="visually-hidden">Prev</span>'+
                    '</a>'+
                    '<a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">'+
                    '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
                    //'<span class="sr-only">Next</span>'+
                    '<span class="visually-hidden">Next</span>'+
                    '</a>'
                $('#myCarousel').append(htmlRep);
            }
        });
    }
});
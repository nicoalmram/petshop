$(document).ready(function() {
    let url = window.location.href;

    let id = url.substring(url.lastIndexOf('=') + 1);
    let filterBy=""
    let idFilter

    if (url.includes('#')){

        filterBy = url.substring(url.lastIndexOf('#') + 1);
        let array = filterBy.split("?")

        filterBy = array[0]
        idFilter = array[1]

    }

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
            url: "https://doubledpetshop.herokuapp.com/get_items",
            success: function (items) {
                $('#album').empty()
                let htmlRep=''
                let aux = ''

                items.forEach(function (item){
                    if(filterBy.toLowerCase() === "categories"){
                        aux= item.categories
                    } else if( filterBy.toLowerCase() === "animals"){
                        aux= item.animals
                    } else {
                        aux= item.sizes
                    }
                    let pass=false
                    for(let i = 0; i < aux.length; i++){
                        if(filterBy === "" || parseInt(idFilter) === parseInt(aux[i]['id'])){
                            pass=true
                        }
                    }
                    if(pass) {
                        htmlRep +=
                            '<div class="col">' +
                            '<hr class="featurette-divider">' +
                            '<div class="card shadow-sm">' +
                            '<h4 style="text-align: center; margin-top: 25px;">' + item.name + '</h4>' +
                            '<hr class="featurette-divider">' +
                            '<img class="bd-placeholder-img card-img-top" src="' + item.image + '">' +
                            '<div class="card-body">' +
                            '<hr class="featurette-divider">' +
                            '<p class="card-text">' + item.description + '</p>' +
                            '<div class="text-uppercase"> ' +
                            '<label>Tags: </label></br>'
                        item.categories.forEach(function (categories) {
                            htmlRep += '<a href="items.html#categories?' + categories['id'] + '" class="badge badge-pill" style="background:' + categories['color'] + ';margin-left: 10px;">' + categories['title'] + '</a>'
                        });
                        item.animals.forEach(function (animals) {
                            htmlRep += '<a href="items.html#animals?' + animals['id'] + '" class="badge badge-pill" style="background:' + animals['color'] + '; margin-left: 10px;">' + animals['title'] + '</a>'
                        });
                        item.sizes.forEach(function (sizes) {
                            htmlRep += '<a href="items.html#sizes?' + sizes['id'] + '"class="badge badge-pill" style="background:' + sizes['color'] + '; margin-left: 10px;">' + sizes['title'] + '</a>'
                        });


                        htmlRep += '</div>' +
                            '<div class="d-flex justify-content-between align-items-center">' +
                            '<div class="btn-group" style="margin-top: 3px;">' +
                            '<a href="item.html#' + item.id + '" class="btn btn-primary">View</a>' +
                            '<button type="button" class="btn btn-dark">Add</button>' +
                            '</div>' +
                            '<h4>' + item.price + '$</h4>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>'
                    }
                });
                $('#album').append(htmlRep);
            }
        });
    }
});
$(document).ready(function() {
    let url = window.location.href;

    let id = url.substring(url.lastIndexOf('=') + 1);
    let itemId = url.substring(url.lastIndexOf('#') + 1);

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
                $('#item').empty()
                let i = 0
                let item = "";
                while(i <  items.length){
                    if(items[i]['id'] == parseInt(itemId)){
                        item = items[i];
                    }
                    i++;
                }
                let htmlRep = ''

                htmlRep = '<div class="col">' +
                    '<div class="card shadow-sm">' +
                    '<h1 style="text-align: center; margin-top: 25px;">' + item.name + '</h1>' +
                    '<hr class="featurette-divider">' +
                    '<img class="bd-placeholder-img card-img-top" src="' + item.image + '">' +
                    '<div class="card-body">'+
                    '<hr class="featurette-divider">' +
                    '<h4 class="card-text">' + item.description + '</h4>' +
                    '<div class="text-uppercase"> ' +
                    '<label>Tags: </label>'
                item.categories.forEach(function (categories) {
                    htmlRep += '<a href="items.html#categories?' + categories['id'] + '" class="badge badge-pill" style="background:'+ categories['color'] + ';margin-left: 10px;">' + categories['title'] +'</a>'
                });
                item.animals.forEach(function (animals) {
                    htmlRep += '<a href="items.html#animals?' + animals['id'] + '" class="badge badge-pill" style="background:'+ animals['color'] + '; margin-left: 10px;">' + animals['title'] +'</a>'
                });
                item.sizes.forEach(function (sizes) {
                    htmlRep += '<a href="items.html#sizes?' + sizes['id'] + '"class="badge badge-pill" style="background:'+ sizes['color'] + '; margin-left: 10px;">' + sizes['title'] +'</a>'
                });


                htmlRep +='</div>' +
                    '<form class="form-inline">' +
                    '<div class="form-group mb-2">' +
                    '<label for="quantity" class="sr-only">Quantity</label>'+
                    '<input type="text" readonly class="form-control-plaintext" value="Quantity: ">'+
                    '</div>' +
                    '<div class="form-group mx-sm-3 mb-2">' +
                    '<label class="sr-only"></label>'+
                    '<input type="number" class="form-control"  value=1>'+
                    '</div>'+
                    '<button type="submit" class="btn btn-primary mb-2">Add to cart</button>'+
                    '<h4 class="form-control-plaintext">'+ item.price +'$</h4>' +
                    '</form>'+
                    '</div>' +
                    '</div>' +
                    '</div>'
                $('#item').append(htmlRep);
            }
        });
    }
});
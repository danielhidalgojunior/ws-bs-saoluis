$(document).ready(function() {
    loadDummies();
});

function loadDummies() {
    $("#listing").html('');
    products.forEach(x => {      
    $("#listing").append(
        '<div class="row list-item">' +
        '<div class="border border-secundary shadow-sm rounded col-sm-12 list-item-inside">' +
        '<div>' +
        '<img class="list-image" src="' + x.img + '" alt="">' +
        '<span>' + x.name + '</span>' +
        '<div class="list-item-buttons-div">' +
        '<a class="btn btn-info" style="color:white" data-toggle="modal" data-target="#editModal" onclick="populateEditModal(' + x.id + ')">Editar</a>' +
        '<br><br>' +
        '<a class="btn btn-danger" style="color:white" data-toggle="modal" data-target="#removeModal" onclick="removeProduct(' + x.id + ')">Remover</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
        );
    });
}

function editProduct() {
    let id = $('input[name=id]').val();
    let name = $('input[name=name]').val();
    let img = $('input[name=img]').val();

    console.log("edit", $('input[name=id]').val());

    productindex = products.findIndex((x => x.id == id));
    
    products[productindex].name = name;
    products[productindex].img = img;

    loadDummies();
}

function populateEditModal(id) {
    let product = products.find(x =>  x.id === id);
    let name = product.name;
    let img = product.img;

    $('input[name=id]').val(id);
    $('input[name=name]').val(name);
    $('input[name=img]').val(img);
}

function removeProduct(id) {
    console.log("remove", id);

    products.splice(products.findIndex(function(i){
        return i.id === id;
    }), 1);

    loadDummies();
}

function getNewId() {
    return Math.floor((Math.random() * 9999999) + 1);
}

function insertProduct() {
    let id = getNewId();
    let name = $('input[name=addname]').val();
    let img = $('input[name=addimg]').val();

    products.push({ id: id, name: name, img: img});

    loadDummies();
}

var products = [
    {
        id: 987343,
        name: "Ryzen 7 2700x",
        img: "https://http2.mlstatic.com/processador-intel-core-i7-6700-lga-1151-8mb-cache-40ghz-box-D_NQ_NP_120911-MLB20663465170_042016-O.webp"
    },
    {
        id: 133342,
        name: "Ryzen 5 2600x",
        img: "https://images3.kabum.com.br/produtos/fotos/95563/95563_1522844766_index_gg.jpg"
    },
    {
        id: 245456,
        name: "Xeon 34 3H4U3H583HF87YF",
        img: "https://http2.mlstatic.com/processador-servidor-intel-e3-1220v6-xeon-1151-300-ghz-box-D_NQ_NP_776679-MLB27721776330_072018-F.webp"
    }
];

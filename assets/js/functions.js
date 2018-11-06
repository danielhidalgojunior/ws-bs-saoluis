$(document).ready(function() {
    loadDummies();
});

function loadDummies() {
    products.forEach(x => {
        $("#listing").append(
            '<div class="row list-item">' +
            '<div class="border border-secundary shadow-sm rounded col-sm-12 list-item-inside">' +
            '<div>' +
            '<img class="list-image" src="' + x.img + '" alt="">' +
            '<span>' + x.name + '</span>' +
            '<div class="list-item-buttons-div">' +
            '<a class="btn btn-info" onclick="editProduct(' + x.id + ')">Editar</a>' +
            '<br><br>' +
            '<a class="btn btn-danger" href="#">Remover</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
            );
    });
}

function editProduct(id) {
    console.log("passei aqui", id);
 }

var products = [
    {
        id: 0,
        name: "Ryzen 7 2700x",
        img: "https://http2.mlstatic.com/processador-intel-core-i7-6700-lga-1151-8mb-cache-40ghz-box-D_NQ_NP_120911-MLB20663465170_042016-O.webp",
        units: 15
    },
    {
        id: 1,
        name: "Ryzen 5 2600x",
        img: "https://images3.kabum.com.br/produtos/fotos/95563/95563_1522844766_index_gg.jpg",
        units: 10
    }
];
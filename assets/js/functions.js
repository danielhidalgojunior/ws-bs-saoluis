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
        '<a class="btn btn-info" style="color:white" data-toggle="modal" data-target="#editModal" onclick="populateEditModal(' + x.id + ')">Ver/Editar</a>' +
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
    let units = $('input[name=units]').val();
    let minStorage = $('input[name=minStorage]').val();
    let maxStorage = $('input[name=maxStorage]').val();
    let unitPrice = $('input[name=unitPrice]').val();
    let packingType = $('input[name=packingType]').val();
    let active = $('select[name=active]').val();

    console.log("edit", $('input[name=id]').val());

    productindex = products.findIndex((x => x.id == id));
    
    products[productindex].name = name;
    products[productindex].img = img;
    products[productindex].units = units;
    products[productindex].minStorage = minStorage;
    products[productindex].maxStorage = maxStorage;
    products[productindex].unitPrice = unitPrice;
    products[productindex].packingType = packingType;
    products[productindex].active = active;

    loadDummies();
}

function populateEditModal(id) {
    let product = products.find(x =>  x.id === id);
    let name = product.name;
    let img = product.img;
    let units = product.units;
    let minStorage = product.minStorage;
    let maxStorage = product.maxStorage;
    let unitPrice = product.unitPrice;
    let packingType = product.packingType;
    let active = product.active;

    $('input[name=id]').val(id);
    $('input[name=name]').val(name);
    $('input[name=img]').val(img);
    $('input[name=units]').val(units);
    $('input[name=minStorage]').val(minStorage);
    $('input[name=maxStorage]').val(maxStorage);
    $('input[name=unitPrice]').val(unitPrice);
    $('input[name=packingType]').val(packingType);
    $('select[name=active]').val(active);
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
    let units = $('input[name=addunits]').val();
    let minStorage = $('input[name=addminStorage]').val();
    let maxStorage = $('input[name=addmaxStorage]').val();
    let unitPrice = $('input[name=addunitPrice]').val();
    let packingType = $('input[name=addpackingType]').val();
    let active = $('input[name=addactive]').val();

    products.push({ 
        id: id,
        name: name,
        img: img,
        units: units,
        unitPrice: unitPrice,
        minStorage: minStorage,
        maxStorage: maxStorage,
        packingType: packingType,
        active: active
    });

    loadDummies();
}

var products = [
    {
        id: 987343,
        name: "Ryzen 7 2700x",
        img: "https://http2.mlstatic.com/processador-intel-core-i7-6700-lga-1151-8mb-cache-40ghz-box-D_NQ_NP_120911-MLB20663465170_042016-O.webp",
        units: 29,
        unitPrice: 1508,
        minStorage: 3,
        maxStorage: 70,
        active: true,
        packingType: "caixa"
    },
    {
        id: 133342,
        name: "Ryzen 5 2600x",
        img: "https://images3.kabum.com.br/produtos/fotos/95563/95563_1522844766_index_gg.jpg",
        units: 50,
        unitPrice: 1208,
        minStorage: 5,
        maxStorage: 100,
        active: true,
        packingType: "caixa"
    },
    {
        id: 245456,
        name: "Xeon 34 3H4U3H583HF87YF",
        img: "https://http2.mlstatic.com/processador-servidor-intel-e3-1220v6-xeon-1151-300-ghz-box-D_NQ_NP_776679-MLB27721776330_072018-F.webp",
        units: 8,
        unitPrice: 4208,
        minStorage: 2,
        maxStorage: 20,
        active: false,
        packingType: "caixa"
    }
];

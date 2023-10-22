load();

function load() {
    const products = [
        ["HP Samsung", 500],
        ["Mouse Logitech", 1_000],
        ["Headset Gaming", 200]
    ]

    let urlParams = new URLSearchParams(window.location.search);
    let productId = parseInt(
        urlParams.get("id")
        );
    let productImage = `img/product_${productId}.webp`;
    let productName = products[productId][0];
    let productCost = products[productId][1];

    let a = 1_000;

    document.getElementById("productImage").src = productImage;
    document.getElementById("productName").innerHTML += productName;
    document.getElementById("productCost").innerHTML += " " + includeDot(productCost);
}

function includeDot(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function confirm() {
    let newUrl = window.location.origin + "/thanks/order.html";
    window.location.assign(newUrl);
}

function cancel() {
    let newUrl = window.location.origin + "/product.html";
    window.location.assign(newUrl);
}
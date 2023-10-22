function order(productId) {
    let urlParams = new URLSearchParams();
    urlParams.append("id", productId);

    let newUrl = window.location.origin + "/order.html?" + urlParams.toString();

    console.log(newUrl);
    window.location.assign(newUrl);
}
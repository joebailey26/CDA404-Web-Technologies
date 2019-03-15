function main() {
    var form = document.getElementById("productForm"); 
    form.addEventListener("click", formChanged);
    
    var count = document.getElementsByClassName("product")
    for (var i = 0; count[i]; i++) {
        count[i].addEventListener("click", addToCart);
    };
    function addToCart() {
        console.log(this);
        var qty = this.getElementsByClassName("quantity")[0];
        var check = this.getElementsByClassName("check")[0];
        if (check.checked == true && qty.value <= 0 || qty.value >= 100) {
            qty.style.backgroundColor = "red";
        } else {
            qty.style.backgroundColor = "";
        };
    };
};

function formChanged(event) {
    var form = document.getElementById("productForm");
    var subTotal = 0;
    var shipping = 0;
    var taxes = 0;
    var total = 0;
    var numberTotal = 0;
    var product = document.getElementsByName("product");
    
    for (var i = 0; product[i]; i++) {
        var qty = document.getElementsByName("quantity")[i];
        numberTotal =  parseInt(form.product[i].dataset.price  * qty.value);
        if (product[i].checked == true && qty.value >= 0 && qty.value <= 100) {
            subTotal = subTotal +  numberTotal;
            if (subTotal > 0 && subTotal <= 100) {
                shipping = 10;
            };
        };
    };
    
    taxes = subTotal * 0.2;
    total = subTotal + taxes + shipping;
    document.getElementById("sub-total").innerHTML =  "£" + (subTotal).toFixed(2);
    document.getElementById("shipping").innerHTML =  "£" + (shipping).toFixed(2);
    document.getElementById("taxes").innerHTML =  "£" + (taxes).toFixed(2);
    document.getElementById("total").innerHTML = "£" + (total).toFixed(2);
};
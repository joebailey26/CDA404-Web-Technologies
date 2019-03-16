function main() {
    var form = document.getElementById("productForm"); 
    form.addEventListener("click", formChanged);
    
    var check = document.getElementsByClassName("check");
    for (var i = 0; check[i]; i++) {
        check[i].addEventListener("click", addToCart);
    };
    function addToCart() {
        var product = this.parentNode.parentNode;
        var qty = product.getElementsByClassName("quantity")[0];
        
        if (this.checked == true && qty.value <= 0 || qty.value >= 100) {
            qty.style.backgroundColor = "red";
        } else {
            qty.style.backgroundColor = "";
        };
        
        var desc = this.dataset.desc;
        
        if (this.checked == true && qty.value > 0 && qty.value < 100 && document.getElementById("order-summary").innerHTML.includes(desc) == false) {
            document.getElementById("order-summary").innerHTML += desc + "<br>";
        } else {
            document.getElementById("order-summary").innerHTML = document.getElementById("order-summary").innerHTML.replace(desc + "<br>", " ");
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
var id = 1;
var total_price = 0;

var pre_product =
[
    {
        name: "Mie Dok Dok",
        price: 10000,
    },
    {
        name: "Burjo",
        price: 5000,
    },
    {
        name: "Indomie Telor",
        price: 10000,
    },
    {
        name: "Nasi Telor",
        price: 10000,
    },
    {
        name: "Es Teh",
        price: 1000,
    },

];

for(var product in pre_product){
    var new_row = document.createElement("TR");
    var new_id = document.createElement("TD");
    var new_name = document.createElement("TD");
    var new_price = document.createElement("TD");

    new_id.innerHTML = id++;
    new_name.innerHTML = pre_product[product].name;
    new_price.innerHTML = pre_product[product].price;

    new_row.appendChild(new_id);
    new_row.appendChild(new_name);
    new_row.appendChild(new_price);

    var table = document.getElementById("table_menu");
    table.appendChild(new_row);

}


function add() {

    var new_row = document.createElement("TR");
    var new_id = document.createElement("TD");
    var new_name = document.createElement("TD");
    var new_price = document.createElement("TD");

    new_id.innerHTML = id++;
    new_name.innerHTML = document.getElementById("product_name").value;
    new_price.innerHTML = document.getElementById("product_price").value;

    new_row.appendChild(new_id);
    new_row.appendChild(new_name);
    new_row.appendChild(new_price);

    var table = document.getElementById("table_menu");
    table.appendChild(new_row);

    pre_product.push({
        name: document.getElementById("product_name").value,
        price: document.getElementById("product_price").value
    });

    document.getElementById("product_name").value="";
    document.getElementById("product_price").value="";

    event.preventDefault();


}

function buy() {

    total_price += (pre_product[document.getElementById("product_id").value - 1].price * Number(document.getElementById("product_q").value));

    document.getElementById("total_price").innerHTML = "Sub Total Price: " + total_price;

    var new_row = document.createElement("TR");
    var new_items = document.createElement("TD");
    var new_price = document.createElement("TD");
    var new_quantity = document.createElement("TD");
    var new_total_price = document.createElement("TD");

    new_items.innerHTML = pre_product[document.getElementById("product_id").value - 1].name;
    new_price.innerHTML = pre_product[document.getElementById("product_id").value - 1].price;
    new_quantity.innerHTML = document.getElementById("product_q").value;
    new_total_price.innerHTML = Number(new_price.innerHTML) * Number(new_quantity.innerHTML);

    new_row.appendChild(new_items);
    new_row.appendChild(new_price);
    new_row.appendChild(new_quantity);
    new_row.appendChild(new_total_price);

    var table = document.getElementById("table_items");
    table.appendChild(new_row);

    document.getElementById("product_id").value = "";
    document.getElementById("product_q").value = "";

    event.preventDefault();

}

function discount_items() {
    var discount = 100 - Number(document.getElementById("discount").value);
    total_price = (total_price * discount)/100;
    document.getElementById("final_price").innerHTML = "Total Price: " + total_price;

    event.preventDefault();
}

function all_money() {

    var money = Number(document.getElementById("money_given").value);
    if (money>total_price) {
        document.getElementById("change").innerHTML = "Change: " + (money - total_price);
    }
    else {
        document.getElementById("change").innerHTML = "Money not enough!";
    }

    event.preventDefault();
}
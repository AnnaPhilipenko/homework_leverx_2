	var Orders = [
	{
		id: "1",
		OrderInfo: {
			createdAt	: "10.08.1991",
			customer	: "Alfreds Futterkiste",
			status		: "Accepted",
			shippedAt	: "8.09.1991"
		},
		ShipTo: {
			name: "Maria Anders",
			Address: "Obere Str. 57",
			ZIP: "12209",
			Region: "Germany",
			Country: "Germany"
		},
		CustomerInfo: {
			firstName: "Maria",
			lastName: "Anders",
			address: "Obere Str. 57",
			phone: "030-0074321",
			email: "Maria.Anders@company.com"
		},
		products: [
			{
				id			: "1",
				name		: "Chai",
				price		: "18",
				currency	: "EUR",
				quantity	: "2",
				totalPrice	: "36"
			},
			{
				id			: "2",
				name		: "Aniseed Syrup",
				price		: "10",
				currency	: "USD",
				quantity	: "3",
				totalPrice	: "30"
			},
			{
				id			: "3",
				name		: "Chef Anton's Cajun Seasoning",
				price		: "22",
				currency	: "USD",
				quantity	: "2",
				totalPrice	: "44"
			},
			{
				id			: "4",
				name		: "Chef Anton's Gumbo Mix",
				price		: "36",
				currency	: "EUR",
				quantity	: "21",
				totalPrice	: "756"
			},
			{
				id			: "5",
				name		: "Grandma's Boysenberry Spread",
				price		: "25",
				currency	: "USD",
				quantity	: "5",
				totalPrice	: "125"
			}
		]
	},
	{
		id: "2",
		OrderInfo: {
			createdAt	: "23.12.2006",
			customer	: "Bon app",
			status		: "Pending",
			shippedAt	: "13.02.2007"
		},
		ShipTo: {
			name: "Laurence Lebihan",
			Address: "12, rue des Bouchers",
			ZIP: "13008",
			Region: "France",
			Country: "France"
		},
		CustomerInfo: {
			firstName: "Laurence",
			lastName: "Lebihan",
			address: "12, rue des Bouchers",
			phone: "91.24.45.40",
			email: "Laurence.Lebihan@company.com"
		},
		products: [
			{
				id			: "1",
				name		: "Queso Cabrales",
				price		: "21",
				currency	: "EUR",
				quantity	: "5",
				totalPrice	: "105"
			},
			{
				id			: "2",
				name		: "Queso Manchego La Pastora",
				price		: "38",
				currency	: "EUR",
				quantity	: "3",
				totalPrice	: "114"
			},
			{
				id			: "3",
				name		: "Pavlova",
				price		: "120",
				currency	: "RUB",
				quantity	: "5",
				totalPrice	: "600"
			},
			{
				id			: "4",
				name		: "Sir Rodney's Marmalade",
				price		: "5",
				currency	: "BYN",
				quantity	: "3",
				totalPrice	: "15"
			},
			{
				id			: "5",
				name		: "Genen Shouyu",
				price		: "40",
				currency	: "USD",
				quantity	: "7",
				totalPrice	: "280"
			},
			{
				id			: "6",
				name		: "Tofu",
				price		: "23.25",
				currency	: "USD",
				quantity	: "1",
				totalPrice	: "23.25"
			},
			{
				id			: "7",
				name		: "Alice Mutton",
				price		: "32",
				currency	: "UAH",
				quantity	: "39",
				totalPrice	: "1248"
			}
		]
	}
];

window.onLoad = listGeneration();
window.onLoad = hideElement('order-show');


function hideElement(id){
	document.getElementById(id).style.display = "none";
}

function getId(i){
	return Orders[i].id;
}

//OrderInfo
function getKeyOrderInfo(i){
	for(var key in Orders[i].OrderInfo){
			return Orders[i].OrderInfo[key];
		}
}

function getCreatedAt(i){
	try{
		return Orders[i].OrderInfo.createdAt;
	}catch(err){
		message.innerHTML = "Error" + err + ".";
	}
}

function getCustomer(i){
	return Orders[i].OrderInfo.customer;
}

function getShipped(i){
	return Orders[i].OrderInfo.shippedAt;
}

function getStatus(i){
	return Orders[i].OrderInfo.status;
}

//ShipTo
function getName(i){
	return Orders[i].ShipTo.name;
}

function getAddress(i){
	return Orders[i].ShipTo.Address;
}

function getZip(i){
	return Orders[i].ShipTo.ZIP;
}

function getCountry(i){
	return Orders[i].ShipTo.Country;
}

function getRegion(i){
	return Orders[i].ShipTo.Region;
}

//CustomerInfo
function getFirstname(i){
	return Orders[i].CustomerInfo.firstName;
}

function getLastname(i){
	return Orders[i].CustomerInfo.lastName;
}

function getCustomerAddress(i){
	return Orders[i].CustomerInfo.address;
}

function getPhone(i){
	return Orders[i].CustomerInfo.phone;
}

function getEmail(i){
	return Orders[i].CustomerInfo.email;
}
//productsInfo
function getProductsName(i, j){
	return Orders[i].products[j].name;
}

function getProductsPrice(i, j){
	return Orders[i].products[j].price;
}

function getProductsQuantity(i, j){
	return Orders[i].products[j].quantity;
}

function getProductsTotalPrice(i,j){
	return Orders[i].products[j].totalPrice;
}

function getProductsCurrency(i,j){
	return Orders[i].products[j].currency;
}

//list generation
function listGeneration(){
	for(var i=0; i<Orders.length; i++){
		createNewListElem(i);
	}
}

//creating of a new item
function createNewListElem(i){
	var body = document.getElementById("orders-ul");
	var orderLi = document.createElement('li');
		// orderLi.dataset.id = getId(i);
		orderLi.className = 'order-catalog';
		orderLi.id = getId(i);

	 	var orderDiv = document.createElement('div');
	 	orderDiv.className = 'order-div';

	 	var headerSpan = document.createElement('span');
	 	headerSpan.className = 'header-span';
	 	headerSpan.innerHTML = 'Order &nbsp;' + getId(i);

	 	var dateSpan = document.createElement('span');
	 	dateSpan.className = 'date-span';
	 	dateSpan.innerHTML = getCreatedAt(i);

	 	var statusSpan = document.createElement('span');
	 	statusSpan.className = 'status-span';
	 	getStatus(i) == 'Accepted' ? statusSpan.style.color = 'green' : statusSpan.style.color = 'orange';
	 	statusSpan.innerHTML = getStatus(i);

	 	var customerSpan = document.createElement('span');
	 	customerSpan.className = 'customer-span';
	 	customerSpan.innerHTML = getCustomer(i);

	 	var shippedSpan = document.createElement('span');
	 	shippedSpan.className = 'shipped-span';
	 	shippedSpan.innerHTML = 'Shipped:' + getShipped(i);
	 	
	 	orderDiv.appendChild(headerSpan);
	 	orderDiv.appendChild(dateSpan);
	 	orderDiv.appendChild(customerSpan);
	 	orderDiv.appendChild(statusSpan);
	 	orderDiv.appendChild(shippedSpan);
	 	orderLi.appendChild(orderDiv);
	 	body.appendChild(orderLi);
}

//order-review stuff
function orderReview(i){
	var orderName = document.getElementById('order-name');
	var customerName = document.getElementById('customer-name');
	var orderedDate = document.getElementById('ordered-date');
	var shippedDate = document.getElementById('shipped-date');
	orderName.innerHTML = getId(i);
	customerName.innerHTML = getCustomer(i);
	orderedDate.innerHTML = getCreatedAt(i);
	shippedDate.innerHTML = getShipped(i);
}

//shipping address
function shippingAddressReview(i){
	var addressName = document.getElementById('address-name');
	var addressStreet = document.getElementById('address-street');
	var addressCode = document.getElementById('address-code');
	var addressRegion = document.getElementById('region');
	var addressCountry = document.getElementById('country');
 	addressName.innerHTML = getName(i);
 	addressStreet.innerHTML = getAddress(i);
	addressCode.innerHTML = getZip(i);
 	addressRegion.innerHTML = getRegion(i);
 	addressCountry.innerHTML = getCountry(i);
}

//filling the table
function fillTable(i){
	var table = document.getElementById('product-table');
	var newTr1 = document.createElement('tr');
	var newTh = document.createElement('th');
	var newTh1 = document.createElement('th');
	var newTh2 = document.createElement('th');
	var newTh3 = document.createElement('th');
	newTh.innerHTML = "Product";
	newTh1.innerHTML = "Unit price";
	newTh2.innerHTML = "Quantuty";
	newTh3.innerHTML = "Total";
	newTr1.appendChild(newTh);
	newTr1.appendChild(newTh1);
	newTr1.appendChild(newTh2);
	newTr1.appendChild(newTh3);
	table.appendChild(newTr1);
		for(var j=0;i<Orders[i].products.length;j++){
			var newTr = document.createElement('tr');
			var newTd = document.createElement('td');
			var newTd1 = document.createElement('td');
			var newTd3 = document.createElement('td');
			var newTd4 = document.createElement('td');
			newTd.innerHTML = getProductsName(i,j);
			newTd1.innerHTML = getProductsPrice(i,j);
			newTd3.innerHTML = getProductsQuantity(i,j);
			newTd4.innerHTML = getProductsTotalPrice(i,j);
			newTr.appendChild(newTd);
			newTr.appendChild(newTd1);
			newTr.appendChild(newTd3);
			newTr.appendChild(newTd4);
			table.appendChild(newTr);
	}
}

//live search
function searchFunc(){
	var InputValue = document.getElementById('search').value;
	var body = document.getElementById('orders-ul');
	body.innerHTML = "";
		for(var i = 0; i<Orders.length;i++){
		if(getCustomer(i).match(InputValue)||getShipped(i).match(InputValue) 
			||getStatus(i).match(InputValue)||getCreatedAt(i).match(InputValue))
			createNewListElem(i);
	}
}

//review orders
var onLiClick = document.getElementById('orders-ul');
onLiClick.addEventListener('click', function(event){
	document.getElementById('order-show').style.display = "block";
	var divNode = event.target.parentNode;
	var currentLi = divNode.parentNode.id;
	var table = document.getElementById('product-table');
	table.innerHTML = "";
	for(var i=0;i<Orders.length;i++){
		if(currentLi == getId(i)){
			orderReview(i);
			shippingAddressReview(i);
			fillTable(i);		}
	}
});


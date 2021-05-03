var x = 0, y = 3;
var not_equal_statement = "x is "

for (var i = 0; i < y; i++) {
		x += i;
}

var step1 = ("Both x and y are equal to " + x + ".");

while (x > 0) {
	if (x == y) {
		var step2a = ("x: " + x, "y: " + y);
		y -= 1;
	}
	else {
		var step2b = ("x: " + x, "y: " + y);
		x -= 1;
	};
};

if (x == 0 && y == 0) {
	var step3a = ("Both x and y are both equal to " + y)
}

var step3b = ("Finished running for loop, while loops and if or else statements!");

var order_chicken_with = function (side_dish) {
	side_dish = side_dish || "whatever!"
	var step4 = ("Chicken with " + side_dish);
}

order_chicken_with(" noodles");
order_chicken_with();

var company = new Object();
company.name = "PDSNet";
company.bankers = "ABSA";
company.ceo = new Object();
company.ceo.first_name = "James";
company.ceo["family name"] = "Linden"
company.ceo.age = 35

var step5 = (company);

function run_button () {
	document.getElementById("content").textContent = step1 + " | " + step2a + " | " + step2b + " | " + step3a + " | " + step3b + " | " + step5
};

function change_color() {
	document.getElementById("title").innerHTML = "<p style='color: black';> *JavaScript Test Page* </p>"	
};
function change_pink() {
	document.getElementById("title").innerHTML = "<p style='color: pink';> *JavaScript Test Page* </p>"	
};
function change_blue() {
	document.getElementById("title").innerHTML = "<p style='color: blue';> *JavaScript Test Page* </p>"	
};
function change_green() {
	document.getElementById("title").innerHTML = "<p style='color: green';> *JavaScript Test Page* </p>"	
};
function change_disappear() {
	document.getElementById("title").innerHTML = "<p style='color: white';> *JavaScript Test Page* </p>"	
};


function handle_numbers() {
	var number_a_2 = document.getElementById("number_a").value
	var number_b_2 = document.getElementById("number_b").value
	var number_added = parseInt(number_a_2) + parseInt(number_b_2)
	var number_subtracted = parseInt(number_a_2) - parseInt(number_b_2)
	var number_multiplied = parseInt(number_a_2) * parseInt(number_b_2)
	var number_division = parseInt(number_a_2) / parseInt(number_b_2)
	document.getElementById("number_result_addition").innerHTML = "<div style='color: green';> Your numbers added together equal " + number_added + ".</div>" 
	document.getElementById("number_result_subtraction").innerHTML = "<div style='color: green';> Your second number subrracted from your first number is " + number_subtracted + ".</div>" 
	document.getElementById("number_result_multiplication").innerHTML = "<div style='color: green';> If we multiply your numbers " + number_multiplied + ".</div>" 
	document.getElementById("number_result_division").innerHTML = "<div style='color: green';> The first number divided by the second " + number_division + ".</div>"
};
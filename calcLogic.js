$(document).ready(function() {



const calcNumbers = [
	$("#number_0"), $("#number_1"), $("#number_2"),
	$("#number_3"), $("#number_4"), $("#number_5"),
	$("#number_6"), $("#number_7"), $("#number_8"),
	$("#number_9"), $("#addition"), $("#subtraction"), 
	$("#multiply"), $("#divide")
]

var array = []
for (let i = 0; i < calcNumbers.length; i++) {
	calcNumbers[i].click(function(e) {
		array.push(e.target.innerHTML);
		$("#number_input").val(array.join(""))
	});
}

(function (){
	$("#equal").click(function(){
		let val = eval(array.join(""))
		array.push(val + '')
		array.splice(0, array.length - 1)
		console.log(array)
		$("#number_input").val(val)
	})
})();

(function (){
	$("#clear").click(function(){
		array.length = 0
		$("#number_input").val("Enter number here!")
	})
})();





});

// just need to figure out how to add the last element to the existing current input val
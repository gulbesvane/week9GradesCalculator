
var noOfSubjects;
var results=[];
var yourGrade;

function calculateGrades(){
for(i=0; i<noOfSubjects; i++){
	result= parseFloat(prompt(`Enter your result of the subject ${i+1}`));
	results[i] = result;
	if(result >= 70.00 && result <=100.00){
		yourGrade = "A";
	}
	else if(result >= 65.00 && result< 70.00){
		yourGrade = "A-";
	}
	else if(result >= 60.00 && result< 65.00){
		yourGrade = "B+";
	}
	else if(result >= 50.00 && result< 60.00){
		yourGrade = "B";
		}
	else if(result >= 45.00 && result< 50.00){
		yourGrade = "B-";
		}
	else if(result >= 40.00 && result< 45.00){
		yourGrade = "C";
		}
	else if(result >= 0.00 && result <40.00){
		yourGrade = "F";
		}
	else{
		yourGrade ="Invalid input";
		}
	//console.log(results[i]);
	document.getElementById("main").innerHTML += (`<h5> Subject ${(i+1)} result ${results[i]} grade is: ${yourGrade} </h5>`);
	}
	calculateAverage();
}

function calculateAverage(){
	var total=0;
	var average=0;
	for(i=0; i<results.length; i++){
		total += results[i];
	}
	//console.log(total);
	average = total/results.length;
	document.getElementById("main").innerHTML += (`<h5> Your average result is: ${average} </h5>`);
}

function userInput(){
	noOfSubjects=parseInt(prompt("How many subjects do yoy study?"));
	calculateGrades();
}






	
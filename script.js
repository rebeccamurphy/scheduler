var schedule = new Array();

function Class()
{ 
days = new  Array();
var times="";
var blocks =0;
this.name = document.getElementById("class_name").value;
this.loc =  document.getElementById("class_loc").value;
this.credits = document.getElementById("credit").value;
addDays();
this.days = days;
addTimes();
this.time = times;
this.block = blocks;



function addDays(){
if (document.getElementById("mday").checked ==true)
	days.push("Monday");
if (document.getElementById("tday").checked ==true)
	days.push("Tuesday");
if (document.getElementById("wday").checked ==true)
	days.push("Wednesday");
if (document.getElementById("rday").checked ==true)
	days.push("Thursday");
if (document.getElementById("fday").checked ==true)
	days.push("Friday");
if (days.length==0)
	alert("Please check at least 1 day");
}
	
function addTimes() {
			
			var test = parseInt(document.getElementById("the_day_time").value);
			
			if (test>0)
			{
			blocks = test;
			switch (test)
			{
			case 1:
			times="08:00am to 09:15am";
			break;
			case 2:
			times=("09:30am to 10:45am");
			break;
			case 3:
			times =("11:00am to 12:15pm");
			break;
			case 4:
			times = ("12:30pm to 01:45pm");
			break;
			case 5:
			times =("02:00pm to 03:15pm");
			break;
			case 6:
			times =("03:30pm to 04:45pm"); 
			break;
			case 7:
			times = ("05:00pm to 06:15pm");
			break;			
			}
			
			}
				else if (parseInt(document.getElementById("the_double_time").value) >0)
				{
				test = parseInt(document.getElementById("the_double_time").value);
				blocks = test;
				switch (test)
				{
				case 8:
				
				times =("08:00am to 10:45pm");
				break;
				
				case 9:
				times =("09:30am to 12:30pm");
				break;
				
				case 10:
				times =("11:00pm to 01:45pm"); 
				break;
				
				case 11:
				times =("12:30pm to 03:15pm"); 
				break;
				case 12:
				times =("02:00pm to 04:45pm"); 
				break;
				case 13:
				times =("03:30pm to 06:15pm"); 
				break;
				}
				}
					else if (parseInt(document.getElementById("the_night_time").value) >0)
						{
						test = parseInt(document.getElementById("the_night_time").value);
						blocks = test;
						switch (test)
						{
						case 14:
						times =("06:30pm to 09:15pm"); 
						break;
						};
						}
						else 
						alert("Please enter a time.");
				
			
			}
			}
		
	
function printClass(Class1)		
{
if (Class1.days.length >1)
return (" The class " + Class1.name + " is " +Class1.credits + " credits, at " +Class1.loc + " on " + Class1.days[0]+ " and " + Class1.days[1] + " at " + Class1.time + "."); 
else
return (" The class " + Class1.name + " is " +Class1.credits + " credits, at " +Class1.loc + " on " + Class1.days[0]+ " at " + Class1.time +"."); 		
} 
function addClass()
{

 

var Class1 = new Class();

if (Class1.name.length >0 && Class1.loc.length>0  && Class1.days.length >0 && Class1.block >0)
{
schedule.push(Class1);
showSchedule();
cycleSchedule()
}
else
alert ("Please fill out all fields.");
//checkConflict();

}

function printSchedule(){
var paperSchedule ="";
for (var i =0; i< schedule.length; i++)
{
		paperSchedule += printClass(schedule[i]) + " <br> ";
}
return paperSchedule;
}

function totalCredits(){
var totalCredit = 0;

for (var i =0; i< schedule.length; i++)
{
	printClass(schedule[i]);
	totalCredit = totalCredit+ parseInt(schedule[i].credits);
}
	return "Total Credits: "+totalCredit;
}

function showSchedule()
{
window.top.output.document.getElementById("cp").innerHTML=printSchedule();
window.top.output.document.getElementById("tc").innerHTML=totalCredits(); 
}

function cycleSchedule()
{ 
for (var i =0; i< schedule.length; i++)
{var c=new Array(), r = new Array();
var class1 =schedule[i];

for(var j =0; j<class1.days.length; j++)
{
if (class1.days[j]==="Monday")
c.push(1);
else if (class1.days[j]==="Tuesday")
c.push(2);
else if (class1.days[j]==="Wednesday")
c.push(3);
else if (class1.days[j]==="Thursday")
c.push(4);
else
c.push(5);
}

switch(parseInt(class1.block)) 
{case 1:
r.push('1');
break;
case 2:
r.push('2');
break;
case 3:
r.push('3');
break;
case 4:
r.push('4');
break;
case 5:
r.push('5');
break;
case 6:
r.push('6');
break;
case 7:
r.push('7');
break;
case 8:
r.push('8');
break;
case 9:
r.push('1');
r.push('2');
break;
case 10:
r.push(3);
r.push(4);
break;
case 11:
r.push('4');
r.push('5');
break;
case 12:
r.push('5');
r.push('6');
break;
case 13:
r.push('6');
r.push('7');
break;
case 14:
r.push('8');
break;
}

//alert (c[0] +" "+ c[1] +" "+ r[0] +" "+r[1]);
if (c.length==2&& r.length==2)
{
 makeTable(c[0], r[0],class1 )
 makeTable(c[0], r[1], class1);
 makeTable(c[1], r[0], class1);
 makeTable(c[1], r[1], class1);
}
else if (c.length==2 && r.length<2)
{
makeTable(c[0], r[0], class1);
makeTable(c[1], r[0], class1);
}
else if (c.length<2 && r.length==2)
{
makeTable(c[0], r[0], class1);
makeTable(c[0], r[1],class1);
}
else 
{
makeTable(c[0], r[0],class1);
}
}
}

/* function checkConflict()

{
if (schedule.length >1)
 for (var k=0; k<schedule.length; k++)
{	var class1, class2;
	class1 = schedule[k]
	for (var p=1; p==schedule.length; p++)
	
	{
		if ( p==schedule.length)
		class2 = schedule[0];
		
		class2 = schedule[p]
		if (class1.block === class2.block)
		{
		alert("The class you just entered conflicts with another class.");
		alert("Please double check schedule, refresh window and reenter classes.");
		}
		else if (class1.block!=class2.block)
		{
			switch (class1.block)
			{
			case 1:
			if (class2.block == 8)
			{
			alert("The class you just entered conflicts with another class.");
			alert("Please double check schedule, refresh window and reenter classes.");
			
			}
			break;
			case 2:
			if (class2.block == 8 || class2.block==9) 
			{
			alert("The class you just entered conflicts with another class.");
			alert("Please double check schedule, refresh window and reenter classes.");
			}
			break;
			case 3:
			if (class2.block == 9 || class2.block==10)
			{
			alert("The class you just entered conflicts with another class.");
			alert("Please double check schedule, refresh window and reenter classes.");
			}
			break;
			
			case 4:
			if (class2.block == 10 || class2.block==11)
			{
			alert("The class you just entered conflicts with another class.");
			alert("Please double check schedule, refresh window and reenter classes.");
			}
			break;
			
			case 5:
			if (class2.block == 11 || class2.block==12)
			{
			alert("The class you just entered conflicts with another class.");
			alert("Please double check schedule, refresh window and reenter classes.");
			}
			break;
			case 6:
			if (class2.block == 12 || class2.block==13)
			{
			alert("The class you just entered conflicts with another class.");
			alert("Please double check schedule, refresh window and reenter classes.");
			}
			break;
			case 7:
			if (class2.block==13)
			{
			alert("The class you just entered conflicts with another class.");
			alert("Please double check schedule, refresh window and reenter classes.");
			}
			break;
			};
			}
			
			else
			return true;
			
		}
		}
		else
		return true;
		
		
	}
 
*/

function makeTable(c, r, class1)
{
var Row = window.top.output.document.getElementById(r);
var Cells = Row.getElementsByTagName("td");
Cells[c].innerHTML=class1.name + " " + class1.time + " Location: " +class1.loc;
}
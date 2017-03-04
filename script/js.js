function tQuery() {

	var data={

		First_Name:document.getElementById('fName').value,
		Last_Name:document.getElementById('lName').value,
		User_Email:document.getElementById('email').value,
		User_Mobile:document.getElementById('mobile').value,
		User_Gender:document.getElementById('gender').value,
		User_City:document.getElementById('city').value,
   		User_Comment:document.getElementById('comments').value

		
	};

	var fname=document.getElementById('fName').value;
	var lname=document.getElementById('lName').value;
	var uEmail=document.getElementById('email').value;
	var uMobile=document.getElementById('mobile').value;
	var uGender=document.getElementById('gender').value;
	var uCity=document.getElementById('city').value;
    var comment=document.getElementById('comments').value;
	


	 if (!fname)
	 {
		alert("please fill the first name");
	 }
	 else if (!lname) {alert("please fill the last name");}
	 else if (!uEmail) {alert("please fill the Email");}
	 // var atpos = uEmail.indexOf("@");
 	//   var dotpos = uEmail.lastIndexOf(".");
     // else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=uEmail.length) {
 //        alert("Not a valid e-mail address");
 //        return false;
 //    }
	// // email validation here
	else if (!uMobile) {alert("please fill the mobile");}
	else if (isNaN(parseInt(uMobile))) {alert("please fill valid mobile");}
    else if (uMobile.length!=10) {alert("please fill 10 digit mobile");}
	else if (!uGender) {alert("please fill the Gender");}
	else if (!uCity) {alert("please fill the City");}
	else if (!comment) {alert("please fill the text area");}

	else
	{
		
		var ref=firebase.database().ref("Details");
		ref.push().set(data);
		alert("hurray! Data submitted successfully..");

		document.getElementById('fName').value="";
		document.getElementById('lName').value="";
		document.getElementById('email').value="";
		document.getElementById('mobile').value="";
		document.getElementById('gender').value="";
		document.getElementById('city').value="";
		document.getElementById('comments').value="";
		


	}



	


	// body...
}

$(document).ready(function() {
	
	var fire=firebase.database().ref().child("Details");

	fire.on("child_added",snap=>{

		var f_name=snap.child("First_Name").val();
		var l_name=snap.child("Last_Name").val();
		var u_email=snap.child("User_Email").val();
		var u_mobile=snap.child("User_Mobile").val();
		var u_gender=snap.child("User_Gender").val();
		var u_city=snap.child("User_City").val();
		var u_text=snap.child("User_Comment").val();

		$('#txtB').append("<tr><td>"+f_name+"</td><td>"+l_name+"</td><td>"+u_email+"</td><td>"+u_mobile+"</td><td>"+u_gender+"</td><td>"+u_city+"</td><td>"+u_text+"</td></tr>");

	});


	$('#click').click(function() {
		
		$('#btncont').slideUp(1000);
		$('#cont').slideDown(1000);
	});


});

/*time and date display*/

var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();


//for time
window.onload=function(){getTime();}  
function getTime(){  
var today=new Date();  
var h=today.getHours();  
var m=today.getMinutes();  
var s=today.getSeconds();  
// add a zero in front of numbers<10  
m=checkTime(m);  
s=checkTime(s);  
document.getElementById('time_txt').innerHTML=h+":"+m+":"+s;  
setTimeout(function(){getTime()},1000);  
}  
//setInterval("getTime()",1000);//another way  
function checkTime(i){  
if (i<10){  
  i="0" + i;  
 }  
return i;  
}  

function submitQuery() {
	
	

	// else{

	// alert("Congratulation! you submitted Data");
	// }

	
}

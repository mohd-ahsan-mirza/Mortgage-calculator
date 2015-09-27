//***********************************************************************************//
//* Name :   Muhammad Ahsan Mirza                                                                       *//
//* Zenit login : int222_141g18                                                       *//
//***********************************************************************************//


var myMonths=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
var myDays= new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun");
var today=new Date();
var thisDay=myDays[today.getDay()]
var thisMonth=myMonths[today.getMonth()]
var thisYear=today.getFullYear()
var thisDate=today.getDate()
var todaysDate=thisDay+", "+thisDate+" "+thisMonth+" "+thisYear





			function userNameValidation(username){

				
			
				//alert("going");
			
				username=username.value;
				
				//alert("username is:"+username);
			
				if(username.length<10 || username.length>10)
					{
					
						//alert("length not 10");
						return 1;
					
					}
	
				if(username.charAt(4) != '-' )
					{
						//alert("No Hyphen");
						return 2;
					}
	
				if(isNaN(username.substring(0,4)) || isNaN(username.substring(5,username.length)))
					{
						//alert("Not a number");
						return 3;
					}
	
				var right=parseInt(username.charAt(0))+parseInt(username.charAt(1))+parseInt(username.charAt(2))+parseInt(username.charAt(3));

				var left=parseInt(username.charAt(5))+parseInt(username.charAt(6))+parseInt(username.charAt(7))+parseInt(username.charAt(8))+parseInt(username.charAt(9));
				
				//alert("right is:"+2*(right+1));
				//alert("left is:"+left);

				if( right<=0 || left<=0)
				{
					
					//alert("sum zero");
					return 4;
				}
				if( ((2*right)+1) != left )
				{	
					//alert("sum not equal");
					return 5;
				}
				//alert("true");
		
				return 0;

			}
			
			function nameValidation(name)
			{
			
				
			
				name=name.value.toLowerCase();
				
				var special = "~`!#$%^&*+=[]\\\;,/{}|\":<>?";
				
				var allowed="'-";
				
				if(name.length<3)
				{
		
					//alert("Name should atleast be 3 characters.");
					return 1;
				}
				
				
				
				for(var run=0;run<name.length;run++)
				{
					if(!(isNaN(parseInt(name.substring(run,run+1)))))
					{
				
						if(name.substring(run,run+1) !="'" && name.substring(run,run+1) !="-" && name.substring(run,run+1) !=" ")
						{	
						
							//alert("Name cannot have a number.Try again");
			
							return 2;
						}
					}
				}
		
	
				for(var run=0;run<name.length;run++)
				{
					if(!(special.indexOf(name.charAt(run))==-1))
					{	
						
						//alert("Name cannot have special characters.Try again");
						
						return 3;
					}
				}
			
				for(var run=0;run<3;run++)
				{
					if(!(allowed.indexOf(name.charAt(run))==-1))
					{	
						
						//alert("Name cannot have ' or - in the first three characters.Try again");
						
						return 4;
					}
				}
			
			
			
				if((name.substring(0,1)=="'" || name.substring(0,1)=="-") || (name.substring((name.length-1),name.length)=="'" || name.charAt(name.length-1)=='-'))
					{
						//alert("cannot contain - or ' at the beginning and/or end");
						return 5;
					}
				
				var index=name.indexOf('-');
				
				if( index !=-1 && (name.substring(index-1,index)=="'" || name.substring(index+1,index)=="'"))
				{
				
					//alert("' and - can't be together");
					return 6;
					
				
				}
				
				
				if(name.substr(0,3).indexOf(' ') != -1)
					return 8;
				
				//alert("true");
				return 0;
			
			}
		
			function propValueValidation(property){
			
			//What if not a whole number . Like if it is 1000.5 instead of 1000
			
			//alert("going");
			
			//alert("error is "+error);
			
			property=property.value;
			
			if(property.length==0)
			{
				//error=error+"<br />Must be present";
				return 1;
			}
			//alert("still going");
			
			
			if(isNaN(property))
			{	
				//error=error+"Not a number";
				return 2;
				
			}
			
			
			
			if(Number(property)<=0)
			{
				//error=error+"cannot be zero or less";
				return 3;
			}
			
			if(property%1 != 0)
			{
				//error=error+"Not a whole number";
				return 4;
			}
			
			//alert("still still going");
			
			//alert(getElementById("downPay").value);
			
			if(parseInt(property)<=(parseInt(document.getElementById("downPay").value)+65000))
			{
				//error=error+"property value less than down payment";
				return 5;
			}
			//alert("not going");
			//alert("true");
				return 0;
		}
		
		function downPayValidation(dPay){
			
			////What if not a whole number . Like if it is 1000.5 instead of 1000
			
			dPay=dPay.value;
			
			if(dPay.length==0)
			{
				//alert("Must be present");
				return 1;
			}
			//alert("still going");
			if(isNaN(dPay))
			{	
				//alert("Not a number");
				return 2;
				
			}
			
			if(Number(dPay)<=0)
			{
				//alert("cannot be zero or less");
				return 3;
			}
			
			
			if(dPay%1 != 0)
			{
				//alert("Not a whole number");
				return 4;
			}
			
			if((((Number(document.getElementById("propValue").value))/100)*10)>Number(dPay))
			{
				//alert("DownPay not 10%");
				return 5;
				
			}
				
			//alert("true");

			return 0;
			
			}
		
		
			function incomeValidation(salary)
			{
			
				//alert(document.getElementsByName("income"));
				//alert("going");
				//var range =salary.value;
				//alert("salary "+ra);
				//var length=salary.length;
				
				//salary=salary.value;
				
				//alert("still going");
				
				//alert(salary.length);
				
				if(salary.selectedIndex==-1)
				{
					//alert("didn't select anything"); 
					return false;
				}
				else
				{
					//alert("true");
					return true;
				}
			}
	
			function propDetailsValidation(detail)
			{
			
			
			//Need more work in this one 
			
				var length=detail.length;
				
				var checker1=0;
				
				var index=0;
				
				for(var run=0;run<length;run++)
				{
				
					if(detail[run].checked)
					{	
						checker1=1;
						
					}	
				}
				
				if(detail[detail.length-1].checked)
				{
					for(var run=0;run<length-1;run++)
					{
				
						if(detail[run].checked)
						{	
							checker1=0;
						
						}	
					}
				
				
				}
				
				
				if(checker1==0)
				{
					//alert("nothing selected");
					return false;
				
				}
				
					
				//alert("true");
				
				return true;
			
			}
	
		function checkerValidation(option){
		
			var details=document.getElementsByName("propDetails");
		
			if(option==7)
			{
			
				for(var run=0;run<6;run++)
				 details[run].checked=false;
			
			}
		
			else{
			
			details[6].checked=false;
			
			}
		
		}
	
	
		function propLocationValidation(location)
		{
		
		var length=location.length;
				
				var checker1=0;
				//var index;
				
				for(var run=0;run<length;run++)
				{
				
					if(location[run].checked)
					{	
						checker1=1;
						//index=run;
					}	
				}
				
				if(checker1==0)
				{
					//alert("nothing selected");
					return false;
				
				}
		
				else
				{
					//alert("location true");
					return true;
				}
		
		}
	
	
		function mortYearValidation(year)
		{
		
			//alert("going");
		
			year=year.value;
			
			if(year.length==0)
			{
				//alert("Must be present");
				return 1;
			}
			
			if(isNaN(year))
			{
				//alert("Must be a number");
				return 2;
			}
				
			var date=new Date();
			var value=Number(year);
			
			if( !(value ==date.getFullYear() || value ==(date.getFullYear()+1)))
			{
				//alert("date not correct");
				return 3;
			
			}
			
			//alert("true");
			return 0;
			
		
		}
	
		function mortMonthValidation(month)
		{
		
			//alert("going");
		
			month=month.value;
			
			if(month.length==0)
			{
				//alert("Must be present");
				return 1;
			}
			
			if(isNaN(month))
			{
				//alert("Must be a number");
				return 2;
			}
				
			var date=new Date();
			var value=Number(month);
			
			if(value < 1 || value > 12)
			{
				//alert("must be between 1 and 12");
				return 3;
			
			}
			
			if( !(value ==(date.getMonth()+1) || value ==(date.getMonth()+2)))
			{
				//alert("month not correct");
				return 4;
			
			}
			
			//alert("true");
			return 0;
			
		
		}
	
	
		function intRateValidation(rate)
		{
			//alert("going");
			rate=rate.value;
			
			if(rate.length==0)
			{
				//alert("Must be present");
				return 1;
			}
			
			if(isNaN(rate))
			{
				//alert("Must be a number");
				return 2;
			}
		
		
			var value=Number(rate);
			
			if(value < 2 || value > 11)
			{
				//alert("must be between 2 and 11 inclusive");
				return 3;
			
			}
		
		
			//alert("true");
			return 0;
		
		
		}
		
		function amortizationValidation(amortize)
		{
			//alert("going");
			amortize=amortize.value;
			
			if(amortize.length==0)
			{
				//alert("Must be present");
				return 1;
			}
			
			if(isNaN(amortize))
			{
				//alert("Must be a number");
				return 2;
			}
		
		
			var value=Number(amortize);
			
			if(value < 5 || value > 20)
			{
				//alert("must be between 5 and 20 inclusive");
				return 3;
			
			}
			
			
		
		
			//alert("true");
			return 0;
		
		
		}
	
		function active(js)
		{
		//Not sure;
		js.value="ON";
		
		}
	
		function validationForPayment() {   

		var checker=new Boolean(1);
		var errors="";
		
		if((propValueValidation(document.getElementById("propValue")))==1)
			{
				errors=errors+"<br /> Property value Must be present";
				checker=false;
			
			}
		
		if((propValueValidation(document.getElementById("propValue")))==2)
			{
				errors=errors+"<br /> Property value Not a number";
				checker=false;
			
			}
			
		if((propValueValidation(document.getElementById("propValue")))==3)
			{
				errors=errors+"<br /> Property value cannot be zero or less";
				checker=false;
			
			}
			
		if((propValueValidation(document.getElementById("propValue")))==4)
			{
				errors=errors+"<br /> Property value not a whole number";
				checker=false;
			
			}
			
		if((propValueValidation(document.getElementById("propValue")))==5)
			{
				errors=errors+"<br /> property value less than down payment";
				checker=false;
			
			}
		
		if((downPayValidation(document.getElementById("downPay")))==1)
			{
				errors=errors+"<br /> Down Payment Must be present";
				checker=false;
			
			}
		
		
		if((downPayValidation(document.getElementById("downPay")))==2)
			{
				errors=errors+"<br /> Down Payment Not a number";
				checker=false;
			
			}
			
		if((downPayValidation(document.getElementById("downPay")))==3)
			{
				errors=errors+"<br /> Down Payment cannot be zero or less";
				checker=false;
			
			}
		
		if((downPayValidation(document.getElementById("downPay")))==4)
			{
				errors=errors+"<br /> Down Payment Not a whole number";
				checker=false;
			
			}
		
		if((downPayValidation(document.getElementById("downPay")))==5)
			{
				errors=errors+"<br /> DownPayment not 10% of property value";
				checker=false;
			
			}
		
		if((intRateValidation(document.getElementById("intRate")))==1)
			{
				errors=errors+"<br /> Interest rate must be present ";
				checker=false;
			
			}
			
		if((intRateValidation(document.getElementById("intRate")))==2)
			{
				errors=errors+"<br /> Interest rate must be a number";
				checker=false;
			
			}
			
		if((intRateValidation(document.getElementById("intRate")))==3)
			{
				errors=errors+"<br /> Interest rate must be between 2 and 11 inclusive";
				checker=false;
			
			}
			
			
		
		if((amortizationValidation(document.getElementById("amortization")))==1)
			{
				errors=errors+"<br /> No of years must be present";
				checker=false;
			
			}
			
		if((amortizationValidation(document.getElementById("amortization")))==2)
			{
				errors=errors+"<br /> No of years must be a number";
				checker=false;
			
			}
			
		if((amortizationValidation(document.getElementById("amortization")))==3)
			{
				errors=errors+"<br /> No of years must be between 5 and 20 inclusive";
				checker=false;
			
			}
			
		if(checker)
			detailPaymentCalculation(document.getElementById("propValue").value,document.getElementById("downPay").value,document.getElementById("intRate").value,document.getElementById("amortization").value);
		else
		{
		
			document.forms[0].action="javascript:void(0)";
			
			
			
			//alert(document.getElementById("reserved").innerHTML);
			
			document.getElementById("reserverd").innerHTML=errors;
		
		}
		
} // End of validationForPayment function

    //********************************************************************************//
    //*   Do not modify any statements in detailPaymentCalculation function          *//
    //********************************************************************************//

function detailPaymentCalculation(mortAmount,mortDownPayment,mortRate,mortAmortization) {

    //********************************************************************************//
    //*   This function calculates the monthly payment based on the following:       *//
    //*                                                                              *//
    //*               M = P [ i(1 + i)n ] / [ (1 +  i)n - 1]                         *//
    //*                                                                              *//
    //********************************************************************************//
     var paymentError = "";
     var v = mortAmount * 1;
     var d = mortDownPayment * 1;
     var i = mortRate * 1;
     var y = mortAmortization * 1;
     var a = v - d;
         i = i/100/12;
         n = y * 12;
     var f = Math.pow((1+i),n);

     var p = (a * ((i*f)/(f-1))).toFixed(2);

     if (p=="NaN" || p=="Infinity") {
         paymentError = "Please complete the form before attempting to calculate the monthly payment" 
         document.forms[0].comments.value = paymentError;
         document.forms[0].payment.value = "";
     }
     else {
           document.forms[0].payment.value = p;
           document.forms[0].comments.value = "";
     }

} // End of detailPaymentCalculation function


	
	
			
			
function completeFormValidation() {

		var checker=new Boolean(1);
		var errors="";
		
		
		
		if((userNameValidation(document.getElementById("userId")))==1)
		{
			errors=errors+"Username length not 10";
			checker=false;
		}
		
		if((userNameValidation(document.getElementById("userId")))==2){
			errors=errors+"Username has no hyphen in the middle";
			checker=false;
		}
	
		if((userNameValidation(document.getElementById("userId")))==3){
			errors=errors+"Username doesn't contain a number on one or both sides of Username";
			checker=false;
		}
		
		if((userNameValidation(document.getElementById("userId")))==4){
			errors=errors+"sum on either side of hyphen is zero or less than that in Username";
			checker=false;
		}
		
		if((userNameValidation(document.getElementById("userId")))==5){
			errors=errors+"sum of right  of hyphen multiplied by 2 plus 1 should be equal to sum of left in Username ";
			checker=false;
		}
		
		if((nameValidation(document.getElementById("client")))==1)
			{
				errors=errors+"<br /> Name should atleast be 3 characters";
				checker=false;
			
			}
		
		if((nameValidation(document.getElementById("client")))==2)
			{
				errors=errors+"<br /> Name cannot have a number";
				checker=false;
			
			}
		
		if((nameValidation(document.getElementById("client")))==3)
			{
				errors=errors+"<br /> Name cannot have special characters";
				checker=false;
			
			}
		
		if((nameValidation(document.getElementById("client")))==4)
			{
				errors=errors+"<br /> Name cannot have ' or - in the first three characters";
				checker=false;
			
			}
		
		if((nameValidation(document.getElementById("client")))==5)
			{
				errors=errors+"<br />Name cannot contain - or ' at the beginning and/or end";
				checker=false;
			
			}
			
		if((nameValidation(document.getElementById("client")))==6)
			{
				errors=errors+"<br /> ' and - can't be together in Name";
				checker=false;
			
			}
			
		if((nameValidation(document.getElementById("client")))==7)
			{
				errors=errors+"<br /> ' Name should have atleast three characters";
				checker=false;
			
			}
			
			
		if((nameValidation(document.getElementById("client")))==8)
			{
				errors=errors+"<br /> ' In name first three characters should be alphabet only";
				checker=false;
			
			}
		
		if((propValueValidation(document.getElementById("propValue")))==1)
			{
				errors=errors+"<br /> Property value Must be present";
				checker=false;
			
			}
		
		if((propValueValidation(document.getElementById("propValue")))==2)
			{
				errors=errors+"<br /> Property value Not a number";
				checker=false;
			
			}
			
		if((propValueValidation(document.getElementById("propValue")))==3)
			{
				errors=errors+"<br /> Property value cannot be zero or less";
				checker=false;
			
			}
			
		if((propValueValidation(document.getElementById("propValue")))==4)
			{
				errors=errors+"<br /> Property value not a whole number";
				checker=false;
			
			}
			
		if((propValueValidation(document.getElementById("propValue")))==5)
			{
				errors=errors+"<br /> property value less than down payment";
				checker=false;
			
			}
		
		if((downPayValidation(document.getElementById("downPay")))==1)
			{
				errors=errors+"<br /> Down Payment Must be present";
				checker=false;
			
			}
		
		
		if((downPayValidation(document.getElementById("downPay")))==2)
			{
				errors=errors+"<br /> Down Payment Not a number";
				checker=false;
			
			}
			
		if((downPayValidation(document.getElementById("downPay")))==3)
			{
				errors=errors+"<br /> Down Payment cannot be zero or less";
				checker=false;
			
			}
		
		if((downPayValidation(document.getElementById("downPay")))==4)
			{
				errors=errors+"<br /> Down Payment Not a whole number";
				checker=false;
			
			}
		
		if((downPayValidation(document.getElementById("downPay")))==5)
			{
				errors=errors+"<br /> DownPayment not 10% of property value";
				checker=false;
			
			}
		
			
		if(!(incomeValidation(document.getElementById("income"))))
			{
				errors=errors+"<br /> Didn't selected anything in income";
				checker=false;
			
			}
			
		if(!(propDetailsValidation(document.getElementsByName("propDetails"))))
			{
				errors=errors+"<br /> Didn't select anything or made invalid selection in property details ";
				checker=false;
			
			}
			
			
		if(!(propLocationValidation(document.getElementsByName("propLocation"))))
			{
				errors=errors+"<br /> Didn't select anything in property location";
				checker=false;
			
			}

		
		if((mortYearValidation(document.getElementById("mortYear")))==1)
			{
				errors=errors+"<br /> Year Must be present";
				checker=false;
			
			}
		
		if((mortYearValidation(document.getElementById("mortYear")))==2)
			{
				errors=errors+"<br /> Year Must be a number";
				checker=false;
			
			}
			
		if((mortYearValidation(document.getElementById("mortYear")))==3)
			{
				errors=errors+"<br /> date not correct";
				checker=false;
			
			}
			
		
		
		//alert("1"+checker);		
		if((mortMonthValidation(document.getElementById("mortMonth")))==1)
			{
				errors=errors+"<br /> Month Must be present";
				checker=false;
			
			}
		
		if((mortMonthValidation(document.getElementById("mortMonth")))==2)
			{
				errors=errors+"<br /> Month Must be a number";
				checker=false;
			
			}

		if((mortMonthValidation(document.getElementById("mortMonth")))==3)
			{
				errors=errors+"<br /> Month must be between 1 and 12";
				checker=false;
			
			}
			
		if((mortMonthValidation(document.getElementById("mortMonth")))==4)
			{
				errors=errors+"<br /> month not correct";
				checker=false;
			
			}
		
			
		if((intRateValidation(document.getElementById("intRate")))==1)
			{
				errors=errors+"<br /> Interest rate must be present ";
				checker=false;
			
			}
			
		if((intRateValidation(document.getElementById("intRate")))==2)
			{
				errors=errors+"<br /> Interest rate must be a number";
				checker=false;
			
			}
			
		if((intRateValidation(document.getElementById("intRate")))==3)
			{
				errors=errors+"<br /> Interest rate must be between 2 and 11 inclusive";
				checker=false;
			
			}
			
			
		
		if((amortizationValidation(document.getElementById("amortization")))==1)
			{
				errors=errors+"<br /> No of years must be present";
				checker=false;
			
			}
			
		if((amortizationValidation(document.getElementById("amortization")))==2)
			{
				errors=errors+"<br /> No of years must be a number";
				checker=false;
			
			}
			
		if((amortizationValidation(document.getElementById("amortization")))==3)
			{
				errors=errors+"<br /> No of years must be between 5 and 20 inclusive";
				checker=false;
			
			}
			
		
		
		//alert(checker);
		
		if(checker){
		
			var user=document.getElementById("client").value;
			
			document.getElementById("client").value=user.substr(0,1).toUpperCase()+user.substring(1,user.length);
			
			active(document.getElementById("jsActive"));
			
			document.mortgage.payment.disabled = false;
		
			document.forms[0].action="https://zenit.senecac.on.ca/~emile.ohan/cgi-bin/assign3.cgi";
		
			
		
			return true;
		}
		
		else{
		
			document.forms[0].action="javascript:void(0)";
			
			
			
			//alert(document.getElementById("reserved").innerHTML);
			
			document.getElementById("reserverd").innerHTML=errors;
			
			return false;
			
			//alert(document.getElementById("reserved").innerHTML);
		}
		
		
	

} // End of completeFormValidation

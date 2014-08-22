var script = document.createElement('script');
script.src = "functions.js";
document.getElementsByTagName('script')[0].parentNode.appendChild(script);
var xmlHttpR;
/*
 * creates a new XMLHttpRequest object which is the backbone of AJAX,
 * or returns false if the browser doesn't support it
 */
function getXMLHttpRequest() {
  var xmlHttpReq = false;
  // to create XMLHttpRequest object in non-Microsoft browsers
  if (window.XMLHttpRequest) {
    xmlHttpReq = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      // to create XMLHttpRequest object in later versions
      // of Internet Explorer
      xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (exp1) {
      try {
        // to create XMLHttpRequest object in older versions
        // of Internet Explorer
        xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (exp2) {
        xmlHttpReq = false;
      }
    }
  }
  return xmlHttpReq;
}
/*
 * AJAX call starts with this function
 */
function advisorSearch(program, major){
	  xmlHttpR = getXMLHttpRequest();
	  xmlHttpR.onreadystatechange = getReadyStateHandler(xmlHttpR);
	  xmlHttpR.open("GET","advSearch"+"?program="+program+"&major="+major, true);

	  xmlHttpR.onreadystatechange = advsrch;
	  xmlHttpR.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	  xmlHttpR.send(null);
	}

function advsrch(){	
	if(xmlHttpR.readyState == 4 ){
		document.getElementById("advisorResult").innerHTML = xmlHttpR.responseText;
	}
}

function appointmentDate(program, major){
	  xmlHttpR = getXMLHttpRequest();
	  xmlHttpR.onreadystatechange = getReadyStateHandler(xmlHttpR);
	  xmlHttpR.open("GET","regappDate"+"?program="+program+"&major="+major, true);
	  xmlHttpR.onreadystatechange = appDate;
	  xmlHttpR.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	  xmlHttpR.send(null);
	}

function appDate(){	
	if(xmlHttpR.readyState == 4 ){
		document.getElementById("regResult").innerHTML = xmlHttpR.responseText;
	}
}


function getQuizscore(){
	  xmlHttpR = getXMLHttpRequest();
	  xmlHttpR.onreadystatechange = getReadyStateHandler(xmlHttpR);
	  xmlHttpR.open("GET","getQuizScore", true);
	  xmlHttpR.onreadystatechange = quizscore;
	  xmlHttpR.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	  xmlHttpR.send(null);
	}

function quizscore(){	
	if(xmlHttpR.readyState == 4 ){
		//alert("Quiz Score");
		var totalscore=xmlHttpR.responseText;
		totalscore=totalscore.trim();
		//alert("Score:"+totalscore);
		var idscore;
		//setTimeout(function(){}, 3000);
		for (var i = 1; i <= 9; i++) {
		    idscore="score"+i;
		    document.getElementById(idscore).innerHTML=totalscore;
		}
		
	}
}

function nyuClassesClick(){
	  xmlHttpR = getXMLHttpRequest();
	  xmlHttpR.onreadystatechange = getReadyStateHandler(xmlHttpR);
	  xmlHttpR.open("GET","nyuclick", true);
	  xmlHttpR.onreadystatechange = nyuclasses;
	  xmlHttpR.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	  xmlHttpR.send(null);
	}

function nyuclasses(){	
	if(xmlHttpR.readyState == 4 ){
		//alert("NYU Class Click");
	}
}


/*
 * Returns a function that waits for the state change in XMLHttpRequest
 */
function getReadyStateHandler(xmlHttpR) {
 
  // an anonymous function returned
  // it listens to the XMLHttpRequest instance
  return function() {
    if (xmlHttpR.readyState == 4) {
      if (xmlHttpR.status == 200) {
        //document.getElementById("hello").innerHTML = xmlHttpRequest.responseText;
        
      } else {
        alert("HTTP error " + xmlHttpR.status + ": " + xmlHttpR.statusText);
      }
    }
  };
}
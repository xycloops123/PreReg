var script = document.createElement('script');
script.src = "functions.js";
document.getElementsByTagName('script')[0].parentNode.appendChild(script);
var xmlHttpRequest;
var missionNumber;
var panelNumber;
var attempts=0;
//var compPanelNumber=0;
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
function makeRequest(panelNo,type,videonumber,missionNo) {
  xmlHttpRequest = getXMLHttpRequest();
  xmlHttpRequest.onreadystatechange = getReadyStateHandler(xmlHttpRequest);
  xmlHttpRequest.open("POST", "updateVidInfo"+"?panelNo="+panelNo+"&type="+type+"&videoNo="+videonumber+"&missionNo="+missionNo, true);
  if(type=='end')
  {
	missionNumber=missionNo;
	panelNumber=panelNo;
  	xmlHttpRequest.onreadystatechange = showResult;
  }
  xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xmlHttpRequest.send(null);
}

function showResult(){	
	if(xmlHttpRequest.readyState == 4){
		var response = ""+xmlHttpRequest.responseXML;
		var x=xmlHttpRequest.responseText;
		x=x.trim();
		if(x=="true"){
			//alert("true in make request");
			updateVideoMission(missionNumber,panelNumber);
		}
	}
}


function CheckAnswer(panelNo,answer) {
	  
	  xmlHttpRequest = getXMLHttpRequest();
	  xmlHttpRequest.onreadystatechange = getReadyStateHandler(xmlHttpRequest);
	  xmlHttpRequest.open("POST", "checkanswer"+"?panelNo="+panelNo+"&answer="+answer, true);
	  panelNumber=panelNo;
	  //alert("panelNo"+panelNumber)
	  xmlHttpRequest.onreadystatechange = check;
	  //alert("makerequest:"+missionNo);
	  xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	  xmlHttpRequest.send(null);
	}
function check(){
	if(xmlHttpRequest.readyState == 4){
		//alert("test1");
		var response = ""+xmlHttpRequest.responseXML;
		var ans=xmlHttpRequest.responseText;
		ans=ans.trim();
		var res=ans.split("\n");
		str=res[0];
		str=str.trim();
		id="quizmessage"+panelNumber;
		attempts++;
		//alert(attempts+"str:"+str+"hfihws");
		if(attempts<2)
		{
			//alert("test2");
			if(str == "true")
			{
				document.getElementById(id).innerHTML = "Correct!"+"<br>"+"<span>You are now ready to move on to the next level.</span>";
				document.getElementById("next").style.display="block";
				completePanelUpdate(panelNumber,attempts,"true");
				attempts=3;
				//getQuizscore();
				//movenextpanel();
			}
			//alert("test3");
			if(str == "false")
			{
				//alert("test4");
				//alert("false");
				document.getElementById(id).innerHTML = "Oops!"+"<br>"+"<span>Wrong answer - please try again.</span>";
			}
		}
		if(attempts==2){
			
			if(str == "true")
			{
				document.getElementById(id).innerHTML = "Correct!"+"<br>"+"<span>You are now ready to move on to the next level.</span>";
				document.getElementById("next").style.display="block";
				completePanelUpdate(panelNumber,attempts,"true");
				//getQuizscore();
				//movenextpanel();
			}
			if(str == "false")
			{
				document.getElementById(id).innerHTML = "Incorrect!"+"<br>"+"<span>Consider reviewing the previous section,<br>before moving to the next level.</span>";
				document.getElementById("next").style.display="block";
				completePanelUpdate(panelNumber,attempts,"false");
				//getQuizscore();
				//movenextpanel();
			}
			//getQuizscore();
		}
		
	}
}

function completePanelUpdate(panelNo,attempts,stuans) {
	  xmlHttpRequest = getXMLHttpRequest();
	  xmlHttpRequest.onreadystatechange = getReadyStateHandler(xmlHttpRequest);
	  xmlHttpRequest.open("POST", "completePanelUpdate"+"?panelNo="+panelNo+"&attempts="+attempts+"&stuans="+stuans, true);
	  xmlHttpRequest.onreadystatechange = panelUpdate;
	  xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	  xmlHttpRequest.send(null);
	}

	function panelUpdate(){	
		if(xmlHttpRequest.readyState == 4){	
			var str=xmlHttpRequest.responseText;
			str=str.trim();
			var ele=str.split(":");
			compPanelNumber=ele[0];
			var score=ele[1];
			var idscore;
			//setTimeout(function(){}, 3000);
			for (var i = 1; i <= 9; i++) {
			    idscore="score"+i;
			    document.getElementById(idscore).innerHTML=score;
			}
		}
	}
function completePanelUpdatePanel8(panelNo) {
		  xmlHttpRequest = getXMLHttpRequest();
		  xmlHttpRequest.onreadystatechange = getReadyStateHandler(xmlHttpRequest);
		  var attempts=0;
		  var stuans=5;
		  xmlHttpRequest.open("POST", "completePanelUpdate"+"?panelNo="+panelNo+"&attempts="+attempts+"&stuans="+stuans, true);
		  xmlHttpRequest.onreadystatechange = panelUpdate8;
		  xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		  xmlHttpRequest.send(null);
		}

		function panelUpdate8(){	
			if(xmlHttpRequest.readyState == 4){	
				var compPanelNo=xmlHttpRequest.responseText;
				compPanelNo=compPanelNo.trim();
				compPanelNumber=compPanelNo;
				getCompletedPanelNo();

			}
		}
	

function getCompletedPanelNo() {
	  xmlHttpRequest = getXMLHttpRequest();
	  xmlHttpRequest.onreadystatechange = getReadyStateHandler(xmlHttpRequest);
	  xmlHttpRequest.open("GET", "getCompletedPanelNo", true);
	  xmlHttpRequest.onreadystatechange = completedPanelNo;
	  xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	  xmlHttpRequest.send(null);
	}

function completedPanelNo(){	
	if(xmlHttpRequest.readyState == 4 ){	
		
		var compPanelNo=xmlHttpRequest.responseText;
		compPanelNo=compPanelNo.trim();
		compPanelNumber=compPanelNo;
	}
}


function startPanelTime(panelNo) {;
	  xmlHttpRequest = getXMLHttpRequest();
	  xmlHttpRequest.onreadystatechange = getReadyStateHandler(xmlHttpRequest);
	  xmlHttpRequest.open("POST","panelStartTime"+"?panelNo="+panelNo, true);
	  xmlHttpRequest.onreadystatechange = startTime;
	  xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	  xmlHttpRequest.send(null);
	}

function startTime(){	
	if(xmlHttpRequest.readyState == 4){	
	}
}

function getCompPanelNo(){
	getCompletedPanelNo();
	return compPanelNumber;
}
function setAttemptstoZero(){
	//setting attempts to zero only when moving to fresh panel
	attempts=0;
}
/*
 * Returns a function that waits for the state change in XMLHttpRequest
 */
function getReadyStateHandler(xmlHttpRequest) {
 
  // an anonymous function returned
  // it listens to the XMLHttpRequest instance
  return function() {
    if (xmlHttpRequest.readyState == 4) {
      if (xmlHttpRequest.status == 200) {
        //document.getElementById("hello").innerHTML = xmlHttpRequest.responseText;
        
      } else {
        alert("HTTP error " + xmlHttpRequest.status + ": " + xmlHttpRequest.statusText);
      }
    }
  };
}
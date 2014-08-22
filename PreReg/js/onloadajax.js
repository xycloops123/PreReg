var script = document.createElement('script');
script.src = "functions.js";
document.getElementsByTagName('script')[0].parentNode.appendChild(script);
var xmlHttpRq;
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



function getOnLoadFunc(){
	  xmlHttpRq = getXMLHttpRequest();
	  xmlHttpRq.onreadystatechange = getReadyStateHandler(xmlHttpRq);
	  xmlHttpRq.open("GET", "onloadGet", true);
	  xmlHttpRq.onreadystatechange = onLoadFn;
	  xmlHttpRq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	  xmlHttpRq.send(null);
	}

function onLoadFn(){	
	if(xmlHttpRq.readyState == 4 ){	
		var res=xmlHttpRq.responseText;
		res=res.trim();
		//alert(compPNo);
		var ele=res.split(":");
		//alert(ele);
		var compPNo=ele[0];
		var progimg=compPNo+1;
		var score=ele[1];
		var fname=ele[2];
		var lname=ele[3];
		document.getElementById("fname").innerHTML=fname;
		document.getElementById("lname").innerHTML=lname;
		//alert("compPNo:"+compPNo+"score:"+score);
		
		var mission_arr = [3,3,2,2,2,6,3,2];
		var i;
		var j;
		var k;
		var comp_id;
		var mid;
		var defpath="css/image/general/statusbar/numbers/";
		
		
		for(i=1;i<=compPNo;i++){
			//alert("i:"+i);
			comp_id=i+"img";
			comp_path=defpath+"completed"+"/"+i+"_c.png";
			document.getElementById(comp_id).src= comp_path;
			for(j=0;j<mission_arr[i-1];j++){
				k=j+1;
				mid="panel"+i+"mission"+k;
				document.getElementById(mid).src= "css/image/general/missionstars/star_01.png";
			}
		}
		var progimg=compPNo;
		progimg++;
		inprog_id=progimg+"img";
		inprog_path=defpath+"inprogress"+"/"+progimg+"_p.png";
		//alert("test2:"+"inprog_id:"+inprog_id+":inprog_path:"+inprog_path);
		document.getElementById(inprog_id).src= inprog_path;
		//alert("test3");
		
		var idscore;
		for (var i = 1; i <= 9; i++) { 
		    idscore="score"+i;
		    document.getElementById(idscore).innerHTML=score;
		}
		
		getQuizscore();
		var x=GetSectionNumber();
		var inrev_id;
		var inrev_path;
		if(x==0 && compPNo>=1){
			document.getElementById("next").style.display="block";
			inrev_id=1+"img";
			inrev_path=defpath+"review"+"/"+1+"_r.png";
			document.getElementById(inrev_id).src= inrev_path;
		}
		/*
		if(compPNo>=1){
			document.getElementById("next").style.display="block";
		}
		
		
		var x=GetSectionNumber();
		if(x==0){
			document.getElementById("next").style.display="block";
		}
		getQuizscore();
		var a=3;
		var b=1;
		mid="panel"+a+"mission"+b;
		document.getElementById(mid).src= "css/image/general/missionstars/star_01.png";
		*/
	}
}


function getReadyStateHandler(xmlHttpRq) {
	 
	  // an anonymous function returned
	  // it listens to the XMLHttpRequest instance
	  return function() {
	    if (xmlHttpRq.readyState == 4) {
	      if (xmlHttpRq.status == 200) {
	        //document.getElementById("hello").innerHTML = xmlHttpRequest.responseText;
	        
	      } else {
	        alert("HTTP error " + xmlHttpRq.status + ": " + xmlHttpRq.statusText);
	      }
	    }
	  };
	}

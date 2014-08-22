function initialize() {
	var myLatlng = new google.maps.LatLng(40.694161, -73.985813);
	var mapOptions = {
			zoom: 17,
			center: myLatlng
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);	
	var contentString = '<div id="content">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h4 id="firstHeading" class="firstHeading">6 Metrotech:NYU Polytechnic School of Engineering</h4>'+
	      '<div id="bodyContent">'+
	      '<p><b>NYU Poly</b> is a comprehensive school of engineering,'+'<br>'+
		  'applied sciences, technology and research,'+'<br>'+
		  'and is rooted in a 158-year tradition of invention,'+'<br>'+ 
		  'innovation and entrepreneurship: i2e.' +'<br>'+
		  '<p><a href="#modal" class="btn go">Start Looking into Campus</a></p>'+'<br>'+
	      '<p><a href="https://engineering.nyu.edu/>NYU Poly</a></p>'+
	      '</div>'+
	      '</div>';
	      
	var infowindow = new google.maps.InfoWindow({
		  content: contentString
	});

	var marker_6Metro = new google.maps.Marker({
		position: new google.maps.LatLng(40.694045,-73.986913),
		map: map,
		title: '6 MetroTech'
	});	
	google.maps.event.addListener(marker_6Metro, 'click', function() {
		document.getElementById("6Metro").style.display="block";
		document.getElementById("5Metro").style.display="none";
		document.getElementById("Wunsch").style.display="none";
		document.getElementById("2Metro").style.display="none";
		document.getElementById("15Metro").style.display="none";
		document.getElementById("mapcontent").style.display="none";
		document.getElementById("Othmer").style.display="none";
		document.getElementById("6MetroImg").src="map_img/6MTC.jpg";
		document.getElementById("imagetitle6MetroImg").innerHTML="";
	});
			
	var marker_5Metro = new google.maps.Marker({
		position: new google.maps.LatLng(40.694513, -73.985848),
		map: map,
		title: '5 MetroTech/Bidner Building'
	});		
	google.maps.event.addListener(marker_5Metro, 'click', function() {
		document.getElementById("6Metro").style.display="none";
		document.getElementById("5Metro").style.display="block";
		document.getElementById("Wunsch").style.display="none";
		document.getElementById("2Metro").style.display="none";
		document.getElementById("15Metro").style.display="none";
		document.getElementById("mapcontent").style.display="none";
		document.getElementById("Othmer").style.display="none";
		document.getElementById("5MetroImg").src="map_img/5MTC.jpg";
		document.getElementById("imagetitle5MetroImg").innerHTML="";
	});
			
	var marker_Wunsch = new google.maps.Marker({
		position: new google.maps.LatLng(40.694300, -73.984910),
		map: map,
		title: 'Wunsch Building'
	});
	google.maps.event.addListener(marker_Wunsch, 'click', function() {
		document.getElementById("6Metro").style.display="none";
		document.getElementById("5Metro").style.display="none";
		document.getElementById("Wunsch").style.display="block";
		document.getElementById("2Metro").style.display="none";
		document.getElementById("15Metro").style.display="none";
		document.getElementById("mapcontent").style.display="none";
		document.getElementById("Othmer").style.display="none";
	});
			
	var marker_2Metro = new google.maps.Marker({
		position: new google.maps.LatLng(40.693476, -73.985948),
		map: map,
		title: '2 MetroTech'
	});
	google.maps.event.addListener(marker_2Metro, 'click', function() {
		document.getElementById("6Metro").style.display="none";
		document.getElementById("5Metro").style.display="none";
		document.getElementById("Wunsch").style.display="none";
		document.getElementById("2Metro").style.display="block";
		document.getElementById("15Metro").style.display="none";
		document.getElementById("mapcontent").style.display="none";
		document.getElementById("Othmer").style.display="none";
	});
			
	var marker_15Metro = new google.maps.Marker({
		position: new google.maps.LatLng(40.693987, -73.985049),
		map: map,
		title: '15 MetroTech'
	});
	google.maps.event.addListener(marker_15Metro, 'click', function() {
		document.getElementById("6Metro").style.display="none";
		document.getElementById("5Metro").style.display="none";
		document.getElementById("Wunsch").style.display="none";
		document.getElementById("2Metro").style.display="none";
		document.getElementById("15Metro").style.display="block";
		document.getElementById("mapcontent").style.display="none";
		document.getElementById("Othmer").style.display="none";
		
	});
	
	var marker_Othmer = new google.maps.Marker({
		position: new google.maps.LatLng(40.695114, -73.986244),
		map: map,
		title: 'Othmer Building'
	});
	google.maps.event.addListener(marker_Othmer, 'click', function() {
		document.getElementById("Othmer").style.display="block";
		document.getElementById("6Metro").style.display="none";
		document.getElementById("5Metro").style.display="none";
		document.getElementById("Wunsch").style.display="none";
		document.getElementById("2Metro").style.display="none";
		document.getElementById("15Metro").style.display="none";
		document.getElementById("mapcontent").style.display="none";
		
	});
}
google.maps.event.addDomListener(window, 'load', initialize);

function checkMission(panelNo){
    document.getElementById("mission1").src = "css/image/general/missionstars/star_01.png";
}

function updateVideoMission(missionNo,panelNo){
    //alert("update mission");
    var idgen="panel"+panelNo+"mission"+missionNo;
    document.getElementById(idgen).src = "css/image/general/missionstars/star_01.png";
    var mission_arr = [3,3,2,2,2,6,3,2];
    if(missionNo==mission_arr[panelNo-1])
    {
    	//alert("hide show panelNo:"+panelNo+" mission:"+missionNo);
    	idcon="panel"+panelNo+"content"+panelNo;
    	
    	idquiz="panel"+panelNo+"quiz"+panelNo;
    	var compPanel;
    	compPanel=getCompPanelNo();
    	//alert("idcon:"+idcon+" idquiz:"+idquiz);
    	if(panelNo>compPanel && panelNo<=7)
    	{
    		document.getElementById(idcon).style.display="none";
    		document.getElementById(idquiz).style.display="block";
    	}
    	if(panelNo==8 && missionNo==mission_arr[panelNo-1]){
    		document.getElementById("next").style.display="block";
    	}
    	
    }
}

function getsectionID()
{
    var section=GetSectionNumber();
    //alert("section:"+section)
}

function updateMapMission(missionNo,panelNo)
{
    var idgen="panel"+panelNo+"mission"+missionNo;
    var mission_arr = [3,3,2,2,2,6,3,2];
    document.getElementById(idgen).src = "css/image/general/missionstars/star_01.png";
    //alert("check update map mission");	
    if(missionNo==mission_arr[panelNo-1])
    {
    	//alert("hide show");
    	idcon="panel"+panelNo+"content"+panelNo;
    	idquiz="panel"+panelNo+"quiz"+panelNo;
    	var compPanel;
    	compPanel=getCompPanelNo();
    	if(panelNo>compPanel && panelNo<=7)
    	{
    		document.getElementById(idcon).style.display="none";
    		document.getElementById(idquiz).style.display="block";
    	}
    	if(panelNo==8 && missionNo==mission_arr[panelNo-1]){
    		document.getElementById("next").style.display="block";
    	}
    }
}

    function validate(form,panelNo){
        var errors = [];
        
        
        if ( !checkRadioArray(form.container,panelNo) ) {
            errors[errors.length] = "You must choose an answer";
        }
        if (errors.length > 0) {
            reportErrors(errors,panelNo);
            return false;
        }
         
        return false;
    }
     
    function checkRadioArray(radioButtons,panelNo){
        for (var i=0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
            	
            	CheckAnswer(panelNo,i+1);
            	//document.getElementById("quizmessage1").innerHTML="Hello";
            	return true;
            }
        }
        return false;
    }
     
    function reportErrors(errors,pno){
        var msg = "";
        var numError;
        for (var i = 0; i<errors.length; i++) {
            numError = i + 1;
            msg += ""+errors[i];
        }
        var idq="quizmessage"+pno;
        document.getElementById(idq).innerHTML=msg;
    }

    function changeimage(did,sel)

    {
	    //alert("change image");
	    var ids=["5MetroImg","6MetroImg","WunschImg","2MetroImg","15MetroImg","OthmerImg"]
	    var buildingLst=[["GameLab","Pfizer","LC201","LC210","LC221","LC232","LC237","LC240","LC253","Library","FITL"],["Cafe","Regna","RH116","JAB474","JAB475","PTC"]];
	    var imageTitleList=[["GameLab","Pfizer Auditorium","Registrar's office-LC 201","AAC Reception-LC 210","Office of Student Activities & Resource Center-<br\>LC 221","Counseling and Wellness Services-LC 232","GS and HEOP Reception-LC 237","Student Affairs-LC 240","TRIO-LC 253","Library","FITL-LC 444"],["Cafeteria","Regna Lounge","RH 116","JAB 474","JAB 475","PTC"]];
	    did= did-1;
	    sel=sel-1;
	    var building=buildingLst[did][sel];
	    //alert(building);
	    var genpath="map_img/"+building+".jpg";
	    var imageTitleID="imagetitle"+ids[did];
	    //alert(genpath);
	    var didgen=ids[did];
	    //alert(didgen);
	    document.getElementById(didgen).src = genpath;
	    document.getElementById(imageTitleID).innerHTML =imageTitleList[did][sel];
	    mclosetime();

    }
    //takeQuiz1 reviewBack1
    //panel1content1
    function backtocontent(pno){
    	//alert("check");
    	var idcon="panel"+pno+"content"+pno;
    	var idquiz="panel"+pno+"quiz"+pno;
    	var idtakequiz="takeQuiz"+pno;
    	document.getElementById(idquiz).style.display="none";
    	document.getElementById(idcon).style.display="block";
    	document.getElementById(idtakequiz).style.display="block";
    }
    function backtoquiz(pno){
    	var idcon="panel"+pno+"content"+pno;
    	var idquiz="panel"+pno+"quiz"+pno;
    	
    	document.getElementById(idcon).style.display="none";
    	document.getElementById(idquiz).style.display="block";
    	
    }
    function advisorSearchJS(program, major){
		advisorSearch(program, major);
    	return false;
    }
    function regAppointmentDate(program, major){
    	//alert("reg1");
    	appointmentDate(program, major);
    	return false;
    }

var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 

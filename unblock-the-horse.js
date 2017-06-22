/*
//IMPORTANT NOTE: 
//    Google Sign In button only shows up on hosted website
//
//Website Work On All Browsers
//Except:
//    Reload on refresh does not work in Safari
//	  Language switcher does not show up in IE
//    Font size on iPhone and iPad sometimes shows up very small, but sometimes it works properly
//    Google sign in button sometimes shows up very small, but sometimes it works properly
*/
//Store Elements In Variables
var frame = document.getElementById("frame");//Game Frame
var bg = document.getElementById("bg");//Background Layer To Fix Browser Alignment Issues
var logIn = document.getElementById("logIn");//Log In Screen
var win = document.getElementById("win");//Win Screen 
var title = document.getElementById("title");//Game Title
var guest = document.getElementById("guest");//Continue As Guest Button
var google = document.getElementById("google");//Google Sign In Button
var section1 = document.getElementById("section1");//Menu Section
var section2 = document.getElementById("section2");//Display Section
var button1 = document.getElementById("button1");//Button1
var button2 = document.getElementById("button2");//Button2
var button3 = document.getElementById("button3");//Button3
var area1 = document.getElementById("area1");//Area1
var area2 = document.getElementById("area2");//Area2
var area3 = document.getElementById("area3");//Area3
var lang = document.getElementById("lang");//Language
var help = document.getElementById("help");//Instructions
var obj = document.getElementById("obj");//Objectives
var ins = document.getElementById("ins");//Instructions
var engButton = document.getElementById("engButton");//English Button
var freButton = document.getElementById("freButton");//French Button
var helpPic = document.getElementById("helpPic");//Instruction Picture
var previous = document.getElementById("previous");//Area3
var next = document.getElementById("next");//Area3
var levelCounter = document.getElementById("levelCounter");//Area3
var profilePhoto = document.getElementById("profile");//Profile Picture
var userName = document.getElementById("userName");//Profile Picture
window.onbeforeunload = function(){location.reload();}//Reload Window On Resize

//Set Elements' Sizes According To Window Size And Aspect Ratio
if (document.documentElement.clientWidth >= document.documentElement.clientHeight){

    //Landscape Mode
    var frameSize = document.documentElement.clientHeight;//Game Frame Size
    var marginX = (document.documentElement.clientWidth / 2) - (frameSize / 2);//Top And Bottom Margins For Game Frame
	var marginY = 0;//Left And Right Margins For Game Frame
	frame.style.height = frame.style.width = logIn.style.height = logIn.style.width = win.style.height = win.style.width = bg.style.height = bg.style.width = lang.style.height = lang.style.width = help.style.height = help.style.width = frameSize + "px";//Set Up Squre Frame
	
	//Display Sections Horizontally 
	logIn.style.display = section1.style.display = section2.style.display = "inline";
	frame.style.float = logIn.style.float = section1.style.float = section2.style.float = "left";
	
	//Set Elements' Sizes
	section1.style.width = marginX - 1 + "px";//-1 Prevents IE From Swiching Lines For No Reason Whatsoever
	section2.style.width = marginX + "px";
	section1.style.height = section2.style.height = frameSize + "px";
	
	//Set Menu Button Size And Alignment According To Aspect Ratio
	if(parseFloat(section1.style.height) > parseFloat(section1.style.width)){
		button1.style.display = button2.style.display = button3.style.display = "block";
		button1.style.height = parseFloat(section1.style.height) / 3 * 2 + "px";
		button2.style.height = button3.style.height = parseFloat(section1.style.height) / 6 + "px";
	} else{
		button1.style.display = button2.style.display = button3.style.display = "inline";
		button1.style.float = button2.style.float = button3.style.float = "left";
		button1.style.width = parseFloat(section1.style.width) + "px";
		button2.style.width = button3.style.width = parseFloat(section1.style.width) / 2 + "px";
		button1.style.height = button2.style.height = button3.style.height = parseFloat(section1.style.height) / 2 + "px";
	}//Set Menu Button Size And Alignment
	
	//Set Score Area Size And Alignment According To Aspect Ratio
	if(parseFloat(section1.style.height) > parseFloat(section1.style.width)){
		area1.style.width = area2.style.width = area3.style.width = parseFloat(section2.style.width) + "px";
		area1.style.height = area2.style.height = area3.style.height = parseFloat(section2.style.height) / 3 + "px";
	} else{
		area1.style.width = area2.style.width = area3.style.width = parseFloat(section2.style.width) / 2 + "px";
		area2.style.height = area3.style.height = parseFloat(section2.style.height) / 2 + "px";
		area1.style.height = parseFloat(section2.style.height) + "px";
	}//Set Score Area Size And Alignment According To Aspect Ratio
	
	//Set Buttons And Profile Picture Properties
	button1.style.fontSize =  parseFloat(button1.style.height) / 12 + "px";
    button2.style.fontSize = button3.style.fontSize = parseFloat(button2.style.height) / 3 + "px";
	button1.style.lineHeight = parseFloat(button1.style.height) / 5 + "px";
    button2.style.lineHeight = button3.style.lineHeight = parseFloat(button2.style.height) + "px";
    profilePhoto.style.height = profilePhoto.style.width = parseFloat(marginX) * 0.8 + "px";
    profilePhoto.style.marginTop = parseFloat(marginX) * 0.1 - 3 + "px";
	levelCounter.style.fontSize = parseFloat(levelCounter.style.width) / 6 + "px";
    area2.style.fontSize = parseFloat(area2.style.height) / 8 + "px";
    area3.style.fontSize = parseFloat(area3.style.width) / 5 + "px";
} else{

    //Vertical Mode
	var frameSize = document.documentElement.clientWidth;//Game Frame Size
	var marginX = 0;//Top And Bottom Margins For Game Frame
	var marginY = (document.documentElement.clientHeight / 2) - (frameSize / 2);//Left And Right Margins For Game Frame
	frame.style.height = frame.style.width = logIn.style.height = logIn.style.width = win.style.height = win.style.width = bg.style.height = bg.style.width = lang.style.height = lang.style.width = help.style.height = help.style.width = frameSize + "px";//Set Up Squre Frame
	
	//Display Sections Vertically
	logIn.style.display = section1.style.display = section2.style.display = "block";
	
	//Set Elements' Sizes
	section1.style.width = section2.style.width = frameSize + "px";
	section1.style.height = section2.style.height = marginY + "px";
	
	//Set Menu Button Size And Alignment According To Aspect Ratio
	if(parseFloat(section1.style.width) > parseFloat(section1.style.height) * 6){
		button1.style.display = button2.style.display = button3.style.display = "inline";
		button1.style.float = button2.style.float = button3.style.float = "left";
		button1.style.width = parseFloat(section1.style.width) / 2 + "px";
		button2.style.width = button3.style.width = parseFloat(section1.style.width) / 4 + "px";
		button1.style.height = button2.style.height = button3.style.height = parseFloat(section1.style.height) + "px";
	} else if(parseFloat(section1.style.width) > parseFloat(section1.style.height) * 2.5){
		button1.style.display = button2.style.display = button3.style.display = "inline";
		button1.style.float = button2.style.float = button3.style.float = "left";
		button1.style.width = parseFloat(section1.style.width) + "px";
		button2.style.width = button3.style.width = parseFloat(section1.style.width) / 2 + "px";
		button1.style.height = parseFloat(section1.style.height) / 3 * 2 + "px";
		button2.style.height = button3.style.height = parseFloat(section1.style.height) / 3 + "px";
	} else{
		button1.style.display = button2.style.display = button3.style.display = "block";
		button1.style.height = parseFloat(section1.style.height) / 2 + "px";
		button2.style.height = button3.style.height = parseFloat(section1.style.height) / 4 + "px";
	}//Set Menu Button Size And Alignment
	
	//Set Score Area Size And Alignment According To Aspect Ratio
	if(parseFloat(section1.style.width) > parseFloat(section1.style.height) * 5){
		area1.style.width = area2.style.width = area3.style.width = parseFloat(section2.style.width) / 3 + "px";
		area1.style.height = area2.style.height = area3.style.height = parseFloat(section2.style.height) + "px";
	} else{
		area1.style.width = area2.style.width = area3.style.width = parseFloat(section2.style.width) / 2 + "px";
		area2.style.height = area3.style.height = parseFloat(section2.style.height) / 2 + "px";
		area1.style.height = parseFloat(section2.style.height) + "px";
	}//Set Score Area Size And Alignment According To Aspect Ratio
	
	//Set Buttons And Profile Picture Properties
	button1.style.fontSize =  parseFloat(button1.style.height) / 3 + "px";
    button2.style.fontSize = button3.style.fontSize = parseFloat(button2.style.height) / 3 + "px";
    button1.style.lineHeight = parseFloat(button1.style.height) + "px";
    button2.style.lineHeight = button3.style.lineHeight = parseFloat(button2.style.height) + "px";
    profilePhoto.style.position = "absolute";
    profilePhoto.style.height = profilePhoto.style.width = parseFloat(button1.style.height) * 0.8 + "px";
    profilePhoto.style.left = profilePhoto.style.top = parseFloat(button1.style.height) * 0.1 - 3 + "px";
	levelCounter.style.fontSize = parseFloat(levelCounter.style.height) / 5 + "px";
    area2.style.fontSize = parseFloat(area2.style.height) / 5 + "px";
    area3.style.fontSize = parseFloat(area3.style.height) / 5 + "px";
}//Set Elements' Sizes According To Window Size And Aspect Ratio

//Create New Variables
var level = 0;//Stores Current Level
var blockArray = [];//Store All Blocks For Availability Update
var units = [];//Grids On The Game Frame For Blocks To Move
var unit = frameSize / 6;//One Unit Equals 6th Of The Game Frame
var snap = new Audio("images/wood.mp3");//Snapping Sound Of Wood Block
var timer;//For Count Up Clock
var moves;//For Block Moves
var langCounter = 0;//Lang Activity Counter
var helpCounter = 0;//Help Activity Counter
var lan = 0;//Language Identifier

//Set Universal Properties
frame.style.borderRadius = logIn.style.borderRadius = win.style.borderRadius = bg.style.borderRadius = button2.style.borderRadius = button3.style.borderRadius = area1.style.borderRadius = area2.style.borderRadius = area3.style.borderRadius = previous.style.borderRadius = next.style.borderRadius = lang.style.borderRadius = help.style.borderRadius = unit / 8 + "px";//Border Radius
win.style.left = marginX + "px";
win.style.top = marginY + "px";
bg.style.left = marginX + "px";
bg.style.top = marginY + "px";
lang.style.left = marginX + "px";
lang.style.top = marginY + "px";
help.style.left = marginX + "px";
help.style.top = marginY + "px";
title.style.top = 0.5 * unit + "px";
guest.style.top = 2 * unit + "px";
google.style.top = 2.5 * unit + "px";
engButton.style.top = 1.5 * unit + "px";
freButton.style.top = 2.5 * unit + "px";
guest.style.width = google.style.width = 3 * unit + "px";
engButton.style.width = freButton.style.width = 3 * unit + "px";
engButton.style.height = freButton.style.height = unit + "px";
title.style.height = guest.style.height = google.style.height = unit + "px";
win.style.fontSize = frameSize / 12 + "px";
title.style.fontSize = parseFloat(title.style.height) / 1.8 + "px";
guest.style.fontSize = parseFloat(guest.style.height) / 3.5 + "px";
engButton.style.fontSize = freButton.style.fontSize = parseFloat(engButton.style.height) / 3.5 + "px";
win.style.lineHeight = frameSize + "px";
help.style.fontSize = frameSize / 30 + "px";
help.style.lineHeight = frameSize / 20 + "px";
helpPic.style.width = frameSize * 0.6 + "px";
helpPic.style.marginTop = frameSize / 10 + "px";
title.style.lineHeight = parseFloat(title.style.height) + "px";
guest.style.lineHeight = parseFloat(guest.style.height) + "px";
area1.style.lineHeight = parseFloat(area1.style.height) + "px";
area2.style.lineHeight = parseFloat(area2.style.height) + "px";
area3.style.lineHeight = parseFloat(area3.style.height) + "px";
engButton.style.lineHeight = freButton.style.lineHeight = parseFloat(engButton.style.height) + "px";
area3.style.backgroundSize = parseFloat(area3.style.height) < parseFloat(area3.style.width) ? parseFloat(area3.style.height) * 0.8 + "px" : parseFloat(area3.style.width) * 0.8 + "px";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Restart Button Animation For Touch Screen
area3.ontouchstart = function() {
	area3.style.color = "rgba(0, 0, 0, 0)";
	area3.style.backgroundColor = "#FFDEB3";
	area3.style.backgroundImage = "url(images/restart.png)";
}//Restart Button Animation For Touch Screen

//Restart Game Function For Touch Screen
area3.ontouchend = function () {
    area3.style.backgroundImage = "none";
	area3.style.backgroundColor = "#DBBC91";
	area3.style.color = "white";
    restart();
}//Restart Game

//Restart Game Function
function restart() {
	level--;
	game();
}//Restart Game

//Sign In To Google Account       Code from Google developers site
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();//Get User's Info
    profilePhoto.src = profile.getImageUrl();//Get User's Profile Picture
    button1.appendChild(profilePhoto);//Update The Photo
    userName.innerHTML = profile.getName();//Get User's Name
    button1.appendChild(userName);//Update User Name
    hideLogIn();
}//Sign In To Google Account

//Continue As Guest Button
guest.ontouchend = function () {hideLogIn();}//hideLogIn
function hideLogIn() {
	if (window.innerWidth >= window.innerHeight){
	    frame.style.display = "inline";
	} else{
	    frame.style.display = "block";
	}//Set Frame Display
	logIn.style.opacity = 0;
	setTimeout(function(){
		logIn.style.display = "none";//Hide Log In Screen
	}, 300);
	button1.style.opacity = bg.style.opacity = 1;
	setTimeout(function(){
		button2.style.opacity = button3.style.opacity = area1.style.opacity = area2.style.opacity = area3.style.opacity = 1;//Fade In Elements
	}, 500);
	document.ontouchstart = function(e){e.preventDefault();}//Prevents Bouncing
	game();//Play Game
}//hideLogIn

//Go To Next Level When Wins
function nextLevel() {
	win.style.opacity = 1;
	setTimeout(function(){
		game();
	}, 300);
	setTimeout(function(){
		win.style.opacity = 0;
	}, 800);
}//Go To Next Level When Wins

//Sign Out Function
profilePhoto.ontouchend = function () {signOut();}//Sign Out
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
	location.reload();
}//Google Sign Out

//Previous and Next Button Touch Screen Animation
previous.ontouchstart = function () {previous.style.opacity = "1";}
previous.ontouchend = function () {
	previous.style.opacity = "0.2";
	previousLevel();
}//Previous and Next Button Touch Screen Animation
next.ontouchstart = function () {next.style.opacity = "1";}
next.ontouchend = function () {
	next.style.opacity = "0.2";
	game();
}//Previous and Next Button Touch Screen Animation

//Go To Previous Level
function previousLevel() {
	if(level != 1){
	    level-=2;
	    game();
	}//If It's Not The First Level
}//Go To Previous Level

//Lang Button For Touch Screen
button2.ontouchstart = function () {button2.style.boxShadow = "inset 0px 0px 0px 3px #eeeeee";}
button2.ontouchend = function () {
    button2.style.boxShadow = "inset 0px 0px 0px 3px #2F91E8";
	language();
}//Lang Button For Touch Screen

//Help Button For Touch Screen
button3.ontouchstart = function () {button3.style.boxShadow = "inset 0px 0px 0px 3px #eeeeee";}
button3.ontouchend = function () {
    button3.style.boxShadow = "inset 0px 0px 0px 3px #A13024";
	instructions();
}//Help Button For Touch Screen

//Language Switching Screen Opener
function language() {
    if(helpCounter % 2 == 0){
        if(langCounter % 2 == 0){
            lang.style.display = "inline";
			button2.style.backgroundColor = "#56C8FF";
			setTimeout(function(){
		        lang.style.opacity = 1;
	        }, 0);
	    	langCounter++;
	    } else{
		    lang.style.opacity = 0;
			button2.style.backgroundColor = "#2F91E8";
			setTimeout(function(){
		        lang.style.display = "none";
	        }, 200);
	    	langCounter++;
	    }//Close On Second Click
	}//Make Sure Help Is Not Active
}//Language Switching Screen Opener

//Instructions Opener
function instructions() {
    if(langCounter % 2 == 0){
        if(helpCounter % 2 == 0){
            help.style.display = "inline";
			button3.style.backgroundColor = "#E54434";
			setTimeout(function(){
		        help.style.opacity = 1;
	        }, 0);
	    	helpCounter++;
	    } else{
		    help.style.opacity = 0;
			button3.style.backgroundColor = "#A13024";
			setTimeout(function(){
		        help.style.display = "none";
	        }, 200);
	    	helpCounter++;
	    }//Close On Second Click
	}//Make Sure Lang Is Not Active
}//Instructions Opener

//Change Language
engButton.ontouchend = function(){
    english();
}
freButton.ontouchend = function(){
    french();
}
function english() {
    lan = 0;//Change Lan
    button2.innerHTML = "ENG";
	button3.innerHTML = "HELP";
	levelCounter.innerHTML = "LEVEL " + level;
	area2.innerHTML = moves + " MOVES";
	obj.innerHTML = "Objective: Move the horse to the right side";
	ins.innerHTML = "Click and drag to move the blocks. Touch and move on mobile devices. Blocks can only move along their own orientation, the horse only moves horizontally.";
	lang.style.opacity = 0;
	button2.style.backgroundColor = "#2F91E8";
	setTimeout(function(){
		lang.style.display = "none";
	}, 200);
	langCounter++;
}//ENG

function french() {
    lan = 1;//Change Lan
    button2.innerHTML = "FRE";
	button3.innerHTML = "AIDER";
	levelCounter.innerHTML = "NIVEAU " + level;
	area2.innerHTML = moves + " PAS";
	obj.innerHTML = "Objectif: Déplacez le cheval sur le côté droit";
	ins.innerHTML = "Cliquez et faites glisser pour déplacer les blocs. Touchez et déplacez sur les appareils mobiles. Blocs ne peuvent se déplacer le long de leur propre orientation, le cheval se déplace seulement horizontalement.";
	lang.style.opacity = 0;
	button2.style.backgroundColor = "#2F91E8";
	setTimeout(function(){
		lang.style.display = "none";
	}, 200);
	langCounter++;
}//FRE


//Set Up Size For Each Block
function drawBlock(X, Y, blockVertical, blockOfTwo, horse){
	
	//Create Block
	var block = document.createElement("div");//Create Element
	var blockX = X * unit + marginX;//Set blockX Location
	var blockY = Y * unit + marginY;//Set blockY Location
	block.style.backgroundSize = "cover";//Background Image Size
	block.style.borderRadius = unit / 10 + "px";//Border Radius
	block.style.boxShadow = "inset 0px 0px 0px 2px #606060";//Inset Border
	block.style.position = "absolute";//Set Absolute Position
	block.style.left = blockX + "px";//Assign blockX
	block.style.top = blockY + "px";//Assign blockY
	block.title = "Click And Drag To Move";//Set Hover Text
	
	//Set Cursor Style
	if(blockVertical == true){
		block.style.cursor = "n-resize";//Set Vertical Style
	} else{
        block.style.cursor = "e-resize";//Set Horizontal Style
	}//Set Cursor Style
	
	//Assign Texture
	if(horse == true){
		block.style.backgroundImage = "url(images/horse.jpg)";
	} else{
		block.style.backgroundImage = "url(images/wood.jpg)";
	}//Get Texture
	
	//Set Block Size According To Block's Orientation
	if(blockVertical == true && blockOfTwo == true){
		block.style.width = (1 * unit) + "px";
	    block.style.height = (2 * unit) + "px";
	} else if(blockVertical == true && blockOfTwo == false){
		block.style.width = (1 * unit) + "px";
	    block.style.height = (3 * unit) + "px";
	} else if(blockVertical == false && blockOfTwo == true){
		block.style.width = (2 * unit) + "px";
	    block.style.height = (1 * unit) + "px";
	} else if(blockVertical == false && blockOfTwo == false){
		block.style.width = (3 * unit) + "px";
	    block.style.height = (1 * unit) + "px";
	} else{
		console.log("Block Size Error");//Error Message
	}//Set Block Size
	
	//Append Block To Game Frame
    frame.appendChild(block);//Append Child
	
	//Update Game Frame Units' Availability
    updateAvailability(block);
	
	moveBlock(block, blockX, blockY);//Add Mouse Event To Move The Block
	return block;//Return Element To Array
}//drawBlock

//Click And Drag Blocks
function moveBlock(block, blockX, blockY){

	//On Mouse Down
	block.onmousedown = function(e) {
		var self = this;
		var startX = e.pageX;//Record Start Position
		var startY = e.pageY;//Record Start Position
		var newX = blockX;//Set Up Variable For New Position
		var newY = blockY;//Set Up Variable For New Position
		var limits = getAvailableUnits(block);//Get Moving Limit
		var blockOfTwo = (parseFloat(block.style.height) / parseFloat(block.style.width) > 2.5 || parseFloat(block.style.height) / parseFloat(block.style.width) < 0.4) ? false : true;//Update Block's Size
		block.style.boxShadow = "inset 0px 0px 0px 2px #7BBD8B";
		
		document.onmousemove = function(e) {
	        newX = blockX + e.pageX - startX;//Get Current Position
			newY = blockY + e.pageY - startY;//Get Current Position
			
			//Keep Block X In The Frame
			if(newX < marginX){
				newX = marginX;
			} else if (newX > (4 * unit + marginX) && blockOfTwo == true){
				newX = 4 * unit + marginX;
			} else if (newX > (3 * unit + marginX) && blockOfTwo == false){
				newX = 3 * unit + marginX;
			}//Keep Block X In The Frame
			
			//Stop X From Negative Overlapping
			if((newX - blockX) < (limits [0] * unit)){
				newX = limits [0] * unit + blockX;
			}//Stop X From Negative Overlapping
			
			//Stop X From Positive Overlapping
			if((newX - blockX) > (limits [1] * unit)){
				newX = limits [1] * unit + blockX;
			}//Stop X From Positive Overlapping
			
			//Keep Block Y In The Frame
			if(newY < marginY){
				newY = marginY;
			} else if (newY > (4 * unit + marginY) && blockOfTwo == true){
				newY = 4 * unit + marginY;
			} else if (newY > (3 * unit + marginY) && blockOfTwo == false){
				newY = 3 * unit + marginY;
			}//Keep Block Y In The Frame
			
			//Stop Y From Negative Overlapping
			if((newY - blockY) < (limits [0] * unit)){
				newY = limits [0] * unit + blockY;
			}//Stop Y From Negative Overlapping
			
			//Stop Y From Positive Overlapping
			if((newY - blockY) > (limits [1] * unit)){
				newY = limits [1] * unit + blockY;
			}//Stop Y From Positive Overlapping
			
			//Update Block's Position
			if(parseFloat(block.style.height) < parseFloat(block.style.width)){
			    self.style.left = newX + "px"; 
			} else{
			    self.style.top = newY + "px"; 
			}//Update Block's Position
		}//Mouse Move
		
		//On Mouse Up
		document.onmouseup = function(e) {
			
			//Keep Block X In The Frame
			if(newX < marginX){
				newX = marginX;
			} else if (newX > (4 * unit + marginX) && blockOfTwo == true){
				newX = 4 * unit + marginX;
			} else if (newX > (3 * unit + marginX) && blockOfTwo == false){
				newX = 3 * unit + marginX;
			}//Keep Block X In The Frame
			
			//Keep Block Y In The Frame
			if(newY < marginY){
				newY = marginY;
			} else if (newY > (4 * unit + marginY) && blockOfTwo == true){
				newY = 4 * unit + marginY;
			} else if (newY > (3 * unit + marginY) && blockOfTwo == false){
				newY = 3 * unit + marginY;
			}//Keep Block Y In The Frame
			
			//Get Grid Position
			newX = snapToGrid(newX - marginX) + marginX;
			newY = snapToGrid(newY - marginY) + marginY;
			
			//Snap Blocks To Grids
			if(parseFloat(block.style.height) < parseFloat(block.style.width)){
			    self.style.left = newX + "px";//Snap blockX
			} else{
			    self.style.top = newY + "px";//Snap blockY
			}//Snap Blocks To Grids
			
			//Update Moves & Play Wood Block Sound
			if ((Math.round(newX / unit)) != (Math.round(blockX / unit)) || (Math.round(newY / unit)) != (Math.round(blockY / unit))){
				moves++;
				snap.play();//Play Sound After Snapping To Grid
				if(moves == 1){
				    if(lan == 0){
	   			         area2.innerHTML = moves + " MOVE";
				    } else if(lan == 1){
	   			         area2.innerHTML = moves + " PAS";
				    }//Level Counter
				} else{
				    if(lan == 0){
	   			         area2.innerHTML = moves + " MOVES";
				    } else if(lan == 1){
	   			         area2.innerHTML = moves + " PAS";
				    }//Level Counter
				}//MOVE(S)
			}//Update Moves & Play Wood Block Sound
			
			//Update Block's Position
			blockX = parseFloat(block.style.left);//Update blockX Position
			blockY = parseFloat(block.style.top);//Update blockY Position
			block.style.boxShadow = "inset 0px 0px 0px 2px #606060";
			
			//Go To Next Level
			if(parseFloat(blockArray [0].style.left) > 3 * unit + marginX){nextLevel();}//Next Level
			
			//Reset Availability
			for (var i = 0; i < 36; i++){
            	units [i] = true;
            }//Reset Availability
			
			//Update Availability
			for (var i = 0; i < blockArray.length; i++){
            	updateAvailability(blockArray [i]);
            }//Update Availability
			
			document.onmousemove = null;//End Mouse Event
		}//Mouse Up
	}//Mouse Down
	
	//Same Functions For Touch Screen Devices
	block.ontouchstart = function(e) {
		var self = this;
		var startX = e.pageX;//Record Start Position
		var startY = e.pageY;//Record Start Position
		var newX = blockX;//Set Up Variable For New Position
		var newY = blockY;//Set Up Variable For New Position
		var limits = getAvailableUnits(block);//Get Moving Limit
		var blockOfTwo = (parseFloat(block.style.height) / parseFloat(block.style.width) > 2.5 || parseFloat(block.style.height) / parseFloat(block.style.width) < 0.4) ? false : true;//Update Block's Size
		block.style.boxShadow = "inset 0px 0px 0px 2px #7BBD8B";
		document.ontouchmove = function(e) {
	        newX = blockX + e.pageX - startX;//Get Current Position
			newY = blockY + e.pageY - startY;//Get Current Position
			
			//Keep Block X In The Frame
			if(newX < marginX){
				newX = marginX;
			} else if (newX > (4 * unit + marginX) && blockOfTwo == true){
				newX = 4 * unit + marginX;
			} else if (newX > (3 * unit + marginX) && blockOfTwo == false){
				newX = 3 * unit + marginX;
			}//Keep Block X In The Frame
			
			//Stop X From Negative Overlapping
			if((newX - blockX) < (limits [0] * unit)){
				newX = limits [0] * unit + blockX;
			}//Stop X From Negative Overlapping
			
			//Stop X From Positive Overlapping
			if((newX - blockX) > (limits [1] * unit)){
				newX = limits [1] * unit + blockX;
			}//Stop X From Positive Overlapping
			
			//Keep Block Y In The Frame
			if(newY < marginY){
				newY = marginY;
			} else if (newY > (4 * unit + marginY) && blockOfTwo == true){
				newY = 4 * unit + marginY;
			} else if (newY > (3 * unit + marginY) && blockOfTwo == false){
				newY = 3 * unit + marginY;
			}//Keep Block Y In The Frame
			
			//Stop Y From Negative Overlapping
			if((newY - blockY) < (limits [0] * unit)){
				newY = limits [0] * unit + blockY;
			}//Stop Y From Negative Overlapping
			
			//Stop Y From Positive Overlapping
			if((newY - blockY) > (limits [1] * unit)){
				newY = limits [1] * unit + blockY;
			}//Stop Y From Positive Overlapping
			
			//Update Block's Position
			if(parseFloat(block.style.height) < parseFloat(block.style.width)){
			    self.style.left = newX + "px"; 
			} else{
			    self.style.top = newY + "px"; 
			}//Update Block's Position
		}//Mouse Move
		
		//On Mouse Up
		document.ontouchend = function(e) {
			
			//Keep Block X In The Frame
			if(newX < marginX){
				newX = marginX;
			} else if (newX > (4 * unit + marginX) && blockOfTwo == true){
				newX = 4 * unit + marginX;
			} else if (newX > (3 * unit + marginX) && blockOfTwo == false){
				newX = 3 * unit + marginX;
			}//Keep Block X In The Frame
			
			//Keep Block Y In The Frame
			if(newY < marginY){
				newY = marginY;
			} else if (newY > (4 * unit + marginY) && blockOfTwo == true){
				newY = 4 * unit + marginY;
			} else if (newY > (3 * unit + marginY) && blockOfTwo == false){
				newY = 3 * unit + marginY;
			}//Keep Block Y In The Frame
			
			//Get Grid Position
			newX = snapToGrid(newX - marginX) + marginX;
			newY = snapToGrid(newY - marginY) + marginY;
			
			//Snap Blocks To Grids
			if(parseFloat(block.style.height) < parseFloat(block.style.width)){
			    self.style.left = newX + "px";//Snap blockX
			} else{
			    self.style.top = newY + "px";//Snap blockY
			}//Snap Blocks To Grids
			
			//Update Moves & Play Wood Block Sound
			if ((Math.round(newX / unit)) != (Math.round(blockX / unit)) || (Math.round(newY / unit)) != (Math.round(blockY / unit))){
				moves++;
				snap.play();//Play Sound After Snapping To Grid
				if(moves == 1){
					area2.innerHTML = moves + " MOVE";
				} else{
				    area2.innerHTML = moves + " MOVES";
				}//MOVE(S)
			}//Update Moves & Play Wood Block Sound
			
			//Update Block's Position
			blockX = parseFloat(block.style.left);//Update blockX Position
			blockY = parseFloat(block.style.top);//Update blockY Position
			block.style.boxShadow = "inset 0px 0px 0px 2px #606060";
			
			//Go To Next Level
			if(parseFloat(blockArray [0].style.left) > 3 * unit + marginX){nextLevel();}//Next Level
			
			//Reset Availability
			for (var i = 0; i < 36; i++){
            	units [i] = true;
            }//Reset Availability
			
			//Update Availability
			for (var i = 0; i < blockArray.length; i++){
            	updateAvailability(blockArray [i]);
            }//Update Availability
			
			document.ontouchmove = null;//End Mouse Event
		}//Mouse Up
	}//Mouse Down
	block.ondragstart = function() {return false}//Prevents Dragging Error
}//moveBlock

//Snap Blocks To Grids
function snapToGrid(d){
	if((d % unit) >= (unit / 2)){
		return (Math.ceil(d / unit) * unit);//Snap Up Or Left
	} else{
		return (Math.floor(d / unit) * unit);//Snap Down Or Right
	}//Snap Blocks To Grids
}//snapToGrid

//Calculate Whichs Grids Are Available For Blocks To Move
function updateAvailability(block){
	
	//Update Block's Properties
	var X = Math.round((parseFloat(block.style.left) - marginX) / unit);//Update blockX Location
	var Y = Math.round((parseFloat(block.style.top) - marginY) / unit);//Update blockY Location
	var blockVertical = (parseFloat(block.style.height) > parseFloat(block.style.width)) ? true : false;//Update Block's Orientation
	var blockOfTwo = (parseFloat(block.style.height) / parseFloat(block.style.width) > 2.5 || parseFloat(block.style.height) / parseFloat(block.style.width) < 0.4) ? false : true;//Update Block's Size
	
	//Update Availability
	if(blockVertical == true && blockOfTwo == true){
		units [6 * Y + X] = false;
		units [6 * Y + X + 6] = false;
	} else if(blockVertical == true && blockOfTwo == false){
		units [6 * Y + X] = false;
		units [6 * Y + X + 6] = false;
		units [6 * Y + X + 12] = false;
	} else if(blockVertical == false && blockOfTwo == true){
		units [6 * Y + X] = false;
		units [6 * Y + X + 1] = false;
	} else if(blockVertical == false && blockOfTwo == false){
		units [6 * Y + X] = false;
		units [6 * Y + X + 1] = false;
		units [6 * Y + X + 2] = false;
	} else{
		console.log("Error");//Error Message
	}//Update Availability
}//updateAvailability

//Calculate How Much Can Each Block Move Without Overlapping Another Block
function getAvailableUnits(block) {
	var negative;//Move Up Or Left
	var positive;//Move Down Or Right
	
	//Update Block's Properties
	var X = Math.round((parseFloat(block.style.left) - marginX) / unit);//Update Block's Location
	var Y = Math.round((parseFloat(block.style.top) - marginY) / unit);//Update Block's Location
	var blockVertical = (parseFloat(block.style.height) > parseFloat(block.style.width)) ? true : false;//Update Block's Orientation
	var blockOfTwo = (parseFloat(block.style.height) / parseFloat(block.style.width) > 2.5 || parseFloat(block.style.height) / parseFloat(block.style.width) < 0.4) ? false : true;//Update Block's Size
	
	//Get Available Units
	if(blockVertical == true && blockOfTwo == true){
		if(units [6 * Y + X - 6] == true && units [6 * Y + X - 12] == true && units [6 * Y + X - 18] == true && units [6 * Y + X - 24] == true){
			negative = -4;
		} else if(units [6 * Y + X - 6] == true && units [6 * Y + X - 12] == true && units [6 * Y + X - 18] == true){
			negative = -3;
		} else if(units [6 * Y + X - 6] == true && units [6 * Y + X - 12] == true){
			negative = -2;
		} else if(units [6 * Y + X - 6] == true){
			negative = -1;
		} else{
			negative = 0;
		}//Check Negative Units Availability
		if(units [6 * Y + X + 12] == true && units [6 * Y + X + 18] == true && units [6 * Y + X + 24] == true && units [6 * Y + X + 30] == true){
			positive = 4;
		} else if(units [6 * Y + X + 12] == true && units [6 * Y + X + 18] == true && units [6 * Y + X + 24] == true){
			positive = 3;
		} else if(units [6 * Y + X + 12] == true && units [6 * Y + X + 18] == true){
			positive = 2;
		} else if(units [6 * Y + X + 12] == true){
			positive = 1;
		} else{
			positive = 0;
		}//Check Positive Units Availability
	} else if(blockVertical == true && blockOfTwo == false){
		if(units [6 * Y + X - 6] == true && units [6 * Y + X - 12] == true && units [6 * Y + X - 18] == true){
			negative = -3;
		} else if(units [6 * Y + X - 6] == true && units [6 * Y + X - 12] == true){
			negative = -2;
		} else if(units [6 * Y + X - 6] == true){
			negative = -1;
		} else{
			negative = 0;
		}//Check Negative Units Availability
		if(units [6 * Y + X + 18] == true && units [6 * Y + X + 24] == true && units [6 * Y + X + 30] == true){
			positive = 3;
		} else if(units [6 * Y + X + 18] == true && units [6 * Y + X + 24] == true){
			positive = 2;
		} else if(units [6 * Y + X + 18] == true){
			positive = 1;
		} else{
			positive = 0;
		}//Check Positive Units Availability
	} else if(blockVertical == false && blockOfTwo == true){
		if(units [6 * Y + X - 1] == true && units [6 * Y + X - 2] == true && units [6 * Y + X - 3] == true && units [6 * Y + X - 4] == true){
			negative = -4;
		} else if(units [6 * Y + X - 1] == true && units [6 * Y + X - 2] == true && units [6 * Y + X - 3] == true){
			negative = -3;
		} else if(units [6 * Y + X - 1] == true && units [6 * Y + X - 2] == true){
			negative = -2;
		} else if(units [6 * Y + X - 1] == true){
			negative = -1;
		} else{
			negative = 0;
		}//Check Negative Units Availability
		if(units [6 * Y + X + 2] == true && units [6 * Y + X + 3] == true && units [6 * Y + X + 4] == true && units [6 * Y + X + 5] == true){
			positive = 4;
		} else if(units [6 * Y + X + 2] == true && units [6 * Y + X + 3] == true && units [6 * Y + X + 4] == true){
			positive = 3;
		} else if(units [6 * Y + X + 2] == true && units [6 * Y + X + 3] == true){
			positive = 2;
		} else if(units [6 * Y + X + 2] == true){
			positive = 1;
		} else{
			positive = 0;
		}//Check Positive Units Availability
	} else if(blockVertical == false && blockOfTwo == false){
		if(units [6 * Y + X - 1] == true && units [6 * Y + X - 2] == true && units [6 * Y + X - 3] == true){
			negative = -3;
		} else if(units [6 * Y + X - 1] == true && units [6 * Y + X - 2] == true){
			negative = -2;
		} else if(units [6 * Y + X - 1] == true){
			negative = -1;
		} else{
			negative = 0;
		}//Check Negative Units Availability
		if(units [6 * Y + X + 3] == true && units [6 * Y + X + 4] == true && units [6 * Y + X + 5] == true){
			positive = 3;
		} else if(units [6 * Y + X + 3] == true && units [6 * Y + X + 4] == true){
			positive = 2;
		} else if(units [6 * Y + X + 3] == true){
			positive = 1;
		} else{
			positive = 0;
		}//Check Positive Units Availability
	} else{
		console.log("Get Availability Error");//Error Message
	}//Get Available Units
	
	console.log(negative, positive);//Output Availability To Console For Debugging
	return [negative, positive];//Return Value To moveBlock
}//getAvailableUnits

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Draw Blocks
function game(){
	
	//Reset Timer
	clearInterval (timer);
	timer = null;
	document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    var sec = 0;
    timer = setInterval( function(){
        document.getElementById("seconds").innerHTML = pad(++sec % 60);
        document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
    }, 1000);
	function pad ( num ) { return num > 9 ? num : "0" + num; }
	//Reset Timer
	
	//Reset Availability
    for (var i = 0; i < 36; i++){
        units [i] = true;
    }//Reset Availability
	
    level++;//Update Level
	moves = 0;//Reset Moves
	if(lan == 0){
	    area2.innerHTML = moves + " MOVES";
	} else if(lan == 1){
	    area2.innerHTML = moves + " PAS";
	}//Level Counter
	
	//Clear Frame
	for (var i = 0; i < blockArray.length; i++){
        frame.removeChild(blockArray [i]);
    }//Clear Frame
	blockArray = [];//Clear Variable
	if(lan == 0){
	    levelCounter.innerHTML = "LEVEL " + level;
	} else if(lan == 1){
	    levelCounter.innerHTML = "NIVEAU " + level;
	}//Level Counter
	
	//Draw New Block According To Level
	switch (level){
		
		////////////////////drawBlock(X, Y, Vertical, Double, Horse);
		case 1:
		    blockArray.push(drawBlock(0, 2, false, true, true));
	        blockArray.push(drawBlock(0, 0, false, false, false));
	        blockArray.push(drawBlock(2, 1, true, false, false));
	        blockArray.push(drawBlock(0, 3, true, true, false));
	        blockArray.push(drawBlock(0, 5, false, false, false));
	        blockArray.push(drawBlock(5, 0, true, false, false));
	        blockArray.push(drawBlock(4, 3, false, true, false));
	        blockArray.push(drawBlock(4, 4, true, true, false));
			break;
			
		case 2:
		    blockArray.push(drawBlock(0, 2, false, true, true));
			blockArray.push(drawBlock(0, 3, false, true, false));
			blockArray.push(drawBlock(1, 4, true, true, false));
			blockArray.push(drawBlock(2, 1, true, true, false));
			blockArray.push(drawBlock(2, 3, true, true, false));
			blockArray.push(drawBlock(2, 5, false, true, false));
			blockArray.push(drawBlock(3, 1, true, false, false));
			blockArray.push(drawBlock(4, 1, true, false, false));
			break;
			
		case 3:
		    blockArray.push(drawBlock(0, 2, false, true, true));
			blockArray.push(drawBlock(0, 0, true, true, false));
			blockArray.push(drawBlock(0, 4, false, false, false));
			blockArray.push(drawBlock(1, 0, false, true, false));
			blockArray.push(drawBlock(2, 1, true, true, false));
			blockArray.push(drawBlock(3, 0, false, true, false));
			blockArray.push(drawBlock(3, 2, true, false, false));
			blockArray.push(drawBlock(4, 2, true, false, false));
			break;

		case 4:
		    blockArray.push(drawBlock(0, 2, false, true, true));
			blockArray.push(drawBlock(0, 3, false, true, false));
			blockArray.push(drawBlock(1, 4, true, true, false));
			blockArray.push(drawBlock(2, 4, false, true, false));
			blockArray.push(drawBlock(2, 5, false, true, false));
			blockArray.push(drawBlock(3, 1, true, false, false));
			blockArray.push(drawBlock(4, 1, true, false, false));
			blockArray.push(drawBlock(5, 1, true, true, false));
			break;

		case 5:
		    blockArray.push(drawBlock(0, 2, false, true, true));
			blockArray.push(drawBlock(1, 3, true, true, false));
			blockArray.push(drawBlock(2, 0, true, false, false));
			blockArray.push(drawBlock(2, 3, false, false, false));
			blockArray.push(drawBlock(2, 4, false, true, false));
			blockArray.push(drawBlock(4, 4, true, true, false));
			blockArray.push(drawBlock(4, 0, false, true, false));
			blockArray.push(drawBlock(5, 1, true, false, false));
			break;

		case 6:
		    blockArray.push(drawBlock(0, 2, false, true, true));
			blockArray.push(drawBlock(1, 3, true, true, false));
			blockArray.push(drawBlock(2, 0, true, false, false));
			blockArray.push(drawBlock(3, 0, true, false, false));
			blockArray.push(drawBlock(2, 4, false, true, false));
			blockArray.push(drawBlock(4, 0, false, true, false));
			blockArray.push(drawBlock(4, 1, true, true, false));
			blockArray.push(drawBlock(4, 3, true, true, false));
			break;

		case 7:
		    blockArray.push(drawBlock(0, 2, false, true, true));
			blockArray.push(drawBlock(0, 0, true, true, false));
			blockArray.push(drawBlock(0, 3, false, false, false));
			blockArray.push(drawBlock(1, 4, true, true, false));
			blockArray.push(drawBlock(2, 4, false, true, false));
			blockArray.push(drawBlock(2, 5, false, true, false));
			blockArray.push(drawBlock(3, 0, true, true, false));
			blockArray.push(drawBlock(3, 2, true, true, false));
			blockArray.push(drawBlock(5, 2, true, false, false));
			break;

		case 8:
		    blockArray.push(drawBlock(0, 2, false, true, true));
			blockArray.push(drawBlock(0, 4, false, false, false));
			blockArray.push(drawBlock(1, 1, false, false, false));
			blockArray.push(drawBlock(2, 2, true, true, false));
			blockArray.push(drawBlock(3, 2, true, false, false));
			blockArray.push(drawBlock(5, 1, true, true, false));
			blockArray.push(drawBlock(4, 3, false, true, false));
			blockArray.push(drawBlock(5, 4, true, true, false));
			break;

		case 9:
		    blockArray.push(drawBlock(2, 2, false, true, true));
			blockArray.push(drawBlock(0, 0, true, true, false));
			blockArray.push(drawBlock(0, 5, false, false, false));
			blockArray.push(drawBlock(1, 0, false, false, false));
			blockArray.push(drawBlock(1, 1, false, false, false));
			blockArray.push(drawBlock(1, 2, true, false, false));
			blockArray.push(drawBlock(2, 3, false, true, false));
			blockArray.push(drawBlock(3, 4, true, true, false));
			blockArray.push(drawBlock(4, 1, true, false, false));
			blockArray.push(drawBlock(4, 4, false, true, false));
			break;

		case 10:
			blockArray.push(drawBlock(1, 2, false, true, true));
			blockArray.push(drawBlock(0, 0, false, false, false));
			blockArray.push(drawBlock(0, 1, true, false, false));
			blockArray.push(drawBlock(0, 5, false, false, false));
			blockArray.push(drawBlock(1, 1, false, true, false));
			blockArray.push(drawBlock(2, 3, true, true, false));
			blockArray.push(drawBlock(3, 0, true, false, false));
			blockArray.push(drawBlock(3, 3, false, true, false));
			blockArray.push(drawBlock(4, 4, true, true, false));
			blockArray.push(drawBlock(4, 1, false, true, false));
			blockArray.push(drawBlock(5, 2, true, false, false));
			break;
			
		default: location.reload();	
	}//switch
}//game






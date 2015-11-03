function myFunction(){
	var image1= document.getElementById("meraDiv");
	var image2= document.getElementById("previousImage");
	var text= document.getElementById("previousText");
	
	var index1 = parseInt((Math.random() * 3);
	var index2 = parseInt((Math.random() * 4);
	var index3 = parseInt((Math.random() * 4);
	if(index!==0) {
		index = 3;
	}
	text.innerHTML = index1 + index2 + ";" + index3 + "0.jpg";
	image2.innerHTML = "<img class = \"" src =\"" + index1+index2+";"+index3 + "0.jpg\" />";
	meraDiv.innerHTML = "<center>" + 
			"<a href=\"#\">" +
			"<img class=\"randomImage\" src=\"Image" + index1 + index2 + ";" + index3 + "0.jpg\"" + 
			 onClick=\"myFunction()\"/>" + 
			"</a><p>Image" + index1 + index2 + ":" + index3 + "0.jpg</p>";
}



	



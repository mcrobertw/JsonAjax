var pageCounter=1;
var animalContainer=document.getElementById("animal-info");
var btn=document.getElementById("btn");
btn.addEventListener("click",function(){
	var ourRequest=new XMLHttpRequest();
	ourRequest.open('GET','../bd/animals-'+pageCounter+'.json');
	//ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
	ourRequest.onload=function(){
		var ourData=JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	};
	ourRequest.send();
	pageCounter++;
	if(pageCounter>2){
		btn.classList.add("hide-me");
	}
});

function renderHTML(data){
	var htmlString="";

	for(i=0;i<data.length;i++){
		htmlString+="<p>"+data[i].nombre+" es un "+data[i].especie+" y le gusta: ";

		for(ii=0;ii<data[i].caracteristicas.gustos.length;ii++){
			if(ii==0){
				htmlString+=data[i].caracteristicas.gustos[ii]+" ";
			}else{
				htmlString+=" y "+ data[i].caracteristicas.gustos[ii]+" ";
			}
			
		}

		htmlString+=", no le gusta: ";

		for(ii=0;ii<data[i].caracteristicas.nogusto.length;ii++){
			if(ii==0){
				htmlString+=data[i].caracteristicas.nogusto[ii]+" ";
			}else{
				htmlString+=" y "+ data[i].caracteristicas.nogusto[ii]+" ";
			}
			
		}


		htmlString+=".</p>";
	}

	animalContainer.insertAdjacentHTML('beforeend',htmlString);
}



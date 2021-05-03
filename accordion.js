const accordion = function(data, elem){
	switch (typeof data){
		case "string":
		case "number":
			return(elem.innerHTML = data);
		case "object":
			counter = 0;
			for([key, value] of Object.entries(data)){
				let btn = document.createElement("button"),
					cont = document.createElement("div"), 
					fold = document.createElement("div");
				if(!Array.isArray(data)){
				// btn
					btn.innerHTML = key;
					btn.addEventListener("click", event =>{
						if (cont.style.maxHeight !== "0px"){
							cont.style.maxHeight = "0px";
						}else{
							cont.style.maxHeight = "500vh";
						}
						fold.classList.toggle("open");
					});
				// cont
					cont.style.overflow = "hidden";
					cont.style.maxHeight = "0px";
					cont.style.margin = "0px";
				// fold
					fold.appendChild(btn);
					fold.appendChild(cont);
					fold.classList.add("fold");
					elem.appendChild(fold);
				}
				accordion(value, cont);
				fold.appendChild(cont);
				elem.appendChild(fold);
				counter++;
			}
			return elem;
	}
}
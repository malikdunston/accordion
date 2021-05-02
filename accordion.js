const accordion = function(data, elem){
	switch (typeof data){
		case "string":
		case "number":
			return(elem.innerHTML = data);
		case "object":
			counter = 0;
			for([key, value] of Object.entries(data)){

				// info = [counter, x, data[x]];
				info = [counter, key, value]

				if(Array.isArray(data)){
					console.log("array:  ", info);
				}else{
					console.log("obj:  ", info);
				}
				// accordion(data[x], elem)



				counter++;
			}
	}
	// log([data, elem]);
	// console.log([data, elem]);
	return elem;





















}









const old_accordion = function(data, elem){
	let obj = [];
	// if(typeof data == "string" || typeof data == "number"){
	// 	elem.innerHTML = data;
	// }else if(typeof data == "object"){
		// Object.keys(data).forEach(key => {
		// 	obj.push([key, data[key]]);
		// });
		// if(Array.isArray(data)){
		// 	obj = data;
		// }
		for(item of obj){
			let btn = document.createElement("button"), cont = document.createElement("div"), fold = document.createElement("div");
			if (item.length == 2){ // object!
			// btn
				btn.innerHTML = item[0];
				btn.addEventListener("click", ()=>{
					if (btn.parentElement.classList.contains("open")){
						btn.parentElement.classList.remove("open");
						cont.style.maxHeight = "0px";
					}else{
						btn.parentElement.classList.add("open")
						cont.style.maxHeight = "500vh";
						console.log(cont.scrollHeight);
					}
				});
			// cont
				cont.style.overflow = "hidden";
				cont.style.maxHeight = "0px";
				cont.style.margin = "0px";
				accordion(item[1], cont);
			// fold
				fold.appendChild(btn);
				fold.appendChild(cont);
				fold.classList.add("fold");
				elem.appendChild(fold);
			}else{ // array!
				accordion(item, cont);
			}
			fold.appendChild(cont);
			elem.appendChild(fold);
		}
	// }
	return elem;
}
const accordion =  (data, elem) => {
	typeof data == "object" ? iterate() : elem.innerHTML = data;
	return elem;
	function iterate() {
		for ([key, value] of Object.entries(data)) {
			let btn = document.createElement("button"),
				cont = document.createElement("div"),
				fold = document.createElement("div");
			if (!Array.isArray(data)) {
				btn.innerHTML = key; btn.classList.add("btn");
				cont.style.overflow = "hidden";	cont.style.maxHeight = "0px"; cont.style.margin = "0px";
				fold.appendChild(btn); fold.appendChild(cont); fold.classList.add("fold");
			}
			accordion(value, cont);
			fold.appendChild(cont);
			fold.addEventListener("click", event => {
				if(parentsOf(event.target)[0].classList.contains("btn") && cont.style.maxHeight !== "0px" ){
					cont.style.maxHeight = "0px"
				}else cont.style.maxHeight = "500vh";
				fold.classList.toggle("open");
			});
			elem.appendChild(fold);
		}
	}
	function parentsOf(e){
		var els = [];
		while (e) {
			els.push(e);
			e = e.parentNode;
		}
	// remove doc, html, body...
		els.length -= 3; 
		return els;
	}
}
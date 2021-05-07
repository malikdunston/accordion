const accordion =  (data, elem) => {
	(typeof data == "object" && data !== null) ? iterate() : elem.innerHTML = data;
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
			btn.addEventListener("click", () => {
				fold.classList.toggle("open");
				cont.style.maxHeight !== "0px" ?
					cont.style.maxHeight = "0px" :
					cont.style.maxHeight = "500vh";
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
		els.length -= 3; 
		return els;
	}
}
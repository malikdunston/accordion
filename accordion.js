const accordion = function (data, elem) {
	switch (typeof data) {
		case "string":
		case "number":
			return (elem.innerHTML = data);
		case "object":
			counter = 0; // don't really need this yet.
			for ([key, value] of Object.entries(data)) {
				let btn = document.createElement("button"),
					cont = document.createElement("div"),
					fold = document.createElement("div");
				if (!Array.isArray(data)) {
				// btn
					btn.innerHTML = key;
					btn.classList.add("btn");
				// cont
					cont.style.overflow = "hidden";
					cont.style.maxHeight = "0px";
					cont.style.margin = "0px";
				// fold
					fold.appendChild(btn);
					fold.appendChild(cont);
					fold.classList.add("fold");
				}
				accordion(value, cont);
				fold.appendChild(cont);
				fold.addEventListener("click", event => {
					if(parentsOf(event.target)[0].classList.contains("btn") ){
						cont.style.maxHeight !== "0px" ?
							cont.style.maxHeight = "0px" :
							cont.style.maxHeight = "500vh";
						fold.classList.toggle("open");
					}else console.log("you didn't click on a button");
				});
				elem.appendChild(fold);
				counter++;
			}
			return elem;
	}
	function parentsOf(e){
		var els = [];
		while (e) {
			els.push(e);
			e = e.parentNode;
		}
		els.length -= 3; // remove doc, html, body...
		return els;
	}
}
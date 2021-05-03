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
				// maybe add evlist to fold, then use event.target to select btn.
				// do this to bundle all fold code into a "compile"
					btn.addEventListener("click", event => {
						console.log(findParents(btn));
						cont.style.maxHeight !== "0px" ?
							cont.style.maxHeight = "0px" :
							cont.style.maxHeight = "500vh";
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
				}
				accordion(value, cont);
				fold.appendChild(cont);
				elem.appendChild(fold);
				counter++;
			}
			return elem;
	}
// find all parent elems of an elem...
// want to make all parents overflow = whatever... 
// from https://stackoverflow.com/questions/8729193/how-to-get-all-parent-nodes-of-given-element-in-pure-javascript
	function findParents(e){
		var els = [];
		while (e) {
			els.unshift(e);
			e = e.parentNode;
		}
		return els;
	}
}
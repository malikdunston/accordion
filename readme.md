# Nested Accordion

-	Representing json in foldable, nested dom elements.
-	simple wrapper with two children - the first toggling the second's height
-	add class "fold", and simple event listener using querySelectorAll.

## Features:

-	Can use any html element
-	only one line of js dom manipulation - a class toggle.
-	only three css declarations.

## Purpose

-	Achieving piece of larger goal: easy, common dom manipulation without jquery and frameworks only when necessary.
-	Simple open/close UX for items either in lists or alone.
-	Use cases:
	-	Navigation
	-	Context Menus
	-	FAQ pages
	-	Simple hover animations

## Use examples

-	Team Index by hierarchal departments.

### Simple Accordion

- HTML markup with no accordion:

	<parent>
		<first>Click me!</first>
		<second>
			Check out my content!
		</second>
	</parent>

- HTML markup with accordion:

	<parent **class="fold"**>
		<first>Click me!</first>
		<second>
			Check out my content!
		</second>
	</parent>

- Easiest way to set up:

	<script></script>
	<parent></parent>
	<script>
		let data = async () => {
			// await http call for data, etc
			return data
		}
		let elem = document.querySelector("parent");
		accordion(data, elem);
	</script>

## Refereces

	-	find all parents of a node using while.
		https://stackoverflow.com/questions/8729193/how-to-get-all-parent-nodes-of-given-element-in-pure-javascript

	-	addeventlistener vs onclick:
		https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick
		-	addeventlisteners cascade, onclicks do not, basically...

	-	Hoisting Explained by 5-minute web dev:
		https://www.youtube.com/watch?v=AplVrrwY1TI&t=123s
		-	notes:
			-	You don't really need to hoist stuff unless you just want to organize your functions at the end/bottom of the page. 
				-	"no reason to make things more confusing than they need to be."
			-	undeclared assignments are in the global scope.
				-	example:

					function hey(){
						thisVar = "Hello I'm ";
						var newVar = thisVar + "Malik";
						return newVar;
					}
					console.log(hey());

			-	execution phase vs compile phase.
				-	var declarations are STORED IN MEMORY during compile.
				-	var declarations are hoisted during compile, but not assignments...
					example:

					function do(){
						console.log(stuff);
						var stuff = "You won't see this in the console log.";
					}
					do();

					in the above, var stuff is hoisted and is undefined in compile phase.
					the assignment is not. since it is after the execution of console.log(), it is not yet defined.

					fix:

					function do(){
						stuff = "You won't see this in the console log.";
						console.log(stuff);
						var stuff;
					}
					do();

			-	Named functions can go anywhere in the page, script tag can go anywhere in the html, etc....
				-	However, it is better practice to declare vars as anon functions. The browser saves these during compile phase, which is less performant.

## Journal

#### 5/6

	-	injected into ui-exploration.git, np
	-	need to angularify

#### 5/3

	-	no more switch.. simple if/else on typeof data...
	-	able to get all parents of an elem.
	-	fold instead of btn event listener...

#### 4/25

	-	normalize all of the if/else blocks dom manipulation into one block below either a switch/case or if/else series
		-	research if/else vs swich/case performance
			-	switch only really better if there's lots of blocks.
			-	only three blocks.
	-	no externall css - just in accordion.js
	-	one js file, one html file
		-	two for now, one is just the data.

#### 4/30

	-	for(x in data){ ...iterate through either obj or array... }
		-	#s not allowed at beginning of json keys, distinguishing array objs from js objects.

## Bugs

	-	scrollHeight not computing........



## Wishlist/To-dos

	-	table version?
	-	horizontal scroll version?
	-	idenfify the level of nesting of a given data/elem...
		-	optional arg to limit levels on a given obj
		-	toggle mouseover????
		-	variable tags for fold, btn, cont...
	-	add .open to specific folds anywhere in a variable list of accordions based on:
		-	search criteria
		-	prop values (maybe same as above?)
		-	prop types (typeof, array.isarray(), etc...)
	-	use event.target obj to fill a hovering div with the path of whatever dom element you're mousing over.
		-	ex: "qbs -> depth_chart -> xyz_player"
	-	turn underscore or camelcase into two different words.
		-	then perhaps capitalize but don't do too much w/that. plenty of resources. gotta know when to stop.
	-	lock .folds:
		-	and all children?
		-	same for close all
	-	if other .folds are .open, and you click on a .fold > .btn anywhere:
		-	remove .open from everything else then add to the button you clicked...

## notes...

	-	you can split one obj up by using obj.props as arg for accordion().
		-	this can also be automated.
			-	new elem("div.accordion.xyz")
			-	accordion(siteData[xyzVar])
	-	You can also nest items inside accordion beforehand.
	-	

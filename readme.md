# Nested Accordion

-	An attempt to represent json in foldable, nested dom elements.
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

## Refereces

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

## Wishlist/To-dos

	-	normalize all of the if/else blocks into one block below either a switch/case or if/else series
		-	research if/else vs swich/case performance
	-	no externall css - just in accordion.js
	-	one js file, one html file
	-	horizontal scroll version?
	-	toggle mouseover????
	-	use event.target obj to fill a hovering div with the path of whatever dom element you're mousing over.
		-	ex: "qbs -> depth_chart -> xyz_player"
	-	turn underscore or camelcase into two different words.
		-	then perhaps capitalize but don't do too much w/that. plenty of resources. gotta know when to stop.

## notes...

	-	you can split one obj up by using obj.props as arg for accordion().
	-	You can also nest items inside accordion beforehand.
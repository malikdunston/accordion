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
	-	Hoisting Explained by 5-minute web dev:
		https://www.youtube.com/watch?v=AplVrrwY1TI&t=123s
		-	notes:
			-	execution phase vs compile phase.
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
			-	basically, if you use a named function, it can go anywhere in the page, script tag can go anywhere in the html, etc....
				-	However, it is better practice to declare vars as anon functions. The browser saves these during compile phase, which is less performant.


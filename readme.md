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
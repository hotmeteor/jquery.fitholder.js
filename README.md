jquery.fitholder
===================

**Responsive input placeholder text.**

###What is this?
Sometimes, input placeholders can be too long for mobile screens, or too concise for larger screens. The content should be ever present, but flexible... *responsive*, even.

***

###How do I use this?
__Simple.__ As options in the plugin:

```
<input class="myinput" type="text" placeholder="This is the default placeholder text" />
```
```
$('.myinput').fitholder({
    "(min-width: 300px)": 'Default',
    "(min-width: 700px)": 'Default text',
    "(min-width: 1000px)": 'This is default text'
});
```

Or, with well-formed JSON in a data-fitholder attribute.

```
<input class="myinput" type="text" 
	placeholder="This is the default placeholder text" 
	data-fitholder='{"(min-width: 300px)":"Inline","(min-width: 700px)":"Inline values","(min-width: 1000px)":"These are inline values"}' />
```
```
$('.myinput').fitholder();
```

###Version
1.1.1

###Requirements
- jQuery

###Changelog
__3/5/2014__
- Added alternate HTML5 `data-fitholder` based syntax

__1/27/2013__
- Initial version
- Use Fitholder with jQuery

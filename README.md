jquery.fitholder.js
===================

**Responsive input placeholder text.**

###What is this?
Sometimes, input placeholders can be too long for mobile screens, or too concise for larger screens. The content should be ever present, but flexible... *responsive*, even.

***

###How do I use this?
Simple.

    $('.myinput').fitholder({
        "(min-width: 300px)": 'Default',
        "(min-width: 700px)": 'Default text',
        "(min-width: 1000px)": 'This is default text'
    });

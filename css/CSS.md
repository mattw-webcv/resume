
background-color: lightblue;
  opacity: 0.3;
  background-color: black;
  color: white;
h1 {
  color: navy;
  margin-left: 20px;
}

  <div class="resume item">
      <details>
        <summary></summary>
        <p></p>
      </details>
    </div>


Text alignment
text-align: ;
text-align-last: ;
(last line of a text.)
left center right justify

"justify", each line is stretched so that every line has equal width, and the left and right margins are straight

float: ;
margin: auto;
width: 50%;
border: 3px solid green;
padding: 10px;

### lists
list-style-type: none;
margin: 0;
padding: 0;



background: #ffffff url("img_tree.png") no-repeat right top;
When using the shorthand property the order of the property values is:
background-color
background-image
background-repeat
background-attachment
background-position

Font styling
font-style: ;
normal italic oblique
font-weight: ;
normal bold
font-size: 40px;
 View width is % of viewport width
 Viewport 50cm wide, 1vw= 0.5cm
 <h1 style="font-size:10vw">Hello World</h1>

  font: 20px Arial, sans-serif;



### Borders
https://www.w3schools.com/css/css_border.asp

p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}

border-width: thick;
border-width: medium;

The border property is a shorthand property for the following individual border properties:

    border-width
    border-style (required)
    border-color
 border: 5px solid red;

Radius rounded border
  border-radius: 5px;
 border-radius: 1-4 length|% / 1-4 length|%|initial|inherit;
border-radius: 25%

Margin spacing is separation between objects
 margin: 25%;

Padding spacing is separation between borders and their contents
  padding: 25%

Div element height and width
  height: 200px;
  width: 50%;

    Content - The content of the box, where text and images appear
    Padding - Clears an area around the content. The padding is transparent
    Border - A border that goes around the padding and content
    Margin - Clears an area outside the border. The margin is transparent

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;

.container {
  display: grid;
}



* {
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Lucida Sans", sans-serif;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main main right'
    'footer footer footer footer footer footer';
    gap: 10px;
    background-color: white;
    padding: 10px;
}

.grid-container > div {
  padding: 10px;
  font-size: 16px;
}

.item1 {
  grid-area: header;
  background-color: purple;
  text-align: center;
  color: #ffffff;
}

.item1 > h1 {
  font-size: 40px;
}

.item2 {
  grid-area: menu;
}

.item2 ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.item2 li {
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  color: #ffffff;
}

.item2 li:hover {
  background-color: #0099cc;
}

.item3 {
  grid-area: main;
}

.item3 > h1 {
  font-size: 30px;
  margin-bottom: 7px;
}

.item3 > p {
  margin-bottom: 7px;
}

.item4 {
  grid-area: right;
  border: 2px solid #0099cc;
  background-color: white;
  padding: 15px;
  color: #000000;
}

.item4 > h2 {
  font-size: 20px;
  padding-bottom: 10px;
}

.item4 li {
  padding: 5px;
  margin-bottom: 5px;
}

.item5 {
  grid-area: footer;
  background-color: #0099cc;
  color: #ffffff;
  text-align: center;
}



https://www.w3schools.com/sass/sass_variables.php
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}





font-family: Helvetica, sans-serif;
font-size: 18px;
font-weight: bold;

text-align: center;
text-transform: lowercase;
text-overflow: hidden;


@import "variables";
@import "colors";
@import "reset";


html,
body,
ul,
ol {
  margin: 0;
  padding: 0;
}

@import "reset";

body {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: red;
}

html, body, ul, ol {
  margin: 0;
  padding: 0;
}

body {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: red;
}




font: {
  family: Helvetica, sans-serif;
  size: 18px;
  weight: bold;
}

text: {
  align: center;
  transform: lowercase;
  overflow: hidden;
}

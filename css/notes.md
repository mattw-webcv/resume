Class resume column
.skillscolumn {
  display: inline-grid;

  justify-content: space-between;
  place-self: center;
  align-content: center;

  grid-template-rows: 8;
  grid-template-columns: auto auto auto;

  overflow: scroll;

}


CSS GRID

grid-template
grid-template-rows
grid-template-columns
grid-template-areas
gap
row-gap
column-gap
grid-column
grid-column-start
grid-column-end
grid-row
grid-row-start
grid-row-end
justify-content
align-content
grid-auto-rows
grid-auto-columns
https://www.w3schools.com/w3css/w3css_grid.asp

Spacing
justify-content: flex-start|flex-end|center|space-between|space-around|space-evenly|initial|inherit;
https://www.w3schools.com/cssref/css3_pr_justify-content.php












TEXT ALignment and justification

text align is justification to left centre right


Other notes??
Margin properties
margin: auto 2em  ;

margin: 10px 5px 15px 20px;
        top margin is 10px
        right margin is 5px
        bottom margin is 15px
        left margin is 20px

margin: 10px 5px;
        top and bottom margins are 10px
        right and left margins are 5px

margin: 10px;
        all four margins are 10px


Link notes


LISTS

This describes the list pointer ? point/square/circle/etc
list-style-type: circle;
list-style-type: disc;
list-style-type: square;
list-style-type: decimal;
list-style-type: decimal-leading-zero;
list-style-type: lower-alpha;
list-style-type: lower-greek;
list-style-type: upper-alpha;
list-style-type: upper-greek;
list-style-type: upper-latin;
list-style-type: upper-roman;
list-style-type: none;
list-style-type: inherit;

<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li style="float:right"><a class="active" href="#about">About</a></li>
</ul>



Websafe colors
Sorted
https://www.w3schools.com/colors/colors_hex.asp
https://www.w3schools.com/colors/colors_groups.asp

.li {
  float: left;
}

.li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04aa6d;
}

Div elements

buttons
https://www.w3schools.com/CSSref/sel_hover.php
hover and colours etc

<h1 style="font-size:10vw">Hello World</h1>
<style="max-width:100%;height:auto;">

background-color: lightblue;
opacity: 0.3;
color: white;
margin-left: 20px;

text-align: ;
text-align-last: ;
(left center right justify)

(last line of a text.)
("justify", each line is stretched so that every line has equal width, and the left and right margins are straight)

float: ;

width: 50%;
border: 3px solid green;
padding: 10px;

font-family: Helvetica, sans-serif;
font-size: 18px;
font-weight: bold;

text-align: center;
text-transform: lowercase;
text-overflow: hidden;




## other notes

https://www.w3schools.com/cssref/css_pr_place-content.php

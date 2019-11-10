# bmenu
 JS add-in hamburger style menu icon

The plan is to make hamburger style nav icon with javascript. Download JS file to folder. Link to in your html. Style with regular css.

CSS: call the icon by id "hamburger". Style attributes should universally apply to icon.

This finally works. Need to change the names of the divs around to make more human sense. Had to set style properties of actually displayed div to match the hidden "dummy" div. This is because certain properties like width, height, and page position should apply to hamburger object container div. The other properties of the "dummy" div like backgroundColor, border, etc should only apply to the three inner lines and not the entire container. Hence;

Create fake div to be treated as hamburger object in css. Separate the style properties of fake div to the different types of objects in hamburger div (container and lines).

# classesAda
These are the exercises I do in every bootcamp class to practice. 
I guess that practicing means everything when you are learning to code so don't judge me for my mistakes and eccentric taste.
I'll be adding in this README what I've been doing in each folder inside this repository.
Although, I should tell you first that ADA is a front-end bootcamp so don't expect weird and cool back-end stuff.
Let's save that magic for the future. 

## howToMakeBorders 

Different types of borders in css and their charactersitics: 
* style
* width
* color
* radius

Give each of this characteristics to the different borders separately:

    
    div {
    	border-top: 1px solid green;
    	border-right: 2px dashed red;
    	border-bottom: 1px dotted pink;
    	border-left: 2px groove blue;
    }

Default borders have:
* width: 1px;
* style: solid;
* color: black;


## uses Of **A** element

> This element is pretty importan when used inside an .html document. We can either use it to navigate our own page as well as for linking our page to other pages or other htmls.
>
> It's really useful to use this **a** element within menues or images. Also we can put them inside our text to generate hyperlinks. 
>
> We love you **a** 


Uses: 

Images 
    
    <a href="#"><img src="example.jpg" alt="example"></a>

Menues (lists)

    <ul>
	<li><a href="#">Hello</a></li>
	<li><a href="#">Goodbye</a></li>

Hyperlinks 

	<p>Let's go to <a href="google.com">Google</a></p>

Our own page 

	<a href="#hello">Hello</a>
	<a href="#goodbye">Goodbye</a>
	<div>
	<a name="hello"></a>
	<h2>Hello</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti, et sequi ad minima esse earum ipsum impedit temporibus dolorum recusandae nulla. Vitae, fugiat, quibusdam? Illo quae sequi mollitia quibusdam.</p>
	</div>
	<div>
	<a name="goodbye"></a>
	<h2>Goodbye</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti, et sequi ad minima esse earum ipsum impedit temporibus dolorum recusandae nulla. Vitae, fugiat, quibusdam? Illo quae sequi mollitia quibusdam.</p>
	</div>

## divsAreSuperFunToPlayWith

We have learned about divs and at first we used them for everything. Then html5 guide us along the way. 

Divs are:
* block structures 
* they come to life without paddings, margins and borders. 
* their default background-color is transparent and their default color is black
* all html5 elements are like divs but with different names (header, main, footer, aside, article, section, etc.)

### inCaseYouWereWondering 

* As we said before, divs are block structures, they function as boxes and all block elements are possitioned one bellow the other by default. 
* If you want to center a div you should use the CSS to give the div a specific width and then a margin auto. This will make the div to center inside its father (!important --> the father needs a width too so pay attention to details)

Here is a brief example:

	<style>
	 .father {
	 	width:100%;
	 }
	 .son {
	 	width:100%;
	 	margin:0 auto;
	 }
	</style>
	
	<body>
	<div class="father">
	</div>
	<div class="son">
	<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
	</div>
	</body>
	









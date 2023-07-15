
var canvas= new fabric.Canvas('myCanvas');

ball_y=0
ball_x=0
hole_y=400
hole_x=800

block_image_width = 50;
block_image_height = 50;
block_image_object="";
block_object="";
function load_img(){
	fabric.Image.fromURL('golf-h.png', function (Img){
		block_image_object=Img;
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.set({
			top: hole_y,
			left: hole_x
		});
		canvas.add(block_image_object);
	}) ;

	new_image();
}

function new_image()
{
	fabric.Image.fromURL('ball.png', function (Img){
		block_object=Img;
		block_object.scaleToHeight(block_image_height);
		block_object.scaleToWidth(block_image_width);
		block_object.set({
			top: ball_y,
			left: ball_x
		});
		canvas.add(block_object);
	}) ;
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(block_object);
		document.getElementById("hd3").innerHTML="You Have Hit The Goal!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}}

	
	function up()
	{
		if(ball_y >=15)
		{
			ball_y=ball_y-block_image_height;
			canvas.remove(block_object);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <=450)
		{
			ball_y=ball_y+block_image_height;
			canvas.remove(block_object);
			new_image()
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x-block_image_width;
			canvas.remove(block_object);
			new_image()
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+block_image_width;
			canvas.remove(block_object);
			new_image()
		}
		}
	
	



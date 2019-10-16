window.onload = myInit();

var p={},t={};
function myInit()
{
  console.log("Inside my init function");
  var p={};
  p0 = new point(20,320);
  p[0]=p0;
  p1 = new point(60,320);
  p[1]=p1;
  p2 = new point(60,280);
  p[2]=p2;
  p3 = new point(80,280);
  p[3]=p3;
  p4 = new point(80,320);
  p[4]=p4;
  p5 = new point(120,320);
  p[5]=p5;
  p6 = new point(120,160);
  p[6]=p6;
  p7 = new point(70,100);
  p[7]=p7;
  p8 = new point(20,160);
  p[8]=p8;

  console.log("Points",p[0].x);
  var t={};
  var House = {p0,p1,p2,p3,p4,p5,p6,p7,p8};
  shape = new shape(House);
  shape.drawShape(ctx,p,9);
  

  p0 = new point(300,320);
  t[0]=p0;
  p1 = new point(320,320);
  t[1]=p1;
  p2 = new point(320,160);
  t[2]=p2;
  p3 = new point(340,160);
  t[3]=p3;
  p4 = new point(340,120);
  t[4]=p4;
  p5 = new point(310,120);
  t[5]=p5;
  p6 = new point(280,120);
  t[6]=p6;
  p7 = new point(280,160);
  t[7]=p7;
  p8 = new point(300,160);
  t[8]=p8;

  var T = {p0,p1,p2,p3,p4,p5,p5,p6,p7,p8};
  shape.drawShape(ctx,t,9 );
  var delt=0;
  
  timer = setInterval(tween,1000);

function tween()
{
  ctx.clearRect(0,0,cvs.width,cvs.height);
  var i=0;
  var lerp={};

  for(i=0;i<9;i++)
  {
    var x = p[i].x *(1-delt) + t[i].x*delt;
    var y = p[i].y *(1-delt) + t[i].y*delt;
    var Point = new point(x,y);
    lerp[i]=Point;
  }
  shape.drawShape(ctx,lerp,9);
  //return lerp;
  if(delt == 1.0)
        {
            //console.log(" move ball fn");
            clearInterval(timer);
        }
        delt+=0.25;
  console.log("Lerp Points" ,lerp);
}



  // tween(p,t,0.9);
  // tween(p,t,0.25); 
}
// function tween(house , T , t)
// {
//   var i=0;
//   var lerp={};

//   for(i=0;i<9;i++)
//   {
//     var x = house[i].x *(1-t) + T[i].x*t;
//     var y = house[i].y *(1-t) + T[i].y*t;
//     var Point = new point(x,y);
//     lerp[i]=Point;
//   }
//   shape.drawShape(ctx,lerp);
//   //return lerp;
//   console.log("Lerp Points" ,lerp);
// } 
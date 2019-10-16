class shape 
{
  constructor(data)
  {
    data = data;
  }

  drawShape(ctx,data , length)
  {
    var i=0;
    ctx.beginPath();
    ctx.moveTo(data[0].x , data[0].y);
    for(i=1;i<length;i++)
    {
      ctx.lineTo(data[i].x , data[i].y)
      ctx.moveTo(data[i].x , data[i].y);
    }

    ctx.lineTo(data[0].x , data[0].y);
    ctx.stroke();
  }
}
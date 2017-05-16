 var APP_ID = 'D8A9CC24-CE48-279A-FFA9-85B03E507000';
var API_KEY = 'AE635105-3DFF-11C9-FF02-394AD2FE8000';
Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

var adidas1 = 1;

var nike1 = 1;

var vans1 = 1; 

var data1 = adidas1;

var data2 = nike1;

var data3 = vans1;

Backendless.Data.describe( "data" )
 .then( function( adidas, nike, vans) {
    adidas1 = adidas + 1;
    nike1 = nike + 1;
    vans1 = vans + 1;
    
  })
 .catch( function( error ) {
  });

function shoes() { 
var currentSelection = document.querySelector("input[name='selector']:checked").value;
  if (currentSelection=="Vans"){

      vans1 = vans1 + 1
   data1 = adidas1;
data2 = nike1;
data3 = vans1;
      myData = [vans1, nike1, adidas1]

      myNumber = [vans1,nike1,adidas1]

      plotData()

      Backendless.Data.of( "data" ).save( { adidas:data1, nike:data2, vans:data3} )
 .then( function( savedObject ) {
  })
 .catch( function( error ) {
  });
      
  }else if(currentSelection=="Nike") {
  
  nike1 = nike1 + 1
  data1 = adidas1;
data2 = nike1;
data3 = vans1;
      myData = [vans1, nike1, adidas1]

      myNumber = [vans1,nike1,adidas1]

      plotData()

      Backendless.Data.of( "data" ).save( { adidas:data1, nike:data2, vans:data3} )
 .then( function( savedObject ) {
  })
 .catch( function( error ) {
  });
  }else if(currentSelection=="Adidas") {
  
      adidas1 = adidas1 + 1
  data1 = adidas1;
data2 = nike1;
data3 = vans1;
      myData = [vans1, nike1, adidas1]

      myNumber = [vans1,nike1,adidas1]

      plotData()

      Backendless.Data.of( "data" ).save( { adidas:data1, nike:data2, vans:data3} )
 .then( function( savedObject ) {
  })
 .catch( function( error ) {
  });
  }
}

var myColor = ["#39ca74","#e54d42","#f0c330","#3999d8","#35485d"];
var myData = [vans1,nike1,adidas1];
var myLabel = ["Vans","Nike","Adidas"];
var myNumber = [vans1,nike1,adidas1];
function getTotal(){
  var myTotal = 0;
  for (var j = 0; j < myData.length; j++) {
    myTotal += (typeof myData[j] == 'number') ? myData[j] : 0;
  }
  return myTotal;
}

function plotData() {
  var canvas;
  var ctx;
  var lastend = 0;
  var myTotal = getTotal();
  var doc;
  canvas = document.getElementById("canvas");
  var x = (canvas.width)/2;
  var y = (canvas.height)/2;
  var r = 150;
  
  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < myData.length; i++) {
    ctx.fillStyle = myColor[i];
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.arc(x,y,r,lastend,lastend+(Math.PI*2*(myData[i]/myTotal)),false);
    ctx.lineTo(x,y);
    ctx.fill();
    
    // Now the pointers
    ctx.beginPath();
    var start = [];
    var end = [];
    var last = 0;
    var flip = 0;
    var textOffset = 0;
    var precentage = (myData[i]/myTotal)*100;
    start = getPoint(x,y,r-20,(lastend+(Math.PI*2*(myData[i]/myTotal))/2));
    end = getPoint(x,y,r+20,(lastend+(Math.PI*2*(myData[i]/myTotal))/2));
    if(start[0] <= x)
    {
      flip = -1;
      textOffset = -110;
    }
    else
    {
      flip = 1;
      textOffset = 10;
    }
    ctx.moveTo(start[0],start[1]);
    ctx.lineTo(end[0],end[1]);
    ctx.lineTo(end[0]+120*flip,end[1]);
    ctx.strokeStyle = "#bdc3c7";
    ctx.lineWidth   = 2;
    ctx.stroke();
    // The labels
    ctx.font="15px Arial";
    ctx.fillText(myLabel[i]+"  " +myNumber[i]+ "  "+precentage.toFixed(2)+"%",end[0]+textOffset,end[1]-4); 
    // Increment Loop
    lastend += Math.PI*2*(myData[i]/myTotal);
    
  }
}
// Find that magical point
function getPoint(c1,c2,radius,angle) {
  return [c1+Math.cos(angle)*radius,c2+Math.sin(angle)*radius];
}
// The drawing
plotData();

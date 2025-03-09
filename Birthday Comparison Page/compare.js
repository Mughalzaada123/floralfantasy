  var product = sessionStorage.getItem("product_id");


var flowers  = [
  {id:"0", imgsrc:"flowers.jpg",title:"Choose Your Product",description:"", price:"",},

  {id:"1", imgsrc:"Vase 1.jpg",title:"Crimson roses", description:"", price:"$19.99",},
  {id:"2", imgsrc:"Vase 2.jpg",title:"Rose petal cascade", description:"", price:"$19.99",},
  {id:"3", imgsrc:"Vase 3.jpg",title:"Starlight sparkle", description:"", price:"$19.99",},
  {id:"4", imgsrc:"Vase 4.jpg",title:"Whispering willow", description:"", price:"$19.99",},
 
  {id:"5", imgsrc:"Balloon 1.jpg",title:"Birthday balloon", description:"", price:"$19.99",},
  {id:"6", imgsrc:"Balloon 2.jpg",title:"Heart balloon", description:"", price:"$19.99",},
  {id:"7", imgsrc:"Balloon 3.jpg",title:"Glowing star balloon", description:"", price:"$19.99",},
  {id:"8", imgsrc:"Birthday banner 1.jpg",title:"Box banner", description:"", price:"$19.99",},
  
  {id:"9", imgsrc:"Birthday banner 2.jpg",title:"Sparkling confetti banner", description:"", price:"$19.99",},
  {id:"10", imgsrc:"Birthday banner 3.jpg",title:"Balloon bash banner", description:"", price:"$19.99",},
  {id:"11", imgsrc:"Candle 1.jpg",title:"Lavender bliss", description:"", price:"$19.99",},
  {id:"12", imgsrc:"Candle 2.jpg",title:"Pumpkin spice", description:"", price:"$19.99",},
  
  {id:"13", imgsrc:"Candle 3.png",title:"Orange spice", description:"", price:"$19.99",},
  {id:"14", imgsrc:"Lighting 1.jpg",title:"Vintage lacework", description:"", price:"$19.99",},
  {id:"15", imgsrc:"Lighting 2.jpg",title:"Ethereal aurora", description:"", price:"$19.99",},
  {id:"16", imgsrc:"Lighting 3.jpg",title:"Mystic moonlight", description:"", price:"$19.99",},
  
//   {id:"17", imgsrc:"Sofa pic/index sofa 4.jpg",title:"Carson", description:"Carson storage bed with head cushions is characterised by a comfy, generous silhouette", price:"USD:999" ,engine:"White",model:"Carson",},
//   {id:"18", imgsrc:"Sofa pic/index sofa 3.jpg",title:"Clark", description:"Clark storage bed with head cushions is characterised by a comfy, generous silhouette" , price:"USD:999",engine:"Multiengines",model:"Clark",},
//   {id:"19", imgsrc:"Table/kalamkaar table 3.jpg",title:"Albus", description:"Albus is an extending square table with corner legs, perfect to accommodate 4 to 10 people" ,price:"USD:999",engine:"Brown",model:"Albus",},
//   {id:"20", imgsrc:"Table/interwood table 5.jpg",title:"Atlante", description:"Atlante by Cantori is a  glass table with curved metal legs with a classic and elegant look, available in different models" , price:"USD:999",engine:"Off-White",model:"Atlante",},
//   {id:"21", imgsrc:"Table/kalamkaar table 6.jpg",title:"Atlantis", description:"Atlantis by Cattelan is a design table in crystal decorated with precious 'waterengine' effect artistic prints" , price:"USD:999",engine:"White and Black",model:"Atlantis"},
//   {id:"22", imgsrc:"Table/kalamkaar table 5.jpg",title:"Benny", description:"Benny by Cattelan is a metal and ceramic coffee table proposed in different sizes designed for positioning on the sofa side or in front of the sofa" , price:"USD:999",engine:"Brown",model:"Benny"},
//   {id:"23", imgsrc:"Table/kalamkaar table 4.jpg",title:"Birch", description:"Birch is a round table with a shaped base in birch plywood, available in two sizes and ideal in the center of the room as a dining table" , price:"USD:999",engine:"Brown",model:"Birch"},
//   {id:"24", imgsrc:"Table/kalamkaar table 1.jpg",title:"Bount", description:"Bount is a glass table with structural beam in painted metal, its top is available in different measurements, both rectangular and shaped." , price:"USD:999",engine:"Brown",model:"Bount"},
 
]
for(var i of flowers){
      $(".opt").append("<option id="+i.id+">"+i.title+"</option>");
      $(".selection").append("<option id="+i.id+">"+i.title+"</option>");
      $("#18").hover(function(){
        $("#18").css("backgroundColor","red");
      });
  if(i.id == product){
    $("#opt2").val(i.title)
    $("#selection").val(i.title)
      $("#img").attr("src",i.imgsrc);
      document.getElementById("comp2").innerHTML = i.price;
      document.getElementById("comp6").innerHTML = i.description; 
      
      $("#img11").attr("src",i.imgsrc);
      document.getElementById("comp21").innerHTML = i.price;
      document.getElementById("comp43").innerHTML = i.description;
  }
}
$("#selection").on("change",function(){
  fun();
})
$("#opt2").on("change",function(){
  fun();
})
function fun(){
    var id = $("#selection").val();
    var id2 = $("#opt2").val();
    for(var i of flowers){
    if(i.title == id){
      $("#img11").attr("src",i.imgsrc);
      document.getElementById("comp21").innerHTML = "Price :" +i.price;
      document.getElementById("comp43").innerHTML = "Description : "+i.description;

      
      
    }
  }
  for(var i of flowers){
    if(i.title == id2){
        $("#img").attr("src",i.imgsrc);
        document.getElementById("comp2").innerHTML = "Price :" +i.price;
      document.getElementById("comp6").innerHTML = "Description : "+i.description;
        
    }
    }
}








// Nav 
$(document).ready(function(){
  $(window).scroll(function(){
  if($(window).scrollTop()>1){
    $("nav").css("background-color" , "white",);
  }
  else{
    $("nav").css("background" , "transparent");
  }
  });
});




document.addEventListener('DOMContentLoaded', function() {
  var parent = document.querySelector('.splitview'),
      topPanel = parent.querySelector('.top'),
      handle = parent.querySelector('.handle'),
      skewHack = 0,
      delta = 0;

  // If the parent has .skewed class, set the skewHack var.
  if (parent.className.indexOf('skewed') != -1) {
      skewHack = 1000;
  }

  parent.addEventListener('mousemove', function(event) {
      // Get the delta between the mouse position and center point.
      delta = (event.clientX - window.innerWidth / 2) * 0.5;

      // Move the handle.
      handle.style.left = event.clientX + delta + 'px';

      // Adjust the top panel width.
      topPanel.style.width = event.clientX + skewHack + delta + 'px';
  });
});
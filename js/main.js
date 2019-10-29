var currentImgIndex = 1;
function changeImage(n) {
  currentImgIndex += n;
  if (currentImgIndex>5) { currentImgIndex = 1; }
  if (currentImgIndex<1) { currentImgIndex = 5; }
  showImage(currentImgIndex);
}
function showImage(n) {
  var ourImage = document.getElementById("current_image");
  if(n==1) {
    $(".slideshow2").css("backgroundImage","url('images/slideshow1.jpg')");
    $(".circle").css("background-color","white");
    $("#image_index1").css("background-color","#ABA592");
  }
  if(n==2) {
    $(".slideshow2").css("backgroundImage","url('images/slideshow2.jpg')");
    $(".circle").css("background-color","white");
    $("#image_index2").css("background-color","#ABA592");
    }
  if(n==3) {
    $(".slideshow2").css("backgroundImage","url('images/slideshow3.png')");
    $(".circle").css("background-color","white");
    $("#image_index3").css("background-color","#ABA592");
    }
  if(n==4) {
    $(".slideshow2").css("backgroundImage","url('images/slideshow4.jpg')");
    $(".circle").css("background-color","white");
    $("#image_index4").css("background-color","#ABA592");
    }
  if(n==5) {
    $(".slideshow2").css("backgroundImage","url('images/slideshow5.png')");
    $(".circle").css("background-color","white");
    $("#image_index5").css("background-color","#ABA592");
    }
}
setInterval(function(){
  changeImage(1)},5000
  );
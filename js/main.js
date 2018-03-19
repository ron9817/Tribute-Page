var currentImgIndex = 1;
showImage(currentImgIndex);

function changeImage(n) {
  currentImgIndex += n;
  if (currentImgIndex>5) { currentImgIndex = 1; }
  if (currentImgIndex<1) { currentImgIndex = 5; }
  showImage(currentImgIndex);
}

function showImage(n) {
  console.log(n);

  var ourImage = document.getElementById("current_image");

  if(n==1) {
    $("#current_image").attr("src","images/slideshow1.jpg");
    $(".circle").css("background-color","white");
    $("#image_index1").css("background-color","#ABA592");
  }
  if(n==2) {
    $("#current_image").attr("src","images/slideshow2.jpg");
    $(".circle").css("background-color","white");
    $("#image_index2").css("background-color","#ABA592");
    }
  if(n==3) {
    $("#current_image").attr("src","images/slideshow3.png");
    $(".circle").css("background-color","white");
    $("#image_index3").css("background-color","#ABA592");
    }
  if(n==4) {
    $("#current_image").attr("src","images/slideshow4.jpg");
    $(".circle").css("background-color","white");
    $("#image_index4").css("background-color","#ABA592");
    }
  if(n==5) {
    $("#current_image").attr("src","images/slideshow5.png");
    $(".circle").css("background-color","white");
    $("#image_index5").css("background-color","#ABA592");
    }

}

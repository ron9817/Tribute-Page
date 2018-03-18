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

  if(n==1) { $("#current_image").attr("src","images/slideshow1.jpg"); }
  if(n==2) { $("#current_image").attr("src","images/slideshow2.jpg"); }
  if(n==3) { $("#current_image").attr("src","images/slideshow3.png"); }
  if(n==4) { $("#current_image").attr("src","images/slideshow4.jpg"); }
  if(n==5) { $("#current_image").attr("src","images/slideshow5.png"); }

}

currentIndex=0
images=["first.jpg","second.jpg","third.jpg", "fourth.jpeg"]

setInterval(
    function() {
        currentIndex=[Math.round(Math.random()*3)]
     document.getElementById("img1").src = images[currentIndex]
    },5000
)

function changeImage(arrowtype){
    if(arrowtype=="right")
    {
        currentIndex= currentIndex==5?0:++currentIndex
    }
       
    else if(arrowtype=="left")
    {
        currentIndex= currentIndex==0?5:--currentIndex
    }
        
    document.getElementById("img1").src=images[currentIndex]
}


function toggleSlideShow() {
    var slideshowContainer = document.querySelector('#slide_area');
    var arrowIcon = document.querySelector('#arrow-icon');
  
    if (slideshowContainer.style.display === 'none') {
      slideshowContainer.style.display = 'block';
      arrowIcon.src = 'images/doubleup.png'; // Up arrow image
      arrowIcon.alt = 'Up arrow';
    } else {
      slideshowContainer.style.display = 'none';
      arrowIcon.src = 'images/doubledown.png'; // Down arrow image
      arrowIcon.alt = 'Down arrow';
    }
  }
// Switching between two images using a function that gets the original img by id and then changes it's source using if and else statements.
function changeImage() {
  var image = document.getElementById('original');
  if (image.src.match("https://www.tesla.com/sites/default/files/model3-new/social/model-3-hero-social.jpg")) {
    image.src = "https://s.aolcdn.com/commerce/autodata/images/USC80TSC032A021001.jpg";
  } else {
    image.src = "https://www.tesla.com/sites/default/files/model3-new/social/model-3-hero-social.jpg";
  }
}


// This grabs the left button by it's id and adds a click event listener which moves ball left by changing it's position by getting it's id and moving it left by pixels.
document.getElementById('left').addEventListener('click', function() {
	var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) - 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});

// This grabs the right button by it's id and adds a click event listener which moves ball right by changing it's position by getting it's id and moving it right by pixels.
document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});

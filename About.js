document.addEventListener('DOMContentLoaded', function() {
    // console.log('DOMContentLoaded');
    var navbar = document.getElementById('navbar');
    var isZoomedIn = false;

    window.onscroll = function() {
      // Get the scroll position
      var scrollPos = window.scrollY || document.documentElement.scrollTop;

      // Calculate the zoom factor (adjust as needed)
      var zoomFactor = 1 + scrollPos / 10;
    //   var zoomFactor = 1 + Math.max(0, (scrollPos - window.innerHeight / 2) / 500);

    // Apply the zoom effect to the navbar and adjust width
    navbar.style.transform = 'scaleY(' + zoomFactor + ')';
    // navbar.style.width = .01 / zoomFactor - '0.05%';
    navbar.style.height = .01 / zoomFactor + '0.05%';
    console.log(`height : ${navbar.style.height}`);
    // console.log(navbar.style.transform + " " + navbar.style.width + " " + navbar.style.height);
    // if (zoomFactor >= 5)
    // {
    //     console.log('scrollPos : ' + scrollPos);
    //     console.log('Zoom Factor : ' + zoomFactor);
    
    // }
      // Toggle the zoom direction based on scroll direction
      // if (scrollPos > 0 
      //     // && 
      //     // !isZoomedIn
      //     ) {
      //   // Zoom in
      //   console.log('zoom in');
      //   isZoomedIn = true;
      //   navbar.style.backgroundImage = 'url("amazing-shot-beautiful-butchart-gardens-brentwood-bay.jpg")';
      //   navbar.classList.remove('transition-transform');
      //   navbar.style.backgroundColor = '#3498db';
      // } 
       if (scrollPos >= 40
         && 
         !isZoomedIn
         ) {
        // Zoom out
        console.log('zoom out');
        isZoomedIn = false;
        navbar.style.backgroundImage = 'none';
        navbar.classList.add('transition-transform');
        navbar.style.backgroundColor = '#333'; 
        navbar.innerHTML = '<a href="https://www.google.com" class="text-white">Clickable Link</a>';
        // document.getElementById('map').style.display = 'block';
      }
    };
  });
  
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7749, lng: -122.4194}, // Replace with the desired map center coordinates
      zoom: 12 // Adjust the zoom level as needed
    });
  }
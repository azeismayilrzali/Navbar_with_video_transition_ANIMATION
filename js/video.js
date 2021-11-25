document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("video__flex");
  container.onmouseover = container.onmouseout = handler;

  function handler(event) {
    function str(el) {
      if (!el) return "null";
      return el.className || el.tagName;
    }

    if (event.type == "mouseover") {
      if (str(event.target) == "feature ft1") {
        video = document.getElementById("v1");
        video.style.opacity = 1;
        video.children[0].play();
      }
      if (str(event.target) == "feature ft2") {
        video = document.getElementById("v2");
        video.style.opacity = 1;
        video.children[0].play();
      }
      if (str(event.target) == "feature ft3") {
        video = document.getElementById("v3");
        video.style.opacity = 1;
        video.children[0].play();
      }
      if (str(event.target) == "feature ft4") {
        video = document.getElementById("v4");
        video.style.opacity = 1;
        video.children[0].play();
      }
    }
    if (event.type == "mouseout") {
      if (str(event.target) == "feature ft1") {
        video = document.getElementById("v1");
        video.style.opacity = 0;
        video.children[0].pause();
      }
      if (str(event.target) == "feature ft2") {
        video = document.getElementById("v2");
        video.style.opacity = 0;
        video.children[0].pause();
      }
      if (str(event.target) == "feature ft3") {
        video = document.getElementById("v3");
        video.style.opacity = 0;
        video.children[0].pause();
      }
      if (str(event.target) == "feature ft4") {
        video = document.getElementById("v4");
        video.style.opacity = 0;
        video.children[0].pause();
      }
    }
  }
  let video_flex = document.getElementById('video__flex');
  video_flex.addEventListener('mousemove', function(e) {
      
      let video = document.getElementById('feature-videos');
      let left = e.pageX -420;
      let top = e.pageY-180;
      let time = setTimeout(() => {
        video.style.left = left + 'px';
        video.style.top = top + 'px';
      }, 150);
      console.log(left,top);
      
  });
});

// $(document).ready(function() {
//     $(this).on("click", function(e) {
//       var x = e.pageX;
//       var y = e.pageY;
//       var el = $("#meh");
//       el.css('position', 'absolute');
//       el.css("left", x);
//       el.css("top", y);
//     })
//   })

//   document.addEventListener('mousemove', function(e) {
//     let body = document.querySelector('body');
//     let circle = document.getElementById('circle');
//     let left = e.offsetX;
//     let top = e.offsetY;
//     circle.style.left = left + 'px';
//     circle.style.top = top + 'px';
//   });

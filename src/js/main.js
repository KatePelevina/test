// const sum = require("./module/sum.js");
// console.log(sum(2,10));
// console.log(sum(12,5));

$('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');

  menuBtn.addEventListener('click', function(){
	  menuBtn.classList.toggle('active');
	  menu.classList.toggle('active');
  })


  
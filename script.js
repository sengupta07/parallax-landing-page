document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.sec-text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
});
});

jQuery(document).ready(function($) {
  // Now you can safely use $ within this function
  $(".button").click(function() {
    $(this)
      .closest(".expandCard")
      .toggleClass("expand")
      .promise()
      .done(function() {
        if ($(".expandCard").hasClass("expand")) {
          $(".expandCard")
            .not(".expandCard.expand")
            .addClass("flexhide");
        } else {
          console.log("it ran");
          $(".expandCard.flexhide").removeClass("flexhide");
        }
      });
  });
  $(function () {
      $(".card-container>.card").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
      });
    });
  });

  // document.addEventListener('DOMContentLoaded', function () {
  //   // Register the ScrollTrigger plugin (assuming you're using it elsewhere)
  //   gsap.registerPlugin(ScrollTrigger);
  
  //   // Define the letters for random animation
  //   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  //   // Select all elements with the class "random-words"
  //   const randomWordElements = document.querySelectorAll('.random-words');
  
  //   // Add a mouseover event listener to each "random-words" element
  //   randomWordElements.forEach(randomWordElement => {
  //     randomWordElement.addEventListener('mouseover', event => {
  //       let iteration = 0;
  //       let interval;
  
  //       clearInterval(interval);
  
  //       interval = setInterval(() => {
  //         event.target.innerText = event.target.innerText
  //           .split("")
  //           .map((letter, index) => {
  //             if (index < iteration) {
  //               return event.target.dataset.value[index];
  //             }
  
  //             return letters[Math.floor(Math.random() * 26)];
  //           })
  //           .join("");
  
  //         if (iteration >= event.target.dataset.value.length) {
  //           clearInterval(interval);
  //         }
  
  //         iteration += 1 / 5;
  //       }, 30);
  //     });
  //   });
  // });


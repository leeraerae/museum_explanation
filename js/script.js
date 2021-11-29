

// var mouseWheelEvt = function (event) {
//   if (document.body.doScroll)
//       document.body.doScroll(event.wheelDelta>0?"left":"right");
//   else if ((event.wheelDelta || event.detail) > 0)
//       document.body.scrollLeft -= 10;
//   else
//       document.body.scrollLeft += 10;

//   return false;
// }
// document.body.addEventListener("mousewheel", mouseWheelEvt);


// -------------------------------------
// 작동된다... 하지만 x버튼이 fixed 가 안된다...
// const container = document.querySelector('body');
// const closeButton = document.querySelector('#subCloseButton');
// let offset = 0;




// window.addEventListener('wheel', (e) => {
//     offset += Math.sign(e.deltaY) * 60;


//     if (offset < 0) {
//         offset = 0;
//     } else if (offset > 6000 - window.innerWidth) {
//         offset = 6000 - window.innerWidth;
//     }
    
//     container.style.transform = `translateX(-${offset}px`;
//     x
// });

// ---------------
// (function () {
//   let element = document.querySelector('body')
//   element.addEventListener('wheel', (e) => {
//     if (e.deltaY !== 0) {
//       e.preventDefault()
//       window.requestAnimationFrame(() => {
//         element.scrollLeft += e.deltaY
//       })
//     }
//   })
// })()


// ----------------------------

class scrollLeft {
  constructor() {
		
    window.addEventListener('wheel', (e) => {
			e.preventDefault();
			
			const scrollX = e.deltaX;
			const scrollY = e.deltaY;
			const scrollVal = window.pageXOffset + (scrollX + scrollY);
			// const scrollVal = window.pageXOffset + (scrollX || scrollY);
      window.scrollTo(scrollVal, 0);
			
			console.log(scrollX, scrollY);

    }, { passive: false } );
		
  }
}

new scrollLeft();
let rect =  document.querySelector('.center');

rect.addEventListener('mousemove', (e) => {
    
    let recPos = rect.getBoundingClientRect();
    let recInsidePos = e.clientX  - recPos.left;
    let colorValue =   gsap.utils.mapRange(0, recPos.width, 255, 0, recInsidePos);
    if(recInsidePos < recPos.width/2){
   
        gsap.to(rect, {
            backgroundColor: `rgb(${colorValue}, 0, 0)`,
            ease: Power4,
        })
    }
    else{
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${colorValue})`,
            ease: Power4,
        })
    }
})

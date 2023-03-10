const bugger = document.querySelector('#nav-toggle')
const active = document.querySelector('#nav-menu')
const color1 = document.querySelectorAll('.sneaker__color1')
const sneaker1 = document.querySelectorAll('.sneaker__img1');
const color2 = document.querySelectorAll('.sneaker__color2')
const sneaker2 = document.querySelectorAll('.sneaker__img2');


bugger.addEventListener('click',(()=>{
    active.classList.toggle('bugger')
    
}))


color1.forEach((e)=>{
    e.addEventListener('click',((item)=>{
        const primary = item.target.getAttribute('primary1')
        const color = item.target.getAttribute('color1')
        const img = document.querySelector(`.sneaker__img1[color1='${color}']`)
         
        const v = '--black-color';
        const dan = document.documentElement.style.setProperty(v, color);
        sneaker1.forEach((e)=>{ e.classList.remove('active1')  })
        img.classList.add('active1')
         
    }))

})

color2.forEach((e)=>{
  e.addEventListener('click',((item)=>{
      const primary = item.target.getAttribute('primary2')
      const color = item.target.getAttribute('color2')
      const img = document.querySelector(`.sneaker__img2[color2='${color}']`)
       
      const v = '--blue';
      const dan = document.documentElement.style.setProperty(v, color);
      sneaker2.forEach((e)=>{ e.classList.remove('active2')  })
      img.classList.add('active2')
       
  }))

})


 var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });
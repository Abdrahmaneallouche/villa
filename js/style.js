let num=document.querySelectorAll(".counter .num ");
let interval = 300;

num.forEach((value)=> {
  let startValue =0;
  let endValue=parseInt(value.getAttribute('data-goal'));
let duration = Math.floor(interval / endValue);
let counter = setInterval(function(){
  startValue += 1;
  value.textContent=startValue;
  if(startValue == endValue){
    clearInterval(counter);
  }
},duration )
})
let btn = document.querySelectorAll(".tabs-content .nav a");
let option=document.querySelectorAll('.tabs-content .swipe .items');
console.log(option);
let content1=document.getElementById('content1');
let content2=document.getElementById('content2');
let content3=document.getElementById('content3');
let btn1=document.getElementById('btn1');
let btn2=document.getElementById('btn2');
let btn3=document.getElementById('btn3');
function openAppartement(){
  content1.style.transform="translateX(0)";
  content2.style.transform="translateX(101%)";
  content3.style.transform="translateX(101%)";
}
function openVilla(){
  content1.style.transform="translateX(101%)";
  content2.style.transform="translateX(0%)";
  content3.style.transform="translateX(101%)";
}

function openPenthouse(){
  content1.style.transform="translateX(101%)";
  content2.style.transform="translateX(101%)";
  content3.style.transform="translateX(0)";
}





// Get the container element


// Get all buttons with class="btn" inside the container
let buttons = document.querySelectorAll('.buttons button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click',function(){
    let activeButton = document.querySelector('.buttons button.active');
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    this.classList.add('active');
  });
}
const tabContents = document.querySelectorAll('.tabs-content');
buttons.forEach((tab,index)=>{
  tab.addEventListener('click',function(){
     // Hide all tab contents
    tabContents.forEach(content=>{
      content.classList.add('.show')
      let show = document.querySelector('.tabs-content.show');
      if (show) {
        show.classList.remove('show');
      }
    });
    // Show the selected tab content
    tabContents[index].classList.add('show')
  });
});
let filterButtons=document.querySelectorAll('.properties-filter li');
let filterableCards = document.querySelectorAll(".cards .row .option");

let filterOpt=e=>{
  document.querySelector('.active').classList.remove('active');
  e.target.classList.add('active')
  filterableCards.forEach(card=>{
    card.classList.add('hide')
    if(card.dataset.name==e.target.dataset.name||e.target.dataset.name=='all'  ){
      card.classList.remove("hide")

    }
  })
}
filterButtons.forEach(button=> button.addEventListener('click',filterOpt))
window.addEventListener('scroll', function(){
  let head=document.querySelector('header');
  head.classList.toggle('sticky',window.scrollY > 400)
})
const navBtn = document.querySelector(".nav-toggle");
const exitBtn = document.querySelector(".exit");
const sideBar = document.querySelector(".sidebar");



navBtn.addEventListener('click', ()=>{
//  console.log(sideBar.classList);
  sideBar.classList.toggle("showside");
} )

exitBtn.addEventListener('click', ()=>{
    sideBar.classList.add("showside");
})
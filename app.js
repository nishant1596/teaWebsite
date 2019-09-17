const show=document.getElementById("nav-btn");
const close=document.getElementById("nav-close")
show.addEventListener("click",function () {
  document.getElementById("navbar").classList.add("showNav")
});
close.addEventListener("click",function () {
  document.getElementById("navbar").classList.remove("showNav")
})

/*Freezeframe.js play/pause buttons (and disable funny sizing and hover)*/
document.addEventListener("DOMContentLoaded", function(event) {
  const e = new Freezeframe({ trigger: false, responsive: false });
  document.getElementById("play-gif").addEventListener("click", function(){ e.start() });
  document.getElementById("stop-gif").addEventListener("click", function(){ e.stop() });
});
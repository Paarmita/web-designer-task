const modal = document.getElementById("dialog-container");
const applyBtn = document.getElementById("apply-btn");
const closeBtn = document.getElementById("close");
const sendBtn = document.getElementById("send-application");
const applyStatus = document.getElementById("apply-status");

applyBtn.onclick = function () {
  modal.style.display = "block";
};
closeBtn.onclick = function () {
  modal.style.display = "none";
};
sendBtn.onclick = function () {
  modal.style.display = "none";
  applyStatus.innerHTML =
    '<div style="display:inline-flex;align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg> Applied</div>';
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

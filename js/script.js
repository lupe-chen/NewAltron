/* ---------------登入表單------------------ */
function myFunction() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

// 點擊其他地方關閉表單
document.addEventListener("click", function() {
  const dropdown = document.getElementById("myDropdown");
  const loginBtn = document.querySelector(".login-btn");
  
  if (!dropdown.contains(event.target) && !loginBtn.contains(event.target)) {
      dropdown.classList.remove("show");
  }
});

/* ---------------hamburger----------------- */

$('#mobileMenuIcon').click(function(){
  $(this).toggleClass('active')
});

/* ---------------mobile-menu------------------ */
const mobileMenuIcon = document.getElementById('mobileMenuIcon');
const mobileMenu = document.getElementById('mobileMenu');

// 點擊事件切換顯示和隱藏
mobileMenuIcon.addEventListener('click', () => {
  if (mobileMenu.classList.contains('show')) {
    mobileMenu.classList.remove('show');
    setTimeout(() => {
      mobileMenu.style.display = 'none';
    }, 1000);
  } else {
    mobileMenu.style.display = 'block';
    setTimeout(() => {
      mobileMenu.classList.add('show');
    }, 10);
  }
});
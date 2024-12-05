/* ---------------登入表單------------------ */
// 點擊member開啟選單
function myFunction(event) {
  // 阻止默認跳轉
  event.preventDefault();

  // 切換顯示/隱藏類名
  document.getElementById("myDropdown").classList.toggle("show");
}

// 點擊其他地方時關閉選單
window.onclick = function (event) {
  if (!event.target.matches('dropbtn')) {
    const dropdowns = document.getElementsByClassName("login");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* ---------------手機 mobile-navigation------------------ */

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


// $(document).ready(function () {
//     console.log("script.js 已加載成功");
//     $("#testButton").click(function () {
//       alert("按鈕已被點擊！");
//     });
//   });

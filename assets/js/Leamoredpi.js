// 获取当前窗口的宽度和高度
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// 获取网页的所有元素，并存储在一个数组中
var allElements = document.getElementsByTagName("*");

// 遍历所有的元素，并设置它们的宽度和高度为窗口的一半
for (var i = 0; i < allElements.length; i++) {
  allElements[i].style.width = winWidth / 2 + "px";
  allElements[i].style.height = winHeight / 2 + "px";
}

// 监听窗口的大小变化
window.onresize = function() {
  // 重新获取窗口的宽度和高度
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;

  // 重新设置每个元素的宽度和高度为窗口的一半
  for (var i = 0; i < allElements.length; i++) {
    allElements[i].style.width = winWidth / 2 + "px";
    allElements[i].style.height = winHeight / 2 + "px";
  }
};
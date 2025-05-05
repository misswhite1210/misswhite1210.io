const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const questionText = document.getElementById("question");
const mainImage = document.getElementById("mainImage");

// 读取URL参数name，限制最大长度为20字符
const params = new URLSearchParams(window.location.search);
const username = params.get("name");
const maxLength = 20;
const safeUsername = username ? username.substring(0, maxLength) : "???";

if (username) {
  questionText.innerText += safeUsername;
}

let clickCount = 0;
const noTexts = ["？你认真的吗…", "要不再想想？", "不许选这个！", "我会很伤心…", "不行:("];

noButton.addEventListener("click", () => {
  clickCount++;

  // 放大“可以”按钮
  const yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;

  // “不要”按钮向右移动
  const noOffset = clickCount * 50;
  noButton.style.transform = `translateX(${noOffset}px)`;

  // 图片和问题文字向上移动
  const moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;

  // 改变“不要”按钮文字
  if (clickCount <= noTexts.length) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  // 根据点击次数切换gif图片
  let imgName = "";
  if (clickCount === 1) imgName = "shocked.gif";
  else if (clickCount === 2) imgName = "think.gif";
  else if (clickCount === 3) imgName = "angry.gif";
  else if (clickCount >= 4) imgName = "crying.gif";

  if (imgName) {
    mainImage.src = `images/${imgName}?t=${Date.now()}`;
  }
});



yesButton.addEventListener("click", function () {
  // 先创建基础 HTML 结构
  document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text"></h1>
            <img src="images/OIP.jpg" alt="自嘲熊" class="yes-image">
        </div>
    `;

  // 确保用户名安全地插入
  document.querySelector(".yes-text").innerText = loveTest;

  // 禁止滚动，保持页面美观
  document.body.style.overflow = "hidden";
});



// yesButton.addEventListener("click", () => {
//   // 重置所有动画样式
//   yesButton.style.transform = "scale(1)";
//   noButton.style.transform = "translateX(0)";
//   mainImage.style.transform = "translateY(0)";
//   questionText.style.transform = "translateY(0)";

//   // 把当前显示的gif替换成OIP.jpg
//   mainImage.src = `images/OIP.jpg?t=${Date.now()}`;

//   // 修改文字内容
//   questionText.innerText = "你选择了“可以”，谢谢你！";

//   // 重置点击计数，防止后续“不要”按钮异常
//   clickCount = 0;

//   // 重置“不要”按钮文字
//   noButton.innerText = "不要";
// });
